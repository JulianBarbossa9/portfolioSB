import * as THREE from 'three'
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei'
import { useControls } from 'leva'
import React from 'react'

const GelatineCube = (props) => {
  
  const { nodes, materials } = useGLTF('../gelatinous_cube_mod.gltf')
  const config = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 1048, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.06, min: 0, max: 1 },
    anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    attenuationColor: '#ffffff',
    color: '#c9ffa1',
    bg: '#839681'
  }) 
  return (
    <>
    gelatine
       {/* <group {...props} dispose={null}>
       <mesh geometry={nodes.polySurface2_cube_mat_0.geometry} position={[-0.56, 0.38, -0.11]}>
        {config.meshPhysicalMaterial ? <meshPhysicalMaterial {...config} /> : <MeshTransmissionMaterial background={new THREE.Color(config.bg)} {...config} />}
      </mesh> */}
         {/* cube */}
          {/* <mesh
            castShadow
            renderOrder={-100}
            geometry={nodes.polySurface2_cube_mat_0.geometry}
            material={materials.cube_mat}
            material-side={THREE.FrontSide}
            // receiveShadow
            position={[-0.556, 0.382, -0.111]}
          /> */}
         
         
          
          {/* bubbles */}
          {/* <mesh
            castShadow
            receiveShadow
            geometry={nodes.pSphere22_cube_bubbles_mat_0.geometry}
            material={materials.cube_bubbles_mat}
            position={[-0.556, 0.382, -0.111]}
            />
          <group position={[-0.56, 0.38,-0.11]}>
            {/* skeleton weapons */}
            {/* <mesh
              castShadow
              receiveShadow
              geometry={nodes.weapons1_weapons_mat_0.geometry}
              material={materials.weapons_mat}
              position={[-0.556, 0.382, -0.111]}
              /> */} 

            {/* skeleton  */}
            {/* <mesh
              castShadow
              receiveShadow
              geometry={nodes.skeleton_skele_mat_0.geometry}
              material={materials.skele_mat}
              position={[-0.556, 0.382, -0.111]}
            />
          </group>
          
        </group> */}
    </>
  )
}

export default GelatineCube