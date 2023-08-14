import * as THREE from 'three'
import { useCursor, GradientTexture, MeshDistortMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

const FlagThree = () => {

  // background-image: linear-gradient(180deg, #ffb629 0, #ffa537 10%, #ff9243 20%,
  // #ff7e4b 30%, #ff6951 40%, #f25353 50%, #d93f53 60%, #c22f54 70%, #ad2355 80%, #9b1b56 90%, #8c1859 100%)
  
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
          <GradientTexture stops={[0,0.8,1]} colors={['#e63946', '#f1faee', '#a8dadc']} size={100}/>
        </MeshDistortMaterial>
      </mesh>
    </>
  )
}

export default FlagThree