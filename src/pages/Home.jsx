import React from 'react'
import Nav  from '../components/Nav'
import Hero from '../components/Hero'

function Home() {
    console.log('Home')
  return (
    <div className='bg-[#181c26] w-full h-full text-white'>
        <Nav/>
        <Hero/>
    </div>
  )
}

export default Home