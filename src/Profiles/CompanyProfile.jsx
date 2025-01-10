import React from "react";
import { FaIndustry, FaMoneyCheckAlt, FaMapMarkerAlt, FaUsers, FaLink } from "react-icons/fa";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../Components/Profile/motionAnimations";

const CompanyProfile = ({ userData }) => {
  return (
    <motion.div className="space-y-6 flex-1 mt-4" {...fadeIn(0.3)}>
      {/* Turnover */}
      <div className="bg-[#252e48] p-4 rounded-lg flex items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <FaMoneyCheckAlt className="text-[#e2bf65] text-xl mr-4" />
        <div>
          <h2 className="text-lg font-semibold text-[#f5f3f0]">Turnover:</h2>
          <p className="text-[#d1c4a9]">{userData.turnover || "NOT SET"}</p>
        </div>
      </div>

      {/* Shareholding */}
      <div className="bg-[#252e48] p-4 rounded-lg flex items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <FaUsers className="text-[#e2bf65] text-xl mr-4" />
        <div>
          <h2 className="text-lg font-semibold text-[#f5f3f0]">Shareholding:</h2>
          <p className="text-[#d1c4a9]">{userData.shareholding || "NOT SET"}</p>
        </div>
      </div>

      {/* Funds Requirement */}
      <div className="bg-[#252e48] p-4 rounded-lg flex items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <FaIndustry className="text-[#e2bf65] text-xl mr-4" />
        <div>
          <h2 className="text-lg font-semibold text-[#f5f3f0]">Funds Requirement:</h2>
          <p className="text-[#d1c4a9]">{userData.funds_requirement || "NOT SET"}</p>
        </div>
      </div>

      {/* Started Year */}
      <div className="bg-[#252e48] p-4 rounded-lg flex items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <FiUser className="text-[#e2bf65] text-xl mr-4" />
        <div>
          <h2 className="text-lg font-semibold text-[#f5f3f0]">Started Year:</h2>
          <p className="text-[#d1c4a9]">{userData.started_year || "NOT SET"}</p>
        </div>
      </div>

      {/* Location */}
      <div className="bg-[#252e48] p-4 rounded-lg flex items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <FaMapMarkerAlt className="text-[#e2bf65] text-xl mr-4" />
        <div>
          <h2 className="text-lg font-semibold text-[#f5f3f0]">Location:</h2>
          <p className="text-[#d1c4a9]">{userData.location || "NOT SET"}</p>
        </div>
      </div>

      {/* CEO */}
      <div className="bg-[#252e48] p-4 rounded-lg flex items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <FiUser className="text-[#e2bf65] text-xl mr-4" />
        <div>
          <h2 className="text-lg font-semibold text-[#f5f3f0]">CEO:</h2>
          <p className="text-[#d1c4a9]">{userData.ceo || "NOT SET"}</p>
        </div>
      </div>

      {/* Website */}
      <div className="bg-[#252e48] p-4 rounded-lg flex items-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <FaLink className="text-[#e2bf65] text-xl mr-4" />
        <div>
          <h2 className="text-lg font-semibold text-[#f5f3f0]">Website:</h2>
          <p className="text-[#d1c4a9]">
            {userData.website === "NOT SET" ? "NOT SET" : <a href={userData.website} target="_blank" rel="noopener noreferrer" className="text-[#e2bf65] hover:underline">{userData.website}</a>}
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-[#252e48] p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center">
          <FiMail className="text-[#e2bf65] text-xl mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-[#f5f3f0]">Email:</h2>
            <p className="text-[#d1c4a9]">{userData.email || "NOT SET"}</p>
          </div>
        </div>

        <div className="flex items-center">
          <FiPhone className="text-[#e2bf65] text-xl mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-[#f5f3f0]">Phone:</h2>
            <p className="text-[#d1c4a9]">{userData.contact || "NOT SET"}</p>
          </div>
        </div>
      </div>

      {/* Extra Information */}
      <div className="bg-[#252e48] p-4 rounded-lg flex items-start shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <FiUser className="text-[#e2bf65] text-xl mr-4 mt-1" />
        <div>
          <h2 className="text-lg font-semibold text-[#f5f3f0]">Extra Information:</h2>
          <p className="text-[#d1c4a9]">{userData.extra_information || "NOT SET"}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyProfile;
