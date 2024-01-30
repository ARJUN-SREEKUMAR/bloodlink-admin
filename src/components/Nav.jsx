import React from 'react'

function Nav() {
  return (
    <div>
        <div className=' *: p-3 flex md:p-6  justify-between w-full'>
            <div className='p-1 md:px-4 '>Blood Master </div>
            <button className=' hidden md:inline-flex p-1 border-solid border-2 rounded   border-sky-900  hover:text-sky-200 hover:border-sky-300  text-sm'>Get started</button>
        </div>
    </div>
  )
}

export default Nav