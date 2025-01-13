import React from 'react'
import { fadeInUp } from './motionAnimations'
import {motion} from 'framer-motion'

const ProfileHeader = ({userData}) => {
  return (
    <motion.div className="text-center" {...fadeInUp}>
    <img
      src={
        userData?.image ||
        userData?.imageUrl ||
        "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png"
      }
      alt="Profile Avatar"
      className="w-28 h-28 p-2 rounded-full mx-auto border-4 border-[#e2bf65] shadow-lg"
    />
    <h1 className="text-3xl font-bold mt-4 text-[#e2bf65]">
      {userData?.name || userData?.email}
    </h1>
    <p className="text-[#d1c4a9] italic">
      {userData?.role || userData?.type_of_company || userData?.position}
    </p>
  </motion.div>
  )
}

export default ProfileHeader
