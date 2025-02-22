import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { articals } from "../../Utils/articals";
import Header from "./Header";

const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically update the current article index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articals.length);
    }, 6000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Calculate the next article index for the "italic preview" below the main text
  const nextIndex = (currentIndex + 1) % articals.length;

  return (
    <div className="text-[#f5f3f0] min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Articles Section */}
      <div className="h-[70vh] flex flex-col lg:justify-center justify-end w-[80%] m-auto">
        {/* Current Article Animation */}
        <motion.p
          key={currentIndex}
          className="lg:text-5xl text-2xl my-10 text-center m-auto font-bold text-[#e2bf65]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {articals[currentIndex]}
        </motion.p>

        {/* Next Article Preview */}
        <motion.p
          className="italic lg:text-xl my-5 text-center w-2/3 m-auto opacity-60 text-[#d1c4a9]"
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
            className={`rounded-full lg:text-lg lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] p-1 font-semibold transition-all duration-300 ${
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
