import React from 'react'

const ViewProfile = () => 
{
    const id = location.pathname.split("/").pop();

  return (
    <div className='text-white'>
      {id}
    </div>
  )
}

export default ViewProfile
