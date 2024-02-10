import React from 'react'
import { IoMdClose } from "react-icons/io";

function Sidebar() {
  
  return (
    <div className=" relative items-center    gap-5 md:flex  hidden flex-col 2xl:w-[15%] xl:w-[17%] lg:w-[20%] md:w-[40%] w-[55%]   min-h-full primary-bg   md:rounded-lg border  border-sky-950 ">
        <div className='  text-center pt-2 w-full bg-slate-500 h-12'>
          <span className=' lg:text-xl xl:text-xl md:text-lg primary-font p-3'>Dashboard</span>
              {/* <IoMdClose className=' md:hidden text-xl absolute top-4 right-2 animate-pulse'/> */}
        </div>
        <div className="flex  flex-col gap-4 w-full  px-2 ">
          <div className=" relative primary-font glass rounded-xl border-sky-200 w-full h-9 border left-0 p-1  ">Home</div>
          <div className=" relative primary-font glass rounded-xl border-sky-200 w-full h-9 border left-0 p-1  ">rsfsfsadf</div>
          <div className=" relative primary-font glass rounded-xl border-sky-200 w-full h-9 border left-0 p-1  ">rsfsfsadf</div>
          <div className=" relative primary-font glass rounded-xl border-sky-200 w-full h-9 border left-0  p-1 ">rsfsfsadf</div>
   
        </div>
    </div>
  )
}

export default Sidebar
