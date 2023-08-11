// extend = Se utiliza para extender las funcionalidades de los componentes de Three.js y crear componentes personalizados con React. Permite crear nuevos componentes que hereden características y métodos de los componentes existentes de Three.js.
import { useFrame, extend, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './CustomObject'


// console.log(OrbitControls)
// extend({ OrbitControls: OrbitControls})
// Is the same -
// extend({ OrbitControls }) //------------

const Experience = () => {

  const cubeRef = useRef()
  // const sphereRef = useRef()
  const groupRef = useRef()
  // const { camera, gl } = useThree()
  // console.log(camera, gl)

  useFrame ((state, delta) => {
    // console.log(delta)
    // makes it take the frames of the respective screen so that the animation is the same on any screen.
    // cubeRef.current.rotation.y += delta
    // sphereRef.current.rotation.y += delta
    // groupRef.current.rotation.y += delta
    // console.log(cubeRef.current)
    // console.log(state.clock.elapsedTime)
    /**
     * We can do the camera rotate 360 degrees
     */
    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle) * 8
    // state.camera.position.z = Math.cos(angle) * 8
    // state.camera.lookAt(0,0,0)
  })

  // we need import orbitControl becouse this class not is include in three


  return (
    <>
     
      {/* <orbitControls args={[ camera, gl.domElement ]}/> ------ */}

      <directionalLight position={[ 1,2,3 ]}  intensity={1.2} />
      <ambientLight intensity={0.5}/>


      <group ref={ groupRef }>
        {/* change the scale [x, y, z] position is {x,y,z}*/}
        <mesh position-x={-2} >
          {/* another form is position-x={2} */}
          {/* radius, widthSegments, heightSegments */}
          {/* <sphereGeometry args={ [1.5, 32, 32] } /> */}
          <sphereGeometry />
          {/* <meshBasicMaterial args={[{ color: 'red', wireframe: true }]}/> */}
          <meshStandardMaterial color='orange'  />
        </mesh>

        <mesh ref={ cubeRef } scale={1.5} position={[2, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color='mediumpurple' />
        </mesh>
      </group>

      <mesh rotation={[8, 0, 0]} scale={10} position-y={-1} rotation-x={-Math.PI * 0.5} >
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>


      {/* <CustomObject /> */}
    </>
  )
}

export default Experience