import React from "react";
import Popup from "./Popup";
import { togglePopup } from "../Slice/popupSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Global.css";
import { useState,useEffect } from "react";
function Nav(props) {
  const [dash, setdash] = useState(false)
  const navigate = useNavigate();
  
  useEffect(() => {
    
    setdash(true); 
    
  }, [props.dash])
  
  const dispatch = useDispatch(); //dispaching hoock reference created
  const popupState = useSelector((state) => state.popup.value);
  const logged = useSelector((state) => state.user.isLogged);

  function handleClick() {
    dispatch(togglePopup());
  }
  return (
    <div className="w-full fixed top-0  ">
      <div className="lg:flex  primary-bg-dark justify-center z-50">
        <div className="p-3 flex md:p-6  justify-between  lg:w-5/6">
          <div
            className=" primary-font p-1 md:px-4 text-2xl md:text-2xl text-sky-300 xl:text-4xl cursor-pointer  "
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
            <div className=" flex rounded-full w-8 h-8 bg-slate-500 text-center items-center justify-center">A</div>
          )}
        </div>
      </div>
      {popupState && <Popup />}
    </div>
  );
}

export default Nav;
