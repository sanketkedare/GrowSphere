import React from "react";
import { useSelector } from "react-redux";

const InvestmentMassages = ({ investment }) => {
  const { user } = useSelector((state) => state.user);
  const type = user?.userType; // Get the user type (CMP or INV)

  // Determine message sender dynamically
  const getMessageSender = (index) => {
    if (index % 2 === 0) {
      // Even index
      return type === "CMP" ? "Invester" : "You";
    } else {
      // Odd index
      return type === "CMP" ? "You" : "Company";
    }
  };

  return (
    <div className="my-4 bg-gray-950 p-4 rounded-xl shadow-lg ">
      <strong className="text-gray-300">Messages:</strong>
      {investment?.massages?.length > 0 ? (
        investment?.massages.map((message, index) => (
          <p key={index} className="text-sm text-white mt-2">
            <b>{getMessageSender(index)}:</b> {message}
          </p>
        ))
      ) : (
        <p className="text-sm text-gray-400 mt-2">No Messages Available</p>
      )}
    </div>
  );
};

export default InvestmentMassages;
