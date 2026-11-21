import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { PORTFOLIO_DATA } from '@/data/content'

interface DataCore3DProps {
  mouse: { normalizedX: number; normalizedY: number }
  isReducedMotion?: boolean
}

// Procedural Particle Cloud representing high-dimensional data points
function DataPointsCloud({ count = 280 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const colorCyan = new THREE.Color('#06b6d4')
    const colorViolet = new THREE.Color('#8b5cf6')
    const colorEmerald = new THREE.Color('#10b981')

    for (let i = 0; i < count; i++) {
      // Spherical distribution around core
      const radius = 2.2 + Math.random() * 2.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      coords[i * 3 + 2] = radius * Math.cos(phi)

      // Random palette blend
      const chosenColor =
        i % 3 === 0 ? colorCyan : i % 3 === 1 ? colorViolet : colorEmerald
      colors[i * 3] = chosenColor.r
      colors[i * 3 + 1] = chosenColor.g
      colors[i * 3 + 2] = chosenColor.b
    }
    return { coords, colors }
  }, [count])

  const pointsRef = useRef<THREE.Points>(null)

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05
      pointsRef.current.rotation.x += delta * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points.coords, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[points.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

// Orbiting analytical rings with data beacons
function OrbitingAnalyticsRing({
  radius,
  rotationAxis,
  speed,
  color,
}: {
  radius: number
  rotationAxis: [number, number, number]
  speed: number
  color: string
}) {
  const ringRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * speed
    }
  })

  return (
    <group ref={ringRef} rotation={rotationAxis}>
      {/* Ring path */}
      <mesh>
        <torusGeometry args={[radius, 0.012, 16, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>

      {/* Orbiting data beacon node */}
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2.5}
        />
      </mesh>
    </group>
  )
}

export function DataCore3D({ mouse, isReducedMotion }: DataCore3DProps) {
  const groupRef = useRef<THREE.Group>(null)
  const innerCoreRef = useRef<THREE.Mesh>(null)
  const wireframeRef = useRef<THREE.Mesh>(null)

  // Smooth mouse tilt & animation loop
  useFrame((state, delta) => {
    if (!groupRef.current) return

    if (!isReducedMotion) {
      // Parallax camera tilt toward mouse
      const targetX = mouse.normalizedX * 0.4
      const targetY = mouse.normalizedY * 0.3
      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, delta * 2)
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, delta * 2)
      state.camera.lookAt(0, 0, 0)
    }

    // Inner core rotation
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y += delta * 0.2
      innerCoreRef.current.rotation.x += delta * 0.15
    }

    // Wireframe counter-rotation
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.12
      wireframeRef.current.rotation.z += delta * 0.08
    }
  })

  return (
    <>
      {/* Lighting setup for depth and glow */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#38bdf8" />
      <pointLight position={[-4, -3, -2]} intensity={2.0} color="#818cf8" />
      <pointLight position={[0, 0, 0]} intensity={3.0} color="#06b6d4" distance={5} />

      {/* 360 Interactive Orbit Controls: user can freely drag/rotate 360 degrees */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!isReducedMotion}
        autoRotateSpeed={PORTFOLIO_DATA.model3DConfig.autoRotateSpeed}
        rotateSpeed={0.8}
        dampingFactor={0.06}
      />

      <group ref={groupRef} scale={PORTFOLIO_DATA.model3DConfig.scale}>
        {/* Floating animated container */}
        <Float
          speed={isReducedMotion ? 0 : 2}
          rotationIntensity={isReducedMotion ? 0 : 0.5}
          floatIntensity={isReducedMotion ? 0 : 0.6}
        >
          {/* Inner Glowing Crystal Core */}
          <mesh ref={innerCoreRef}>
            <octahedronGeometry args={[0.9, 2]} />
            <MeshDistortMaterial
              color="#0284c7"
              emissive="#06b6d4"
              emissiveIntensity={0.6}
              distort={isReducedMotion ? 0 : 0.25}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Outer Analytical Wireframe Cage (Icosahedron) */}
          <mesh ref={wireframeRef}>
            <icosahedronGeometry args={[1.35, 1]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#06b6d4"
              emissiveIntensity={0.8}
              wireframe
              transparent
              opacity={0.65}
            />
          </mesh>

          {/* Orbiting Multi-tier Analytics Tracks */}
          <OrbitingAnalyticsRing
            radius={1.75}
            rotationAxis={[Math.PI / 4, 0, 0]}
            speed={0.4}
            color="#06b6d4"
          />
          <OrbitingAnalyticsRing
            radius={2.05}
            rotationAxis={[-Math.PI / 3, Math.PI / 6, 0]}
            speed={-0.3}
            color="#8b5cf6"
          />
          <OrbitingAnalyticsRing
            radius={2.3}
            rotationAxis={[Math.PI / 6, -Math.PI / 4, Math.PI / 3]}
            speed={0.25}
            color="#10b981"
          />

          {/* Data Points Galaxy Cloud */}
          <DataPointsCloud count={220} />
        </Float>
      </group>
    </>
  )
}
