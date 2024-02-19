import React from 'react'
import Nav from '../components/Nav'
import Bottombar from '../components/Bottombar'
import { useSelector } from "react-redux";
import { useState } from 'react';
function Admin() {
let sectionState =useSelector((state)=>state.admin.value)
  return (
        <div>
          <Nav ></Nav>
              <div className=' fixed
              top-20 w-full h-screen text-white bg-primary-dark pt-2 '>

          {sectionState==="home" &&(<div className="   relative  w-full  h-full    text-center text-4xl"> home</div>)}
          {sectionState==="requests" &&(<div className=" relative  box-content   w-full  h-full     text-center text-4xl"> requests</div>)}
          {sectionState==="alerts" &&(<div className=" relative  w-full  h-full    text-center text-4xl"> alerts</div>)}
          {sectionState==="settings" &&(<div className=" relative  box-content   w-full  h-full     text-center text-4xl"> Settings</div>)}
            <Bottombar></Bottombar>
              </div>
            
        </div>
  )
}

export default Admin