import React from 'react'

const InvestmentsHeader = ({investment}) => {
  return (
    <>
     <h2 className="text-lg font-bold mb-2">
        Investment Number:
        <span className="text-green-400"> {investment?._id || "N/A"}</span>
      </h2>

      {/* Progress */}
      <span className="absolute top-2 right-2 text-md text-black mb-4 bg-green-500 p-3 my-2 rounded-xl">
        <strong> Progress:</strong> {investment?.progress || "Not Specified"}
      </span>
      
    </>
  )
}

export default InvestmentsHeader
