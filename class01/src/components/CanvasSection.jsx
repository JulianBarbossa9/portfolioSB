import React from 'react'
import { Canvas } from '@react-three/fiber'
import { AsciiRenderer } from '@react-three/drei'
import TorusKnot from './TorusKnot'
import { styled } from 'styled-components'

const StyledCanvasSection = styled.div`
  position: fixed;
  margin-top: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Para asegurarse de que esté detrás del contenido de la aplicación */
`;

const CanvasSection = () => {
  return (
    <>
    <StyledCanvasSection>
      <Canvas className='canvas'>
          <color attach='background' args={['black']}/>
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <spotLight position={[-10, -10, -10]}  />
          <TorusKnot />
          <AsciiRenderer fgColor="white" bgColor="transparent" />
      </Canvas>
    </StyledCanvasSection>
    </>
  )
}

export default CanvasSection