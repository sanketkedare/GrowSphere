import React, { useContext, useState } from "react";
import InvestmentTable from "./InvestmentTable";
import InevstmentButtons from "./InevstmentButtons";
import InvestmentMeeting from "./InvestmentMeeting";
import InvestmentRequest from "./InvestmentRequest";
import { InvestmentContext } from "./_investmentContext";
import InvestmentRequstSent from "./InvestmentRequstSent";
import { Link } from "react-router-dom";

const Investments = () => {
  const { massage, requestSuccess, alreadyInvested } =
    useContext(InvestmentContext);
  const [show, setShow] = useState(false);
  const updateShow = (show) => setShow(show);

  return (
    <div className="relative bg-gray-900 text-white min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400">
          Investment Details
        </h1>

        {massage?.data?.message && (
          <p
            className={`fixed p-2 w-[55%] text-center rounded-b-full top-0 text-xl font-semibold m-auto ${
              massage?.success ? "bg-green-500 text-black" : "bg-red-500"
            }`}
          >
            {massage?.data?.message}
          </p>
        )}

        {/* Company Details Table */}
        <InvestmentTable />
        {!alreadyInvested ? (
          <>
            {requestSuccess?.sent !== true ? (
              <>
                {/* Action Buttons */}
                <InevstmentButtons updateShow={updateShow} />

                {/* Conditional Sections */}
                {show === "book_meeting" ? (
                  <InvestmentMeeting />
                ) : show === "start_investing" ? (
                  <InvestmentRequest />
                ) : null}
              </>
            ) : (
              <InvestmentRequstSent />
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-evenly h-[200px] text-3xl bg-black rounded-3xl shadow-sm shadow-green-500/50 border border-green-600">
            <span className="text-green-400 font-semibold">
              Investment is already Existed
            </span>
            <Link to={`/discuss/${alreadyInvested}`}>
              <button className="bg-green-600 hover:bg-green-500 transition-colors p-3 m-1 w-[300px] text-black font-bold text-xl rounded-xl ">
                See Investment
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Investments;
