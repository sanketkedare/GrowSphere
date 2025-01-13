import React from 'react'
import { COMPANY, INVESTER } from '../../Utils/constants'

const ProfileInfo = ({userData}) => {
  return (
    <div className="h-[300px] flex flex-col justify-center items-center text-center">
    <h2 className="text-2xl font-semibold text-[#e2bf65] mb-4">Profile Information</h2>
    <p className="text-lg text-[#d1c4a9] italic">
      {`This is a ${
        userData?.userType === INVESTER
          ? "Investor"
          : userData?.userType === COMPANY
          ? "Company"
          : "Employee"
      } Profile`}
    </p>
    <div className="mt-4 p-4 border border-[#e2bf65] rounded-lg bg-[#212d45] shadow-md">
      <ul className="list-none space-y-2 text-[#d1c4a9]">
        <li>
          <span className="font-bold text-[#e2bf65]">Name:</span> {userData?.name || "N/A"}
        </li>
        <li>
          <span className="font-bold text-[#e2bf65]">Role:</span> {userData?.position || userData?.role || userData?.type_of_company || "N/A"}
        </li>
        <li>
          <span className="font-bold text-[#e2bf65]">Email:</span> {userData?.email || "N/A"}
        </li>
      </ul>
    </div>
  </div>
  )
}

export default ProfileInfo
