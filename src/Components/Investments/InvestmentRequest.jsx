import React, { useContext, useState } from "react";
import { InvestmentContext } from "./_investmentContext";

const InvestmentRequest = () => {
  const { submitInvestmentRequest, massage } = useContext(InvestmentContext);
  const [checked, setChecked] = useState(false);
  const [message, setMassage] = useState('');

  const requestHandler = () =>
  {
    submitInvestmentRequest({message:message})
  }



  return (
    <div className="bg-gray-700 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">
        Investment Request
      </h2>
      
      {/* Message Input */}
      <label htmlFor="message" className="block text-lg mb-2 text-white">
        Enter Message (optional)
      </label>
      <textarea
        id="message"
        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white mb-4"
        placeholder="Enter a message to the company to show your interest"
        onChange={(e)=>setMassage(e.target.value)}
      />

      {/* Checkbox Input */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="investmentAgreement"
          className="mr-2"
          onChange={(e) => setChecked(e.target.checked)} // Update state when checkbox is toggled
        />
        <label htmlFor="investmentAgreement" className="text-white">
          I know about the company, required funds, and I am ready to invest the full amount.
        </label>
      </div>

      {/* Submit Button */}
    { !massage?.success &&  <button
        className={`w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 ${
          !checked && "opacity-50 cursor-not-allowed"
        }`}
        onClick={requestHandler}
        disabled={!checked} // Button is disabled if the checkbox is not checked
      >
        Submit Investment Request
      </button>}
    </div>
  );
};

export default InvestmentRequest;
