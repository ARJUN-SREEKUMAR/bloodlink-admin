import React from 'react'

function AdminRequest() {
    const bloodRequests = [
        { id: 1, bloodType: 'A+', location: 'Mumbai', urgency: 'Urgent', userName: 'John Doe', caseId: '12345' },
        { id: 2, bloodType: 'B-', location: 'Delhi', urgency: 'High', userName: 'Jane Smith', caseId: '67890' },
        { id: 3, bloodType: 'O+', location: 'Bangalore', urgency: 'Medium', userName: 'Alice Johnson', caseId: '54321' },
        { id: 4, bloodType: 'AB+', location: 'Chennai', urgency: 'Low', userName: 'Bob Anderson', caseId: '09876' },
    ];

  return (
    <div className=' relative p-3  md:m-0 2xl:left-[5%] xl:left-[6%] lg:left-[8%] md:left-[9%]   lg:w-[92%]  md:w-[90%]  flex  min-h-96   '>
      <div className=" bg-transparent ring-2 ring-cyan-950 rounded-lg mx-auto     w-full md:w-[97%]     ">
        <div className=' w-full  flex flex-row   lg:text-2xl md:text-xl text-base  p-1  gap-1 justify-evenly    bg-cyan-950 px-3   min-h-12  ring-cyan-950 ring-2 ' >

          <div className=' w-1/6  text-nowrap text-left '>Case id</div>
          <div className=' w-1/6  text-nowrap text-left'>Username</div>
          <div className=' w-1/6  text-nowrap text-left'>Blood Group</div>
          <div className=' w-1/6  text-nowrap text-left'>Location</div>
          <div className=' w-1/6  text-nowrap text-left'>Action</div>
          <div className=' hidden md:inline md:visible  w-1/6  text-nowrap text-left '>Requested Date</div>
        </div>
        <div className=' w-full  flex flex-row   lg:text-2xl md:text-xl text-base  p-1  gap-1 justify-evenly      min-h-20  items-center  ring-cyan-950 ring-2 px-3   ' >

          <div className=' w-1/6  text-nowrap text-left '>34523</div>
          <div className=' w-1/6  text-nowrap text-left'>john</div>
          <div className=' w-1/6  text-nowrap text-left'>o+</div>
          <div className=' w-1/6  text-nowrap text-left'>Africa</div>
          <div className=' w-1/6  text-nowrap text-left flex gap-1'>
            <button className='bg-red-500 text-white rounded-md p-1'>Delete</button>
            <button className='bg-green-500 text-white rounded-md p-1'>Approve</button>
          </div>
          <div className=' hidden md:inline  w-1/6  text-nowrap text-left'>8/10/22</div>
        </div>
        <div className=' w-full  flex flex-row   lg:text-2xl md:text-xl text-base  p-1  gap-1 justify-evenly      min-h-20  items-center  ring-cyan-950 ring-2 px-3   ' >

          <div className=' w-1/6  text-nowrap text-left '>34523</div>
          <div className=' w-1/6  text-nowrap text-left'>john</div>
          <div className=' w-1/6  text-nowrap text-left'>o+</div>
          <div className=' w-1/6  text-nowrap text-left'>Africa</div>
          <div className=' w-1/6  text-nowrap text-left flex gap-1'>
            <button className='bg-red-500 text-white rounded-md p-1'>Delete</button>
            <button className='bg-green-500 text-white rounded-md p-1'>Approve</button>
          </div>
          <div className=' hidden md:inline  w-1/6  text-nowrap text-left'>8/10/22</div>
        </div>
        <div className=' w-full  flex flex-row   lg:text-2xl md:text-xl text-base  p-1  gap-1 justify-evenly      min-h-20  items-center  ring-cyan-950 ring-2  px-3  ' >

          <div className=' w-1/6  text-nowrap text-left '>34523</div>
          <div className=' w-1/6  text-nowrap text-left'>john</div>
          <div className=' w-1/6  text-nowrap text-left'>o+</div>
          <div className=' w-1/6  text-nowrap text-left'>Africa</div>
          <div className=' w-1/6  text-nowrap text-left flex gap-1'>
            <button className='bg-red-500 text-white rounded-md p-1'>Delete</button>
            <button className='bg-green-500 text-white rounded-md p-1'>Approve</button>
          </div>
          <div className=' hidden md:inline  w-1/6  text-nowrap text-left'>8/10/22</div>
        </div>
        <div className=' w-full  flex flex-row   lg:text-2xl md:text-xl text-base  p-1  gap-1 justify-evenly      min-h-20  items-center  ring-cyan-950 ring-2  px-3  ' >

          <div className=' w-1/6  text-nowrap text-left '>34523</div>
          <div className=' w-1/6  text-nowrap text-left'>john</div>
          <div className=' w-1/6  text-nowrap text-left'>o+</div>
          <div className=' w-1/6  text-nowrap text-left'>Africa</div>
          <div className=' w-1/6  text-nowrap text-left flex gap-1'>
            <button className='bg-red-500 text-white rounded-md p-1'>Delete</button>
            <button className='bg-green-500 text-white rounded-md p-1'>Approve</button>
          </div>
          <div className=' hidden md:inline  w-1/6  text-nowrap text-left'>8/10/22</div>
        </div>
      
        
      </div>

       {/* {
        bloodRequests.map((data)=>(
            <div key={data.id} >
                <span>Blood Type: {data.bloodType}</span>
                <span>Location: {data.location}</span>
                <span>Urgency: {data.urgency}</span>
                <span>User Name: {data.userName}</span>
                <span>Case ID: {data.caseId}</span>
            </div>
           )
        )
       } */}
    </div>
  )
}

export default AdminRequest