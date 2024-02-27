import React from 'react'
import { DNA } from 'react-loader-spinner'
function Loading() {
  return (
    <div className="  fixed top-[40%] left-[35%]  md:left-[45%]   ">
    <DNA
      visible={true}
      height="200"
      width="200"
      ariaLabel="dna-loading"
      wrapperStyle={{  fontsize: '2.5rem' }}
      wrapperClass="dna-wrapper"
      />
  </div>
  )
}

export default Loading