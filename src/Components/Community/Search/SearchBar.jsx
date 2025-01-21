import React from 'react'
import { searchBarHoverAnimation } from './animations'
import { motion } from "framer-motion";
import { FaSearch } from 'react-icons/fa';


const SearchBar = ({handleInputChange, input}) => 
{
  return (
    <motion.div 
    className="w-[800px] h-[50px] flex items-center shadow-lg"
    {...searchBarHoverAnimation}
  >
    <input 
      type="text" 
      className="text-gray-700 rounded-l-lg w-[600px] h-full p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4caf50]" 
      onChange={handleInputChange}
      placeholder="Search for investors and companies" 
      value={input}
    />
    <button 
      className="p-2 w-[200px] h-full bg-[#4caf50] text-white rounded-r-lg flex items-center justify-center hover:bg-[#388e3c] transition duration-300"
    >
      <FaSearch className="mr-2" />
      Search
    </button>
  </motion.div>
  )
}

export default SearchBar
