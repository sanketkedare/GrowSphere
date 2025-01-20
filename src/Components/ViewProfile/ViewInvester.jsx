import React from 'react'
import ProfileHeader from '../Profile/ProfileHeader'
import InvesterProfile from '../../Profiles/InvesterProfile'
import ProfileInfo from '../Profile/ProfileInfo'

const ViewInvester = ({clientsData}) => 
{
  return (
    <div className='mt-10 w-[90%] m-auto'>
      <ProfileHeader userData={clientsData}/>
      <InvesterProfile userData={clientsData} />
      <ProfileInfo userData={clientsData} />
    </div>
  )
}

export default ViewInvester
