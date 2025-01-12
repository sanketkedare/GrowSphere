import React, { useContext } from "react";
import { InvestmentContext } from "./_investmentContext";
import { TiTick } from "react-icons/ti";

const InvestmentRequestSent = () => {
  const { requestSuccess, timeSlots } = useContext(InvestmentContext);

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-6 my-4 flex flex-col justify-between items-center shadow-lg border border-yellow-400">
      {/* Success Message */}
      <div className="flex gap-2 items-center text-2xl font-semibold text-white">
        <div className="p-2 bg-yellow-400 rounded-full shadow-md flex items-center justify-center animate-pulse">
          <TiTick className="text-gray-800 text-3xl" />
        </div>
        Request Sent Successfully
      </div>

      {/* Additional Info */}
      <p className="text-yellow-400 mt-2 text-lg font-medium">
        Your request is in progress. We will inform you when confirmation from the company side.
      </p>

      {/* Time Slots Information */}
      {requestSuccess?.type === "direct" ? (
        <div className="text-white mt-4">Direct Investment Request</div>
      ) : (
        <div className="mt-4 ">
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">
            Submitted Time Slots
          </h3>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md w-full">
            {Object.keys(timeSlots).length > 0 ? (
              <div>
                {Object.entries(timeSlots).map(([date, slots]) => (
                  <div key={date} className="mb-4">
                    <p className="text-white font-medium mb-1">
                      {date}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {slots.map((time, index) => (
                        <span
                          key={index}
                          className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-md text-sm font-medium"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white">No time slots submitted yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentRequestSent;
