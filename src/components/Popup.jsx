import React from "react";
import "../Global.css";
import { MdCloseFullscreen } from "react-icons/md";

// import {useState} from 'react';
export default function () {
// function handle(e)
//     {
//         e.preventDefault();
//         console.log(e)
//     }
// const [back, setback] = useState(false)
  return (
    <div  className=" fixed  h-screen w-full flex   items-center  justify-center backdrop-blur-lg   z-50    ">
      
      <div className="   backdrop-filter   backdrop-blur-3xl   m-4 md:w-3/5 w-full h-96 glass border-sky-300 border rounded-3xl box flex   flex-col gap-6  justify-center items-center">
        <div className="">
        <MdCloseFullscreen/>
        </div>
        <div className=" text-lg primary-font">Please Enter your Admin Credentials  </div>
       
            <input type="text  " className="   primary-font text-center text-sky-400 text-xl h-9 focus:border-sky-500 focus:text-2xl border border-sky-300 glass rounded-3xl  "></input>
            <input type="password" className=" primary-font text-center text-sky-400 text-xl h-9 active:border-sky-500 focus:text-2xl border border-sky-300 glass rounded-3xl "></input>
            
            <button type="submit" className=" w-1/5 rounded-lg text-xl primary-font  lg:text-2xl  "  > Login</button>
  
        
      </div>
    </div>
  );
}
