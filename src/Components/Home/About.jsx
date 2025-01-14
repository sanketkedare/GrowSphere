import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-[#0a0f24] text-[#f5f3f0] flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16"
    >
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center uppercase tracking-widest text-[#e2bf65] mb-6 sm:mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>

      {/* Description */}
      <motion.div
        className="text-center max-w-2xl sm:max-w-4xl text-sm sm:text-lg text-[#d1c4a9] leading-relaxed mb-8 sm:mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p>
          At <span className="text-[#e2bf65] font-semibold">GrowSphere</span>, we serve as a trusted intermediary, providing a dynamic platform for <b>companies</b> and <b>investors</b> to connect, collaborate, and thrive. Our goal is to simplify the investment process, enabling businesses to grow while offering individuals the opportunity to invest in a sustainable future.
        </p>
        <p className="mt-4 sm:mt-6">
          Founded with a vision to empower growth and collaboration, GrowSphere is driven by innovation and trust. Whether you're a company looking to raise capital or an investor seeking new opportunities, GrowSphere is your gateway to success.
        </p>
      </motion.div>

      {/* CEO Highlight */}
      <motion.h2
        className="text-xl text-center sm:text-2xl font-semibold text-[#e2bf65] mb-6 sm:mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Led by <span className="text-[#d1c4a9]">Sanket Kedare</span>, CEO of GrowSphere
      </motion.h2>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {/* Contact Us Button */}
        <motion.button
          onClick={() => window.location.href = "#contact"}
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg font-semibold bg-[#e2bf65] text-[#0a0f24] hover:bg-[#d1c4a9] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Us
        </motion.button>

        {/* Register as a Company Button */}
        <Link to={'/register'}>
          <motion.button
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg font-semibold bg-[#1b2238] text-[#e2bf65] hover:bg-[#333c56] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Register as a Company
          </motion.button>
        </Link>

        {/* Process of Investment Button */}
        <motion.button
          onClick={() => window.location.href = "#process"}
          className="px-4 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg font-semibold bg-[#e2bf65] text-[#0a0f24] hover:bg-[#d1c4a9] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Process of Investment
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
