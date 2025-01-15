import React from "react";
import DiscussionTimeSlots from "./Offers/DiscussionTimeSlots";
import { MdOutlineCancel } from "react-icons/md";

const MeetingScheduler = ({ investment, selectedSlot, handleSlotSelection }) => {
  const progressArray = ["Pending", "Approved", "Rejected", "In Progress", "Completed"];
  const timeSlots = investment?.meeting?.timeSlots;
  const PROGRESS = investment?.progress;

  // Helper function for rendering progress-specific UI
  const renderContent = () => {
    switch (PROGRESS) {
      case progressArray[0]: // "Pending"
        return  (
          <>
            <h1 className="text-green-500 font-bold my-2">Time Slots:</h1>
            <DiscussionTimeSlots
              meeting={investment?.meeting}
              selectedSlot={selectedSlot}
              handleSlotSelection={handleSlotSelection}
            />
          </>
        );

      case progressArray[1]: // "Approved"
        return (
          <>
            <h1 className="text-green-500 font-bold my-2">Meeting Scheduled</h1>
            {timeSlots && (
              <h2 className="text-gray-300 my-2">
                <span className="text-green-400">Timing:</span> {timeSlots}
              </h2>
            )}
            <button className="bg-green-600 hover:bg-green-500 text-black p-2 rounded-xl font-semibold w-[200px]">
              Start Meeting
            </button>
          </>
        );

      case progressArray[2]: // "Rejected"
        return (
          <div className="h-[100px] flex justify-center items-center text-red-500">
            <MdOutlineCancel className="text-3xl mr-2" />
            <span className="text-gray-300">
              Your offer is rejected. No further discussions will proceed.
            </span>
          </div>
        );

      case progressArray[3]: // "In Progress"
        return (
          <div className="text-yellow-500 font-medium">
            <p>In progress...</p>
            <p className="text-gray-400">Please wait for confirmation. You will be notified once the meeting is scheduled.</p>
          </div>
        );

      case progressArray[4]: // "Completed"
        return (
          <div className="text-green-500 font-semibold text-center">
            <p>🎉 Completed! You are now an investor. 🎉</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mb-4 bg-black text-gray-300 p-4 rounded-xl shadow-lg">
      {renderContent()}
    </div>
  );
};

export default MeetingScheduler;
