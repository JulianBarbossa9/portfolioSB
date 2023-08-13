
import NavMenu from './components/NavMenu';
import { Outlet } from 'react-router-dom';
import CanvasSection from './components/CanvasSection';


function App() {

  return (
    <>
    <NavMenu />
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
