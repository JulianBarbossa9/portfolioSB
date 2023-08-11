import React, { useState } from 'react'

const NavMenu = () => {
  
  const [ showNav, setShowNav ] = useState(false)
  
  return (
    <div className=' fixed z-10 w-screen left-0 top-0  decoration-white py-3 bg-dark-bg'>
      <div className=' absolute right-3 top-3 w-3 cursor-pointer disp hidden outline-0 pointer-events-none sm:block'
        onClick={() => setShowNav(!showNav)}
        role='button'
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        
      </div>
    </div>
  )
}

export default NavMenu