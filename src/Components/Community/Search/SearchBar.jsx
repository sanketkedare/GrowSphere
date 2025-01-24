import React from 'react';
import { searchBarHoverAnimation } from './animations';
import { motion } from "framer-motion";
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ handleInputChange, input }) => {
  return (
    <motion.div
      className=" h-[50px] flex items-center shadow-lg"
      {...searchBarHoverAnimation}
    >
      <div className="relative w-full h-full">
        {/* Input field with padding to accommodate the search icon */}
        <input
          type="text"
          className="text-gray-700 rounded-lg h-full p-4 pl-12 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
          onChange={handleInputChange}
          placeholder="Search for investors and companies"
          value={input}
        />
        {/* Search icon positioned inside the input field */}
        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
      </div>
    </motion.div>
  );
};

export default SearchBar;
