import React from 'react'
import Nav from '../components/Nav'
import Bottombar from '../components/Bottombar'
import { useSelector } from "react-redux";
import { useState } from 'react';
function Admin() {
let sectionState =useSelector((state)=>state.admin.value)
  return (
    <div className='w-full h-screen text-white '>
        <Nav dash="true" ></Nav>
        {sectionState==="home" &&(<div className=" absolute    w-full  h-full   md:left-32 top-28 bg-slate-50 text-red-400 text-center text-4xl"> home</div>)}
        {sectionState==="requests" &&(<div className=" absolute box-content   w-full  h-full   md:left-32 top-28 bg-sky-500 text-red-400 text-center text-4xl"> requests</div>)}
        {sectionState==="alerts" &&(<div className=" absolute box-content   w-full  h-full   md:left-32 top-28 bg-slate-50 text-red-400 text-center text-4xl"> alerts</div>)}
        {sectionState==="settings" &&(<div className=" absolute box-content   w-full  h-full   md:left-32 top-28 bg-slate-50 text-red-400 text-center text-4xl"> Settings</div>)}
          <Bottombar></Bottombar>
          
    </div>
  )
}

export default Admin