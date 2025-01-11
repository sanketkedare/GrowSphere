import {useContext, useState } from "react";

import { generateTimeSlots } from "./InvestmentGenrateSlots";
import { InvestmentContext } from "./_investmentContext";

const InvestmentMeeting = () => {
  const { submitMeetingRequest } = useContext(InvestmentContext);
  const [timeSlots, setTimeSlots] = useState({}); // Initialize `timeSlots` as an object

  const updateTimeSlots = (obj) => {
    setTimeSlots((prev) => {
      const updatedTimeSlots = { ...prev }; // Clone the current `timeSlots` object
      if (updatedTimeSlots[obj.date]) {
        // If the date already exists, add the new time
        updatedTimeSlots[obj.date].push(obj.time);
      } else {
        // If the date doesn't exist, create a new array
        updatedTimeSlots[obj.date] = [obj.time];
      }
      return updatedTimeSlots;
    });
  };

  return (
    <div className="bg-gray-700 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">
        Select a Time Slot
      </h2>
      {generateTimeSlots(updateTimeSlots, timeSlots)}

      <button
        className="mt-6 w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500"
        onClick={() => submitMeetingRequest(timeSlots)}
      >
        Finalize Meeting Request
      </button>
    </div>
  );
};

export default InvestmentMeeting;
