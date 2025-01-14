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
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full lg:max-w-6xl w-4xl">
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
        <motion.div
          className="flex lg:flex-row flex-col gap-4 lg:items-center justify-center lg:space-x-8 px-4"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.5 },
            },
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex lg:flex-col items-center lg:justify-center gap-3 group"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Step Number */}
              <b className="lg:w-14 lg:h-14 w-12 h-12 sm:mt-5 flex items-center justify-center bg-[#e2bf65] text-[#0a0f24] font-bold rounded-full mb-4 group-hover:shadow-xl">
                {step.id}
              </b>

              {/* Step Text */}
              <p className="text-lg text-[#f5f3f0] font-semibold text-center group-hover:text-[#e2bf65]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InvestmentProcess;
