import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
function Admin() {
  
  return (
    <div className='primary-bg-dark w-full h-screen text-white '>
        <Nav dash="true" ></Nav>
        <div className=" md:pt-20 pt- pb-4 z-10 md:h-full h-[94%]  md:px-5  ">
          {/* <Sidebar></Sidebar> */}
        </div>
    </div>
  )
}

export default Admin