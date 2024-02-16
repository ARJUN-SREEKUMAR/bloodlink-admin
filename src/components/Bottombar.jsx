import React from 'react'
import { IoMdHome } from "react-icons/io";
import { MdAddToHomeScreen } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeState } from '../Slice/adminSlice';

function Bottombar() {
  let Section =useSelector((state)=>state.admin.value)
  const dispatch = useDispatch();
  // const [Section, setSection] = useState("home")
 function handleclick(sec){
  // setSection(sec);
  dispatch(changeState(sec));
}

  return (
    <div className='flex fixed bottom-0 md:bottom-auto md:top-20  h-16 flex-row md:flex-col w-full 2xl:w-[5%] xl:w-[6%] lg:w-[8%] md:w-[9%] md:h-[80%] justify-evenly  items-center blue-glass-admin overflow-y-hidden  '>

        <div className={` cursor-pointer flex ${Section==='home'? 'selected': ''} flex-col h-[80%]  items-center justify-center  rounded-xl m-2   w-[80%]  group  text-2xl hover:text-base `} onClick={()=>handleclick("home")}><IoMdHome/> <div className=' hidden group-hover:block    ' >
          Home
          </div></div>
        <div className={` cursor-pointer flex ${Section==='requests'?  'selected':''}   flex-col h-[80%]  items-center justify-center  rounded-xl m-2   w-[80%]  group  text-2xl hover:text-base `}  onClick={()=>handleclick("requests")}><MdAddToHomeScreen/> <div className=' hidden group-hover:block    '>
          Requests
          </div></div>
        <div className={` cursor-pointer flex ${Section==='alerts'?  'selected':''}  flex-col h-[80%]  items-center justify-center  rounded-xl m-2   w-[80%]  group  text-2xl hover:text-base `}onClick={()=>handleclick("alerts")}><FaBell/> <div className=' hidden group-hover:block    ' >
          Alerts
          </div></div>
        <div className={` cursor-pointer flex ${Section==='settings'?  'selected':''}  flex-col h-[80%]  items-center justify-center  rounded-xl m-2   w-[80%]  group  text-2xl hover:text-base `} onClick={()=>handleclick("settings")}><RiUserSettingsFill/> <div className=' hidden group-hover:block    ' >
          Settings
          </div></div>
        
        
    </div>
  )
}

export default Bottombar