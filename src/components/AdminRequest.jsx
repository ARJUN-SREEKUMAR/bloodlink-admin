import React from 'react'

function AdminRequest() {
    const bloodRequests = [
        { id: 1, bloodType: 'A+', location: 'Mumbai', urgency: 'Urgent', userName: 'John Doe', caseId: '12345' },
        { id: 2, bloodType: 'B-', location: 'Delhi', urgency: 'High', userName: 'Jane Smith', caseId: '67890' },
        { id: 3, bloodType: 'O+', location: 'Bangalore', urgency: 'Medium', userName: 'Alice Johnson', caseId: '54321' },
        { id: 4, bloodType: 'AB+', location: 'Chennai', urgency: 'Low', userName: 'Bob Anderson', caseId: '09876' },
    ];

  return (
    <div>
       {
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
       }
    </div>
  )
}

export default AdminRequest