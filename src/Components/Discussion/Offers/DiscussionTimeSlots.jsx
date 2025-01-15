import React from "react";


const DiscussionTimeSlots = ({meeting,selectedSlot, handleSlotSelection }) => {
  console.log("meeting?.timeSlots", meeting?.timeSlots)
  return (
    <div className="mt-2 overflow-x-auto overflow-y-auto max-h-[300px] overflow-scroll">
      <table className="table-auto border-collapse border border-gray-700 w-full text-sm">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-700 px-4 py-2">Day</th>
            <th className="border border-gray-700 px-4 py-2">
              Available Slots
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(meeting?.timeSlots).map(([day, slots]) => (
            <tr key={day} className="hover:bg-gray-700">
              <td className="border border-gray-700 px-4 py-2 text-gray-300 font-medium">
                {day}
              </td>
              <td className="border border-gray-700 px-4 py-2">
                <div className="flex flex-wrap gap-2">
                  {slots.map((slot, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1 rounded-md text-sm ${
                        selectedSlot?.day === day && selectedSlot?.slot === slot
                          ? "bg-green-500 text-black"
                          : "bg-gray-700 hover:bg-green-600"
                      }`}
                      onClick={() => handleSlotSelection(day, slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiscussionTimeSlots;
