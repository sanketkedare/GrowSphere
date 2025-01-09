import React from "react";
import { motion } from "framer-motion"; // Import motion for animation

const Shimmer = ({ len }) => {
  return (
    <>
      {Array.from({ length: len }).map((_, index) => (
        <motion.div
          key={index} // Provide a unique key
          className="rounded-lg shadow-lg bg-[#1b2238] overflow-hidden text-white h-80 w-full mb-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-full bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse"></div>
        </motion.div>
      ))}
    </>
  );
};

export default Shimmer;
