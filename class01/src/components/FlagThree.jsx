import * as THREE from 'three'
import { useCursor, GradientTexture, MeshDistortMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

const FlagThree = () => {

  
  const ref = useRef()
  const [ hovered, setHovered ] = useState(false)
  useCursor(hovered)

  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
  })

  return (
    <>
      <mesh onPointerOver={() => setHovered(true)} onPointerOut={()=> setHovered(false)} scale={[2,4,1]}>
        <planeGeometry args={[2, 8, 32, 32]} />
        <MeshDistortMaterial  ref={ref} speed={5}>
          <GradientTexture stops={[0,0.5,1]} colors={['#e63946', '#c75b5b', '#ffffff']} size={100}/>
        </MeshDistortMaterial>
      </mesh>
    </>
  )
}

export default FlagThree