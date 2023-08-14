
import NavMenu from './components/NavMenu';
import { Outlet } from 'react-router-dom';
import CanvasSection from './components/CanvasSection';
import ScroollToTop from './components/ScroollToTop';


function App() {

  return (
    <>
    <NavMenu />
    <ScroollToTop />
    {/* <BackgroundTest> */}
      <CanvasSection />
      <div id="detail">
        <Outlet />
      </div>
    {/* </BackgroundTest> */}
      
    </>
  )
}

export default App
