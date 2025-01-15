import React, { useState } from "react";
import useNotification from "../../../Hooks/useNotification";
import { useLocation } from "react-router-dom";
import InvestmentsHeader from "./InvestmentsHeader";
import InvestmentMassages from "./InvestmentMassages";
import InvestmentButtons from "./InvestmentButtons";
import MeetingScheduler from "../MeetingScheduler";

const DiscussionCart = () => {
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const investmentArray = useNotification();
  const investment = investmentArray.find((i) => id === i?._id);

  // State to track selected time slot
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Handle slot selection
  const handleSlotSelection = (day, slot) => {
    setSelectedSlot({ day, slot });
  };

  console.log(investment);

  return (
    <div className="relative border w-full max-h-[550px] min-h-[300px] overflow-y-auto rounded-lg p-4 mb-4 shadow-lg bg-gray-900 text-white">
      {/* Investment Details */}
      <InvestmentsHeader investment={investment} />
      {investment?.progress !== "Rejected" && (
        <InvestmentMassages investment={investment} />
      )}
      {investment?.meeting && (
        <MeetingScheduler
          investment={investment}
          selectedSlot={selectedSlot}
          handleSlotSelection={handleSlotSelection}
        />
      )}
      <InvestmentButtons investment={investment} />
      <p className="text-xs text-gray-500 mt-4">
        Created At: {new Date(investment?.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default DiscussionCart;
