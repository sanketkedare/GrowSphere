import React from "react";
import { motion } from "framer-motion";
import { suggestionBoxAnimation } from "./animations";
import SuggestionCart from "./SuggestionCart";

const SearchSuggestion = ({ suggestions }) => {

  return (
    <motion.div
      className="absolute mt-1 bg-white shadow-lg rounded-lg p-4"
      {...suggestionBoxAnimation}
    >
      {suggestions?.investers?.length > 0 && (
        <SuggestionCart
          type={"Investers"}
          list={suggestions?.investers || []}
        />
      )}
       {suggestions?.company?.length > 0 && (
        <SuggestionCart
          type={"Comapies"}
          list={suggestions?.company || []}
        />
      )}
       {suggestions?.employee?.length > 0 && (
        <SuggestionCart
          type={"Employees"}
          list={suggestions?.employee || []}
        />
      )}
    </motion.div>
  );
};

export default SearchSuggestion;
