import React from 'react'
import Nav  from '../components/Nav'
import Hero from '../components/Hero'
import "../Global.css";

function Home() {
  
  return (<>
  
    <Nav/>
    <div className={`primary-bg-dark text-white w-full  `}>
       
        <Hero />
    </div>
  
  </>
  )
}

export default Home