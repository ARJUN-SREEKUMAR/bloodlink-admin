import React from "react";
import HERO from "../assets/hero02.png";
import HERO2 from "../assets/hero01.png";
import { useState,useEffect,useRef } from "react";
import { togglePopup } from "../Slice/popupSlice";
import { useDispatch,useSelector } from "react-redux";
import "../Global.css";


function Hero() {
    const pop =useSelector((select)=>select.popup.value)
    const dispatch=useDispatch()
    const heroimgref = useRef(null)
    const [clicked, setclicked] = useState(false)
    function handleClick() {
        setclicked(true);
        dispatch(togglePopup())
    }
   
    
    
  return (
    <div className="my-40 overflow-auto  " ref={heroimgref}>

      <div className=" flex md:flex-row-reverse flex-wrap md:pt-2   xl:px-40 justify-center " >
        <img src={HERO} alt="some image is there "   className={` w-3/4 lg:w-[39%] md:w-1/2 h-auto ${pop?'2xl:fixed 2xl:left-10 2xl:top-56' : ''}  ` }/>
        <div className=" flex flex-col items-center p-10 2xl:my-auto lg:gap-y-8 gap-y-2 w-full md:w-3/5 ">
          <h1 className=" text-xl md:text-2xl  2xl:text-4xl primary-font ">blood Link </h1>
          {/* <p className="md:text-2xl text-base text-nowrap primary-font px-12 ">Revolutionizing Blood Donation Management</p> */}
          <p className="  text-sky-100 md:text-xl py-1 text-justify  primary-font ">
          Welcome to Blood Link, your go-to solution for efficient and organized blood donation management.Our app is designed to streamline the blood donation process, connecting donors with those in need seamlessly, ensuring a swift and life-saving response to critical situations.
            </p>
            <button className="  primary-font   text-sky-300  p-2 border-solid border-2 rounded   border-sky-900  hover:text-sky-200 border-glow text-sm md:text-lg hover:border-glow">
            download Now
          </button>
        </div>
      </div>

    

      <div className=" z-50 flex md:flex-row flex-wrap md:pt-2  xl:px-40 justify-center">
        <img src={HERO2} alt="some image is there "  className="   w-3/4 lg:w-[40%]  md:w-1/2 h-auto  "/>
        <div className=" flex flex-col items-center p-10 2xl:my-auto  lg:gap-y-8 gap-y-2 w-full md:w-3/5 ">
          <h1 className=" text-xl md:text-2xl  2xl:text-4xl primary-font ">blood Link Admin </h1>
          {/* <p className="md:text-2xl text-base text-nowrap primary-font px-12 ">Revolutionizing Blood Donation Management</p> */}
          <p className=" text-sky-100 md:text-xl py-1 text-justify primary-font">
          Explore the heart of Blood Link Admin Portal, a comprehensive solution dedicated to overseeing and optimizing blood donation operations. Within our platform, meticulous craftsmanship converges with advanced technology to effortlessly streamline administrative tasks, fostering seamless coordination among blood banks, donors, and recipients.
            </p>
            <button onClick={handleClick} className="  primary-font   text-sky-300  p-2 border-solid border-2 rounded   border-sky-900  hover:text-sky-200 border-glow text-sm md:text-lg hover:border-glow">
            register as Admin
          </button>
        </div>
      
      </div>
      
    </div>
  );
}

export default Hero;
