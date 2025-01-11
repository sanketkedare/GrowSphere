import React, {useState } from "react";
import InvestmentTable from "./InvestmentTable";
import InevstmentButtons from "./InevstmentButtons";
import InvestmentMeeting from "./InvestmentMeeting";
import InvestmentRequest from "./InvestmentRequest";

const Investments = () => {
  const [show, setShow] = useState(false);
  const updateShow = (show) => setShow(show);

  return (
    <div className="bg-gray-900 text-white min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          Investment Details
        </h1>

        {/* Company Details Table */}
        <InvestmentTable/>

        {/* Action Buttons */}
        <InevstmentButtons updateShow={updateShow} />

        {/* Conditional Sections */}
        {show === "book_meeting" ? (
          <InvestmentMeeting />
        ) : show === "start_investing" ? (
          <InvestmentRequest />
        ) : null}
      </div>
    </div>
  );
};

export default Investments;
