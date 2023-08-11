import { Edges, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Side from './Side'

const ImgThree = () => {
  return (
    <>
      {/* <directionalLight position={[ 1,2,3 ]}  intensity={1.2} />
      <ambientLight intensity={0.5}/>

      <OrbitControls enableDamping={false} makeDefault/> */}
      {/* <Canvas > */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2,2,2]} />
          <Edges />
          <Side rotation={[0,0,0]} bg='orange' index={0}> 
            <torusBufferGeometry args={[0.65, 0.3, 64]} />
          </Side>
        </mesh>
      {/* </Canvas> */}
    </>
  )
}

export default ImgThree