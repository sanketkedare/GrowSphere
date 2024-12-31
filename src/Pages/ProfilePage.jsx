import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiUser } from "react-icons/fi";
import { FaRegChartBar, FaIndustry } from "react-icons/fa";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "../Utils/AuthMethods";

const InvestorProfile = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const logOutHandler = async () => {
    const response = await LogOut();
    setMessage(response);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        navigate("/");
        setMessage(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="bg-gradient-to-b from-[#0a0f24] to-[#11162d] text-[#f5f3f0]  flex items-center justify-center py-4">
      {message && (
        <p className="fixed w-[500px] top-10 text-center p-4 bg-[#006633] italic text-white my-1 rounded-xl">
          {message}
        </p>
      )}
      <div className="w-[90%] h-[90%] p-8 rounded-lg shadow-lg bg-[#1b2238] flex flex-col justify-between">
        {/* Profile Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://via.placeholder.com/120"
            alt="Profile Avatar"
            className="w-28 h-28 rounded-full mx-auto border-4 border-[#e2bf65] shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4 text-[#e2bf65]">Jane Smith</h1>
          <p className="text-[#d1c4a9] italic">
            Angel Investor & Venture Capitalist
          </p>
        </motion.div>

        {/* Profile Information */}
        <motion.div
          className="space-y-6 flex-1 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Investment Focus */}
          <div className="bg-[#252e48] p-4 rounded-lg flex items-center">
            <FaIndustry className="text-[#e2bf65] text-xl mr-4" />
            <div>
              <h2 className="text-lg font-semibold text-[#f5f3f0]">
                Investment Focus:
              </h2>
              <p className="text-[#d1c4a9]">
                Technology, FinTech, and Green Energy
              </p>
            </div>
          </div>

          {/* Portfolio Highlights */}
          <div className="bg-[#252e48] p-4 rounded-lg flex items-center">
            <FaRegChartBar className="text-[#e2bf65] text-xl mr-4" />
            <div>
              <h2 className="text-lg font-semibold text-[#f5f3f0]">
                Portfolio Highlights:
              </h2>
              <ul className="text-[#d1c4a9] list-disc ml-6">
                <li>Invested in 15+ startups with $20M+ in funding rounds.</li>
                <li>Key investments: ABC Tech, XYZ Finance, GreenCo.</li>
                <li>Special focus on emerging markets and scalability.</li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-[#252e48] p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Email */}
            <div className="flex items-center">
              <FiMail className="text-[#e2bf65] text-xl mr-4" />
              <div>
                <h2 className="text-lg font-semibold text-[#f5f3f0]">Email:</h2>
                <p className="text-[#d1c4a9]">jane.smith@investorhub.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <FiPhone className="text-[#e2bf65] text-xl mr-4" />
              <div>
                <h2 className="text-lg font-semibold text-[#f5f3f0]">Phone:</h2>
                <p className="text-[#d1c4a9]">+1 234 567 890</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center">
              <FiMapPin className="text-[#e2bf65] text-xl mr-4" />
              <div>
                <h2 className="text-lg font-semibold text-[#f5f3f0]">
                  Location:
                </h2>
                <p className="text-[#d1c4a9]">New York, USA</p>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div className="bg-[#252e48] p-4 rounded-lg flex items-start">
            <FiUser className="text-[#e2bf65] text-xl mr-4 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-[#f5f3f0]">
                About Me:
              </h2>
              <p className="text-[#d1c4a9]">
                Experienced investor with a passion for identifying and
                supporting innovative startups. Strong focus on building
                sustainable businesses with scalable models and significant
                impact.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex justify-between mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Go Home Button */}
          <Link to={"/"}>
            <motion.button
              className="p-3 px-6 rounded-md text-lg font-semibold flex items-center gap-2 bg-[#e2bf65] text-[#0a0f24] hover:bg-[#d1c4a9] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AiOutlineHome className="text-xl" /> Home
            </motion.button>
          </Link>

          {/* Log Out Button */}
          <motion.button
            onClick={logOutHandler}
            className="p-3 px-6 rounded-md text-lg font-semibold flex items-center gap-2 bg-[#db4437] text-[#f5f3f0] hover:bg-[#c13529] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AiOutlineLogout className="text-xl" /> Log Out
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorProfile;
