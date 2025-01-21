import React, { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { searchSectionAnimation } from "./animations";
import SearchBar from "./SearchBar";
import SearchSuggestion from "./SearchSuggestion";

const SearchComponent = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionOpen, setSuggestionOpen] = useState(false);
  const lastCallRef = useRef(0); // Reference to store the last execution time

  const throttle = (func, limit) => {
    return (...args) => {
      const now = Date.now();
      if (now - lastCallRef.current > limit) {
        lastCallRef.current = now;
        func(...args);
      }
    };
  };

  const suggestionHandler = useCallback(() => {
    console.log("Fetching suggestions for:", input);
  }, [input]);

  const throttledHandler = useCallback(throttle(suggestionHandler, 1000), [
    suggestionHandler,
  ]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    throttledHandler(); // Trigger throttled function
  };

  return (
    <motion.section
      onMouseEnter={() => setSuggestionOpen(true)}
      onMouseLeave={() => setSuggestionOpen(false)}
      className="w-full flex flex-col items-center py-8"
      {...searchSectionAnimation}
    >
      <SearchBar handleInputChange={handleInputChange} input={input} />
      {suggestionOpen && <SearchSuggestion suggestions={suggestions} />}
    </motion.section>
  );
};

export default SearchComponent;
