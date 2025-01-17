import React from 'react';

//Progress: "Pending", "Approved", "Rejected", "In Progress", "Completed"

const getProgressStyle = (status) => {
  switch(status) {
    case "Pending":
      return "bg-yellow-500";
    case "Approved":
      return "bg-green-500";
    case "Rejected":
      return "bg-red-500";
    case "In Progress":
      return "bg-blue-500";
    case "Completed":
      return "bg-gray-500";
    default:
      return "bg-gray-300";
  }
};

const InvestmentsHeader = ({ investment }) => {
  const progressStatus = investment?.progress || "Not Specified";
  const progressStyle = getProgressStyle(progressStatus);

  return (
    <>
      <h2 className="text-lg font-bold mb-2 my-3">
        Investment Number: 
        <span className="text-green-400"> {investment?._id || "N/A"}</span>
      </h2>

      {/* Progress */}
      <span 
        className={`absolute top-2 right-2 text-md text-gray-900 mb-4 p-3 my-2 rounded-xl ${progressStyle}`}
      >
        <strong>Progress:</strong> {progressStatus}
      </span>
    </>
  );
};

export default InvestmentsHeader;
