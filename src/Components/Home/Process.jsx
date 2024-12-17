import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  { id: 1, text: "See Company List" },
  { id: 2, text: "Choose a Company" },
  { id: 3, text: "Go to Companies Page" },
  { id: 4, text: "Proceed for Your Investment" },
  { id: 5, text: "You Are a Shareholder Now" },
];

const InvestmentProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const processRef = useRef(null);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={processRef}
      id="process"
      className="min-h-screen flex items-center justify-center "
    >
      <div className="w-full max-w-6xl">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-[#e2bf65] mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Investment Process
        </motion.h2>

        {/* Steps */}
        <div className="flex flex-row items-center justify-center space-x-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.5 }}
            >
              {/* Step Number */}
              <div className="w-14 h-14 flex items-center justify-center bg-[#e2bf65] text-[#0a0f24] font-bold rounded-full mb-4">
                {step.id}
              </div>

              {/* Step Text */}
              <p className="text-lg text-[#f5f3f0] font-semibold text-center">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentProcess;
