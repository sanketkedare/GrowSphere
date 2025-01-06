import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";
import { fadeIn, buttonHover } from "./motionAnimations";
import { Link } from "react-router-dom";



const ProfileButtons = ({logOutHandler}) => {
  return (
    <>
      <motion.div className="flex justify-between mt-8" {...fadeIn(0.6)}>
        {/* Go Home Button */}
        <Link to={"/"}>
          <motion.button
            className="p-3 px-6 rounded-md text-lg font-semibold flex items-center gap-2 bg-[#e2bf65] text-[#0a0f24] hover:bg-[#d1c4a9] transition-all duration-300"
            {...buttonHover}
          >
            <AiOutlineHome className="text-xl" /> Home
          </motion.button>
        </Link>

        {/* Log Out Button */}
        <motion.button
          onClick={logOutHandler}
          className="p-3 px-6 rounded-md text-lg font-semibold flex items-center gap-2 bg-[#db4437] text-[#f5f3f0] hover:bg-[#c13529] transition-all duration-300"
          {...buttonHover}
        >
          <AiOutlineLogout className="text-xl" /> Log Out
        </motion.button>
      </motion.div>
    </>
  );
};

export default ProfileButtons;
