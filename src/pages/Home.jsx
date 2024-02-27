import React from 'react'
import Nav  from '../components/Nav'
import Hero from '../components/Hero'
import "../Global.css";
import { useSelector } from "react-redux";



function Home() {
  const loading = useSelector((state) => state.ui.load);
  
  return (<>
  
    <Nav/>
    <div className={`primary-bg-dark text-white w-full ${!loading?"":""} `}>
       
       {!loading && (<Hero />)} 
      
    </div>
  
  </>
  )
}

export default Home