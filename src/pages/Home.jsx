import React from 'react'
import Nav  from '../components/Nav'
import Hero from '../components/Hero'

function Home() {
  
  return (
    <div className='primary-bg w-full h-screen text-white '>
        <Nav/>
        <Hero/>
    </div>
  )
}

export default Home