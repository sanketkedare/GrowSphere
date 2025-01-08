import React from "react";
import { FiMail, FiUser, FiBriefcase, FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../Components/Profile/motionAnimations";

const EmployeeProfile = ({ userData }) => {
  if (!userData) {
    return <div>Loading...</div>;
  }


  return (
    <motion.div
      className="space-y-6 flex-1 mt-4 bg-[#1b2238] p-8 rounded-lg shadow-lg text-[#f5f3f0]"
      {...fadeIn(0.3)}
    >
      {/* Employee Information */}
      <div className="space-y-4">
        {/* Position */}
        <div className="bg-[#252e48] p-4 rounded-lg flex items-center">
          <FiBriefcase className="text-[#e2bf65] text-xl mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-[#f5f3f0]">Position:</h2>
            <p className="text-[#d1c4a9]">{userData?.position}</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-[#252e48] p-4 rounded-lg flex items-center">
          <FiMail className="text-[#e2bf65] text-xl mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-[#f5f3f0]">Email:</h2>
            <p className="text-[#d1c4a9]">{userData?.email}</p>
          </div>
        </div>

        {/* Permissions */}
        <div className="bg-[#252e48] p-4 rounded-lg flex flex-col">
          <div className="flex items-center mb-2">
            <FiSettings className="text-[#e2bf65] text-xl mr-4" />
            <h2 className="text-lg font-semibold text-[#f5f3f0]">Permissions:</h2>
          </div>
          <ul className="text-[#d1c4a9] list-disc ml-6">
            {Object.entries(userData?.permissions || {}).map(([key, value], index) => (
              <li key={index}>
                {key.replace(/([A-Z])/g, " $1")}: {value ? "Granted" : "Not Granted"}
              </li>
            ))}
          </ul>
        </div>

        {/* About Employee */}
        <div className="bg-[#252e48] p-4 rounded-lg flex items-start">
          <FiUser className="text-[#e2bf65] text-xl mr-4 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-[#f5f3f0]">About Employee:</h2>
            <p className="text-[#d1c4a9]">
              {userData?.about || "This employee has not provided any additional information."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmployeeProfile;
