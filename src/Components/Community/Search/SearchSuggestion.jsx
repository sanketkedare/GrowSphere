import React from 'react'
import { motion } from "framer-motion";
import { suggestionBoxAnimation } from './animations'

const SearchSuggestion = ({suggestions}) => {
  return (
    <motion.div
    className="w-[800px] mt-4 bg-white shadow-lg rounded-lg p-4"
    {...suggestionBoxAnimation}
  >
    {suggestions && suggestions.length > 0 ? (
      suggestions.map((item, index) => (
        <div
          key={index}
          className="p-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          {item?.name}
        </div>
      ))
    ) : (
      <p className="text-gray-500">No suggestions found.</p>
    )}
  </motion.div>
  )
}

export default SearchSuggestion
