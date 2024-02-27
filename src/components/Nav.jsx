import React from "react";
import Popup from "./Popup";
import { togglePopup } from "../Slice/popupSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Global.css";
import { useState,useEffect } from "react";
import { toggleLogged } from "../Slice/userSlice";

import { DNA } from 'react-loader-spinner'
function Nav(props) {
  const localUser =null;
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [avatar, setavatar] = useState('')
  useEffect(() => {
    
    if (localStorage.getItem('user')) {
      const localUser = JSON.parse(localStorage.getItem('user'))
      dispatch(toggleLogged(localUser));
       setavatar(localUser.name.slice(0,1))
    }
    
  }, [])
  // const [loadding, setloadding] = useState(false) 
  useEffect(() => {
    if (localUser) {
      navigate("/dashboard");
      
    }
  }, [localUser])
  
  

  const popupState = useSelector((state) => state.popup.value);
  const logged = useSelector((state) => state.user.isLogged);
  const loading = useSelector((state) => state.ui.load);


  function handleClick() {
    dispatch(togglePopup(true));
  }
  return (
    <div className=" w-full fixed top-0    ">
      <div className="lg:flex  primary-bg-dark justify-center z-50 h">
        <div className="p-3 flex md:p-6  justify-between  lg:w-5/6">
          <div
            className=" primary-font p-1 md:px-4 text-2xl md:text-2xl text-sky-300 xl:text-4xl  select-none   cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            blood l
            <span className="md:text-4xl   text-red-500">𖨆</span>nk
          </div>

          {!logged ? (
            <button
              onClick={handleClick}
              className="  primary-font   text-sky-300 inline-flex p-2 border-solid border-2 rounded   border-sky-900  hover:text-sky-200 hover:border-sky-300  text-sm md:text-lg hover:border-glow xl:text-xl"
            >
              get Started
            </button>
          ) : (
            <div className=" flex rounded-full w-8 h-8  font-bold bg-slate-500 text-center items-center justify-center capitalize text-sky-100">{logged?avatar:""}</div>
          )}
        </div>
      </div>
      {popupState && <Popup />}
      {loading && <div className="  fixed top-[40%] left-[35%]  md:left-[45%]   ">
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{  fontsize: '2.5rem' }}
          wrapperClass="dna-wrapper"
          />
      </div>}

    </div>
  );
}

export default Nav;
