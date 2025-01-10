import React from "react";
import { FiMail, FiPhone, FiMapPin, FiUser } from "react-icons/fi";
import { FaRegChartBar, FaIndustry } from "react-icons/fa";
import { fadeIn } from "./motionAnimations";
import { motion } from "framer-motion";

const ProfileInformation = ({ userData }) => {
  return (
    <motion.div className="space-y-6 flex-1 mt-4" {...fadeIn(0.3)}>
      <div className="bg-[#252e48] p-4 rounded-lg flex items-center">
        <FaIndustry className="text-[#e2bf65] text-xl mr-4" />
        <div>
          <h2 className="text-lg font-semibold text-[#f5f3f0]">Investment Focus:</h2>
          <p className="text-[#d1c4a9]">{userData.investmentFocus}</p>
        </div>
      </div>

      <div className="bg-[#252e48] p-4 rounded-lg flex items-center">
        <FaRegChartBar className="text-[#e2bf65] text-xl mr-4" />
        <div>
          <h2 className="text-lg font-semibold text-[#f5f3f0]">Portfolio Highlights:</h2>
          <ul className="text-[#d1c4a9] list-disc ml-6">
            {userData?.portfolioHighlights.length === 0
              ? "NOT SET"
              : userData?.portfolioHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#252e48] p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center">
          <FiMail className="text-[#e2bf65] text-xl mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-[#f5f3f0]">Email:</h2>
            <p className="text-[#d1c4a9]">{userData.email}</p>
          </div>
        </div>

        <div className="flex items-center">
          <FiPhone className="text-[#e2bf65] text-xl mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-[#f5f3f0]">Phone:</h2>
            <p className="text-[#d1c4a9]">{userData.contactDetails.phone}</p>
          </div>
        </div>

        <div className="flex items-center">
          <FiMapPin className="text-[#e2bf65] text-xl mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-[#f5f3f0]">Location:</h2>
            <p className="text-[#d1c4a9]">{userData.contactDetails.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileInformation;
