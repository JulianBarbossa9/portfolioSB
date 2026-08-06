import * as THREE from 'three'
import { useCursor, MeshDistortMaterial, GradientTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

const ORBITS = [
  { radius: 1.3, tilt: 0.4, speed: 0.6, particleColor: '#BCB4B4', particleSize: 0.06 },
  { radius: 1.7, tilt: -0.55, speed: -0.4, particleColor: '#ffffff', particleSize: 0.045 },
  { radius: 2.05, tilt: 1.1, speed: 0.3, particleColor: '#BCB4B4', particleSize: 0.05 },
]

const Orbit = ({ radius, tilt, speed, particleColor, particleSize, boost }) => {
  const group = useRef()

  useFrame((_, delta) => {
    group.current.rotation.y += speed * delta * (boost ? 2.2 : 1)
  })

  return (
    <group rotation={[tilt, 0, tilt * 0.4]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.006, radius + 0.006, 96]} />
        <meshBasicMaterial color="#BCB4B4" transparent opacity={0.18} side={THREE.DoubleSide} />
      </mesh>
      <group ref={group}>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[particleSize, 16, 16]} />
          <meshStandardMaterial color={particleColor} emissive={particleColor} emissiveIntensity={0.4} />
        </mesh>
      </group>
    </group>
  )
}

const OrbitCore = () => {
  const coreRef = useRef()
  const materialRef = useRef()
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)

  useFrame((_, delta) => {
    coreRef.current.rotation.y += delta * 0.15
    materialRef.current.distort = THREE.MathUtils.lerp(
      materialRef.current.distort,
      hovered ? 0.5 : 0.25,
      hovered ? 0.06 : 0.02
    )
  })

  return (
    <>
      <pointLight position={[3, 3, 3]} intensity={1.2} />
      <mesh
        ref={coreRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[0.85, 4]} />
        <MeshDistortMaterial ref={materialRef} speed={2} roughness={0.25} metalness={0.4}>
          <GradientTexture stops={[0, 0.5, 1]} colors={['#1E1E1E', '#BCB4B4', '#ffffff']} size={100} />
        </MeshDistortMaterial>
      </mesh>
      {ORBITS.map((orbit, index) => (
        <Orbit key={index} {...orbit} boost={hovered} />
      ))}
    </>
  )
}

export default OrbitCore
