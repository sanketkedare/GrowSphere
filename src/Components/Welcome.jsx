import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbCube3dSphere } from "react-icons/tb";
import { articals } from "../Utils/articals";

const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articals.length);
    }, 6000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Calculate the next article index
  const nextIndex = (currentIndex + 1) % articals.length;

  return (
    <div className=" text-[#f5f3f0] min-h-screen">
      {/* Header Section */}
      <div className="w-[90%] m-auto pt-10 flex gap-2 items-center">
        <motion.div
          className="text-[70px] shadow-md rounded-full p-1 text-[#e2bf65]"
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <TbCube3dSphere />
        </motion.div>
        <div>
          <h1 className="text-4xl font-semibold">
            Grow<span className="text-[#e2bf65]">Sphere</span>
          </h1>
          <span className="italic text-[#d1c4a9]">
            A global sphere for growth and innovation
          </span>
        </div>
      </div>

      {/* Articles Section */}
      <div className="h-[70vh] flex flex-col justify-center w-[80%] m-auto">
        {/* Animate the current article */}
        <AnimatePresence>
          <motion.p
            key={currentIndex}
            className="text-5xl my-10 text-center m-auto font-bold text-[#e2bf65]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
           
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {articals[currentIndex]}
          </motion.p>
        </AnimatePresence>

        {/* Animate the next article */}
        <motion.p
          className="italic text-xl my-5 text-center w-2/3 m-auto opacity-60 text-[#d1c4a9]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
        >
          {articals[nextIndex]}
        </motion.p>
      </div>

      {/* Pagination Buttons */}
      <div className="text-center flex gap-5 justify-center">
        {articals.map((_, index) => (
          <motion.button
            key={index}
            aria-label={`Go to article ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full text-lg w-[50px] h-[50px] p-1 font-semibold transition-all duration-300 ${
              currentIndex === index
                ? "bg-[#e2bf65] text-[#0a0f24] shadow-md scale-110"
                : "bg-[#1b2238] text-[#d1c4a9] hover:bg-[#e2bf65] hover:text-[#0a0f24]"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
