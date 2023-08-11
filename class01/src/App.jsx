import './index.css'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import 'tailwindcss/tailwind.css';
import Experience from './Experience';
import VersionTwoExperience from './VersionTwoExperience';
import ImgThree from './components/ImgThree';


function App() {

  return (
    <>
      <div className='border-orange-800'>
        <div className='fixed top-0 left-0 w-full h-full overflow-hidden bg-blue-400'>
          {/* we can in this object canvas send parameters following the camera default structure like 'fov', 'near', 'far' */}
          <Canvas
            // flat
            // gl={{ antialias: false}}
            // dpr={[ 1,2 ]}
            camera={ {
              fov: 45,
              near: 0.1,
              far: 200,
              position: [ 5, 5, 2]
            }}
          >
            {/* <Experience /> */}
            {/* <VersionTwoExperience /> */}
            <ImgThree />
          </Canvas>
        </div>
        
      </div>
    </>
  )
}

export default App
