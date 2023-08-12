import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import Experience from './Experience';
import VersionTwoExperience from './VersionTwoExperience';
import ImgThree from './components/ImgThree';
import NavMenu from './components/NavMenu';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



function App() {

  return (
    <>
    <NavMenu />
    <div id="detail">
      <Outlet />
    </div>
    {/* </Routes> */}
        
          {/* <Canvas>
            <ImgThree />
          </Canvas> */}
       
      
    </>
  )
}

export default App
