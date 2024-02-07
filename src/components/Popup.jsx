import React, { useState } from "react";
import "../Global.css";
import { IoMdClose } from "react-icons/io";
import { togglePopup } from "../Slice/popupSlice";
import { useDispatch } from "react-redux";


export default function () {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
   dispatch(togglePopup()), 300;
    setIsOpen(!isOpen)
  };
  const dispatch= useDispatch()
  return (
    <div  className={`fixed h-screen w-full flex justify-center backdrop-blur-lg  transition duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'} `}>
      
      <div className="  md:mt-48  backdrop-filter   backdrop-blur-3xl   m-4 md:w-3/5 w-full h-96 glass border-sky-300 border rounded-3xl box flex   flex-col gap-6  justify-center items-center shadow-lg shadow-sky-100">
            <div className=" relative md:left-[43 %] left-[40%] text-3xl -top-8 p-0.5 text-sky-200 glass rounded-full    " onClick={ handleClose}>
                  <IoMdClose className="animate-pulse  "/>
            </div>
            <div className=" text-lg xl:text-2xl primary-font">Please Enter your Admin Credentials  </div>
       
            <input type="text  " placeholder="username" className="   primary-font text-center text-sky-400 text-xl h-9 focus:border-sky-500 focus:text-2xl border border-sky-300 focus:outline-none  glass rounded-3xl  "></input>
            <input type="password" placeholder="password" className=" primary-font text-center text-sky-400 text-xl h-9 active:border-sky-500 focus:text-2xl border border-sky-300 focus:outline-none glass rounded-3xl "></input>
            
            <button type="submit" className=" w-1/5 rounded-lg text-xl primary-font  lg:text-2xl  hover:scale-125 transition-all "  > Login</button>
  
        
      </div>
    </div>
  );
}
