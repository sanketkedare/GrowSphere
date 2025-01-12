import React, { useContext } from "react";
import { InvestmentContext } from "./_investmentContext";

const InevstmentButtons = ({ updateShow }) => {
  const { massage } = useContext(InvestmentContext);
  return (
    <div className="flex gap-4 mb-6 justify-center">
      {!massage?.success && (
        <>
          <button
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
            onClick={() => updateShow("book_meeting")}
          >
            Book Meeting
          </button>
          <button
            className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700"
            onClick={() => updateShow("start_investing")}
          >
            Invest
          </button>
        </>
      )}
      <button
        onClick={() => window.history.back()}
        className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500"
      >
        Go Back
      </button>
    </div>
  );
};

export default InevstmentButtons;
