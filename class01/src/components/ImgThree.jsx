import { CameraControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Side from './Side'

const ImgThree = () => {
  return (
    <>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2,2,2]} />
          <Side rotation={[0,0,0]} bg='orange' index={0}> 
            <torusGeometry args={[0.65, 0.3, 64]} />
          </Side>
          <Side rotation={[0,Math.PI,0]} bg='lightblue' index={1}> 
            <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
          </Side>
          <Side rotation={[0,Math.PI / 2 ,Math.PI / 2]} bg='lightgreen' index={2}> 
            <boxGeometry args={[1.15, 1.15, 1.15]} />
          </Side>
          <Side rotation={[0,Math.PI / 2 ,Math.PI / 2]} bg='aquamarine' index={3}> 
            <octahedronGeometry />
          </Side>
          <Side rotation={[0,Math.PI / 2 ,0]} bg='indianred' index={4}> 
            <icosahedronGeometry />
          </Side>
          <Side rotation={[0,Math.PI / 2 ,0]} bg='hotpink' index={5}> 
            <dodecahedronGeometry />
          </Side>
        </mesh>
        <CameraControls makeDefault />
    </>
  )
}

export default ImgThree