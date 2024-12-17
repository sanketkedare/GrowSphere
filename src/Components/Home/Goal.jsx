import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const Goal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goalRef = useRef(null);

  const handleMenuItemClick = (targetId) => {
    if (targetId) {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (goalRef.current) {
      observer.observe(goalRef.current);
    }

    return () => {
      if (goalRef.current) {
        observer.unobserve(goalRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={goalRef}
      id="mission"
      className="min-h-screen text-[#f5f3f0] flex flex-col items-center justify-center"
    >
      {isVisible && (
        <>
          {/* Title Animation */}
          <motion.h1
            className="text-5xl font-bold text-center uppercase tracking-widest text-[#e2bf65] mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h1>

          {/* Description Animation */}
          <motion.div
            className="text-center w-3/4 text-lg text-[#d1c4a9] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p>
              At <span className="text-[#e2bf65] font-semibold">GrowSphere</span>, we aim to empower individuals and businesses through innovation,
              collaboration, and sustainable growth. Our mission is to create a global platform where ideas thrive and communities flourish.
            </p>
          </motion.div>

          {/* Buttons Animation */}
          <motion.div
            className="mt-12 flex gap-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.button
              onClick={() => handleMenuItemClick("about")}
              className="px-6 py-3 rounded-md text-lg font-semibold bg-[#e2bf65] text-[#0a0f24] hover:bg-[#d1c4a9] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Learn More
            </motion.button>

            <motion.button
              onClick={() => handleMenuItemClick("contact")}
              className="px-6 py-3 rounded-md text-lg font-semibold bg-[#1b2238] text-[#e2bf65] hover:bg-[#333c56] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Join Us
            </motion.button>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Goal;
