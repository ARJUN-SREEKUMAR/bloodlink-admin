import '../Global.css'
import { IoMdClose } from "react-icons/io";
import { togglePopup } from "../Slice/popupSlice";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleLogged } from "../Slice/userSlice";
import { BiSolidShow ,BiSolidHide } from "react-icons/bi";
import {auth,db}  from "../Firebase/config"; //my config file
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection,  query, where, getDocs  } from 'firebase/firestore';
// import { query } from "firebase/database";
export default function () {

  const mail =useRef('')
  const pass = useRef('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    dispatch(togglePopup());
    setIsOpen(!isOpen);
  };
  const [show, setshow] = useState(false)
 const handleshow=()=>{
    setshow(!show);
  }
  const handleLogin = async () => {
    const email=mail.current.value
    const password =pass.current.value
    const adminCollection= collection(db,'admins')
    try {
    
      const q = query(adminCollection, where("email", "==", email));
      const results =await getDocs(q)
      console.log(results.docs[0].data())
        if (!results.empty) //login only if the mail is present in the admin 
         {
          await signInWithEmailAndPassword(auth, email, password);
          localStorage.setItem("user",JSON.stringify(results.docs[0].data()))
          const localUser=localStorage.getItem("user")
          // console.log(localUser)
          navigate("/dashboard");
          dispatch(togglePopup());
          dispatch(toggleLogged(localUser));
          
        }
   
    } catch (error) {
      alert(error)
    }
    
   
  };
  return (
    <div
      className={`fixed h-screen w-full flex justify-center backdrop-blur-lg  transition duration-1000 ${
        isOpen ? "opacity-100" : "opacity-0"
      } `}
    >
      <div className="  md:mt-48  backdrop-filter   backdrop-blur-3xl   m-4 md:w-3/5 w-full h-96 glass border-sky-300 border rounded-3xl box flex   flex-col gap-6  justify-center items-center shadow-lg shadow-sky-100">
        <div
          className=" relative md:left-[43 %] left-[40%] text-3xl -top-8 p-0.5 text-sky-200 glass rounded-full    "
          onClick={handleClose}
        >
          <IoMdClose className="animate-pulse  " />
        </div>
        <div className=" text-lg xl:text-2xl primary-font text-sky-400  ">
          Please Enter your Admin Credentials{" "}
        </div>

        <input
          type="text  "
          placeholder="username"
          className="   primary-font text-center px-5   text-sky-400 text-xl h-9 focus:border-sky-500 border border-sky-300 focus:outline-none  glass rounded-3xl  " 
         ref={mail}
        />

          <div className=" primary-font text-center px-5    text-sky-400 text-xl h-9   focus:border-sky-500 focus:text-2xl border border-sky-300 lfocus:outline-none glass rounded-3xl overflow-hidden  ">


        <input
          type={show?'text':'password'}
          placeholder="password"
          className=" relative  bg-transparent text-center focus:outline-none  top-1     "
       ref={pass}
        />
   
            <button onClick={handleshow} className=" relative  focus:outline-none top-2">
              {
                show?<BiSolidHide/>:<BiSolidShow/>
              }
            </button>
          </div>

        <button
          type="submit"
          className=" w-1/5 rounded-lg text-xl primary-font  lg:text-2xl text-sky-300 hover:scale-125 transition-all "
          onClick={handleLogin}

        >
          
          Login
        </button>
      </div>
    </div>
  );
}
