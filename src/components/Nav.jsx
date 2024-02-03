import React from "react";
import "../Global.css";

function Nav() {
  return (
    <div className="lg:flex  justify-center">
      <div className="  p-3 flex md:p-6  justify-between  lg:w-5/6">
        <div className=" primary-font p-1 md:px-4 text-lg md:text-2xl text-sky-300 ">
          blood Master{" "}
        </div>

        <button className=" primary-font   text-sky-300 inline-flex p-2 border-solid border-2 rounded   border-sky-900  hover:text-sky-200 hover:border-sky-300  text-sm md:text-lg">
          get Started
        </button>
      </div>
    </div>
  );
}

export default Nav;
