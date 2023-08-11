import React, { useRef } from 'react'
import { OrbitControls, TransformControls, PivotControls, Html, Text, Float, MeshReflectorMaterial } from '@react-three/drei'

const VersionTwoExperience = () => {

  const cubeRef = useRef()
  const sphereRef = useRef()


  return (
    <>
      <directionalLight position={[ 1,2,3 ]}  intensity={1.2} />
      <ambientLight intensity={0.5}/>

      <OrbitControls enableDamping={false} makeDefault/>


      <group>
        <PivotControls 
          anchor={[ 0,0,0 ]}
          depthTest={false}
          lineWidth={2}
          axisColors={[ '#9381FF', '#FF4D6D','#7AE582']}
          scale={1}  
          // fixed={true} //whit fixed the control appera always of the same size
        >
          <mesh position-x={-2} ref={sphereRef}>
            <sphereGeometry/>
            <meshStandardMaterial color='orange' />    
            <Html 
              className=' text-black font-bold bg-white p-3 rounded-lg w-56 flex text-center justify-center'
              // center
              position={[ 1,1,0 ]}
              distanceFactor={ 9 }
              // hide the html for a certain figure whit a ref
              occlude={ [sphereRef, cubeRef]}
            >
              👍 Hello World
            </Html>    
           
          </mesh>
        </PivotControls>

        <mesh scale={1.5} position={[2, 0, 0]} ref={cubeRef}>
          <boxGeometry />
          <meshStandardMaterial color='mediumpurple' />
        </mesh>
        <TransformControls object={cubeRef} mode='translate'  />

      </group>

      <mesh rotation={[8,0,0]} scale={10} position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        {/* <meshStandardMaterial color='greenyellow' /> */}
        <MeshReflectorMaterial 
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0}
          mirror={0.5}
          color='red'
        />
      </mesh>

      {/* <Html>
        SB9
      </Html> */}
      <Float 
        speed={9}
        floatIntensity={2}
      >
        <Text
          font='./roboto-v30-latin-regular.woff2'
          fontSize={1}
          color='black'
          position-y={2}
          maxWidth={2} //space if are two lines
          textAlign='center'
        >
          Panaa anashee
          {/* <meshNormalMaterial /> */}
        </Text>
      </Float>
    </>
  )
}

export default VersionTwoExperience