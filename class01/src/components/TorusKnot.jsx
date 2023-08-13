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
      <mesh scale={Math.min(viewport.width, viewport.height) / 5} {...props} ref={ref}> 
        <torusKnotGeometry args={[1.5, 0.5, 120, 3]} />
        <meshStandardMaterial color='red' />
        {/* 1, 0.5, 128, 3 */}
      </mesh>
    </>
  )
}

export default TorusKnot