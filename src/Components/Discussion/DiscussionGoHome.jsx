import React from "react";
import { FaHome } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom'

const DiscussionGoHome = () => {
  return (
    <Link to={'/'}>
      <div className="absolute bottom-2 z-10 left-2 flex gap-1 items-center justify-evenly bg-black rounded-full p-2">
        {/* Button */}
        <motion.div
          className="p-4 rounded-full border bg-black text-[#e2bf65] cursor-pointer text-sm shadow-lg"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          title="Go to Home"
        >
          <FaHome />
        </motion.div>
        {/* Message */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className=" bg-black px-3 text-[#e2bf65] text-sm rounded-lg shadow-lg"
          >
            Go home
          </motion.div>
        </AnimatePresence>
      </div>
    </Link>
  );
};

export default DiscussionGoHome;
