import React from 'react'
import { pageVariants } from './animations'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";


const NotFound = () => {
    const navigate = useNavigate();
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={pageVariants}
    className="h-screen flex flex-col items-center justify-center bg-black text-center"
  >
    <h1 className="text-4xl font-bold text-gold-500 mb-6">
      Company Not Found
    </h1>
    <button
      onClick={() => navigate("/")}
      className="bg-gold-500 text-black font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gold-600 transition-all duration-300"
    >
      Go Back Home
    </button>
  </motion.div>
  )
}

export default NotFound
