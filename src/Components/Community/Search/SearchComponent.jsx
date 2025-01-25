import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { searchSectionAnimation } from "./animations";
import SearchBar from "./SearchBar";
import SearchSuggestion from "./SearchSuggestion";
import fetchSuggetions from "./fetchSuggestions";

const SearchComponent = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState({});
  const [suggestionOpen, setSuggestionOpen] = useState(false);

  const suggestionHandler = useMemo(async () => {
    try {
      const response = await fetchSuggetions(input);
      if (response) {
        setSuggestions(response?.data);
      } else {
        console.error("Failed to fetch suggestions:", json.message);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    suggestionHandler();
  };

  return (
    <div className="w-[350px] max-h-[90vh] flex flex-col items-center fixed top-5 right-0 z-50">
      <motion.section
        onMouseEnter={() => setSuggestionOpen(true)}
        onMouseLeave={() => setSuggestionOpen(false)}
        {...searchSectionAnimation}
        className="z-20"
      >
        <SearchBar handleInputChange={handleInputChange} input={input} />
        {suggestionOpen && <SearchSuggestion suggestions={suggestions} />}
      </motion.section>{" "}
    </div>
  );
};

export default SearchComponent;
