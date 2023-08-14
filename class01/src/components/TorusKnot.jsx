import { useFrame, useThree } from '@react-three/fiber'
import React from 'react'
import { useRef } from 'react'

const TorusKnot = (props) => {
  const ref = useRef()
  const viewport = useThree((state) => state.viewport)

  useFrame((state, delta) => 
  (ref.current.rotation.x = ref.current.rotation.y += delta /2))
  return (
    <>
      <mesh scale={Math.min(viewport.width, viewport.height) / 9} {...props} ref={ref}> 
        <torusKnotGeometry args={[3.3, 0.5, 80, 100]} />
        <meshStandardMaterial color='red' />
        {/* 1, 0.5, 128, 3 */}
      </mesh>
    </>
  )
}

export default TorusKnot