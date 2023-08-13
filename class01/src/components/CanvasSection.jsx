import React from 'react'
import { Canvas } from '@react-three/fiber'
import { AsciiRenderer } from '@react-three/drei'
import TorusKnot from './TorusKnot'

const CanvasSection = () => {
  return (
    <>
      <Canvas className='canvas'>
          <color attach='background' args={['black']}/>
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <spotLight position={[-10, -10, -10]}  />
          <TorusKnot />
          <AsciiRenderer fgColor="white" bgColor="transparent" />
      </Canvas>
    </>
  )
}

export default CanvasSection