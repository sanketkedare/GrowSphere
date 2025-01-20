import React from 'react'
import ProfileHeader from '../Profile/ProfileHeader'
import ProfileInfo from '../Profile/ProfileInfo'
import CompanyProfile from '../../Profiles/CompanyProfile'

const ViewCompany = ({clientsData}) => {
  return (
    <div div className='mt-10 w-[90%] m-auto'>
      <ProfileHeader userData={clientsData}/>
      <CompanyProfile userData={clientsData} />
      <ProfileInfo userData={clientsData} />
    </div>
  )
}

export default ViewCompany
