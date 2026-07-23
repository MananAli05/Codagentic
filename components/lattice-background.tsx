'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

// Clean, high-performance particle system of small floating blue and white circles
function FloatingBoxes({ count = 160 }) {
  const pointsRef = useRef<THREE.Points>(null)

  // Generate a smooth circular alpha mask texture to make the particles perfectly round
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)')
      gradient.addColorStop(0.85, 'rgba(255, 255, 255, 1.0)')
      gradient.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 64, 64)
    }
    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }, [])

  // Generate random base positions, colors, and velocities
  const [positions, colors, velocities, basePositions] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const basePos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)
    const vls = new Float32Array(count * 3)
    const color = new THREE.Color()

    for (let i = 0; i < count; i++) {
      // Spread positions across the viewport
      const posX = (Math.random() - 0.5) * 38
      const posY = (Math.random() - 0.5) * 26
      const posZ = (Math.random() - 0.5) * 14 - 6

      pos[i * 3] = posX
      pos[i * 3 + 1] = posY
      pos[i * 3 + 2] = posZ

      basePos[i * 3] = posX
      basePos[i * 3 + 1] = posY
      basePos[i * 3 + 2] = posZ

      // Assign blue (#2EAFFF) or bright white (#ffffff) to each circle
      const isWhite = Math.random() > 0.65
      const colStr = isWhite ? '#ffffff' : '#2EAFFF'
      color.set(colStr)
      cols[i * 3] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b

      // Set upwards float speed
      vls[i * 3] = (Math.random() - 0.5) * 0.15
      vls[i * 3 + 1] = 0.25 + Math.random() * 0.45 // Y rising speed
      vls[i * 3 + 2] = (Math.random() - 0.5) * 0.05
    }

    return [pos, cols, vls, basePos]
  }, [count])

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry()
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geom
  }, [positions, colors])

  useFrame((state, delta) => {
    const pts = pointsRef.current
    if (pts && pts.geometry.attributes.position) {
      const posAttr = pts.geometry.attributes.position as THREE.BufferAttribute
      const time = state.clock.getElapsedTime()
      const { x: px, y: py } = state.pointer // mouse coordinates [-1, 1]

      // Project pointer coordinates to approximate 3D plane
      const targetX = px * 14
      const targetY = py * 9

      for (let i = 0; i < count; i++) {
        // Float base coordinates upward (non-accumulating X/Y offset bug fix)
        let baseY = basePositions[i * 3 + 1] + velocities[i * 3 + 1] * delta * 1.5
        if (baseY > 15) {
          baseY = -15
          basePositions[i * 3] = (Math.random() - 0.5) * 38 // randomize X on loop
        }
        basePositions[i * 3 + 1] = baseY

        const baseX = basePositions[i * 3]
        const baseZ = basePositions[i * 3 + 2]

        // Add dynamic wave sway
        let currentX = baseX + Math.sin(time * 0.35 + i) * 0.4
        let currentY = baseY

        // Mouse repulsion: push circles away temporarily for this frame
        const diffX = currentX - targetX
        const diffY = currentY - targetY
        const distSq = diffX * diffX + diffY * diffY
        const repelRadius = 4.8
        if (distSq < repelRadius * repelRadius) {
          const dist = Math.sqrt(distSq)
          const force = (repelRadius - dist) / repelRadius
          currentX += (diffX / (dist + 0.001)) * force * 1.4
          currentY += (diffY / (dist + 0.001)) * force * 1.4
        }

        posAttr.setX(i, currentX)
        posAttr.setY(i, currentY)
        posAttr.setZ(i, baseZ)
      }
      posAttr.needsUpdate = true

      // Slow overall rotation of the field
      pts.rotation.y = time * 0.008
      pts.rotation.x = Math.sin(time * 0.002) * 0.015
    }
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.14}
        map={circleTexture}
        vertexColors
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export function LatticeBackground() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 bg-transparent"
    >
      <Canvas
        camera={{ position: [0, 0, 16], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <FloatingBoxes count={160} />
      </Canvas>
    </div>
  )
}
