import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InvestmentContext } from "./_investmentContext";

const InvestmentTable = () => {
  const { currentCompany } = useContext(InvestmentContext);

  return (
    <div className="text-lg mb-6">
      <table className="w-full border-collapse bg-gray-900 text-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-700 text-left text-lg font-semibold text-yellow-400">
            <th className="p-4 border-b border-gray-600">Detail</th>
            <th className="p-4 border-b border-gray-600">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-700">
            <td className="p-4 border-b border-gray-700">Company Name:</td>
            <td className="p-4 border-b border-gray-700">
              {currentCompany?.name}
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="p-4 border-b border-gray-700">Turnover:</td>
            <td className="p-4 border-b border-gray-700">
              {currentCompany?.turnover}
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="p-4 border-b border-gray-700">Funds Required:</td>
            <td className="p-4 border-b border-gray-700">
              {currentCompany?.funds_requirement}
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="p-4 border-b border-gray-700">Shareholding:</td>
            <td className="p-4 border-b border-gray-700">
              {currentCompany?.shareholding}
            </td>
          </tr>
          <tr className="hover:bg-gray-700">
            <td className="p-4 border-b border-gray-700">Company Website:</td>
            <td className="p-4 border-b border-gray-700">
              <Link
                to={currentCompany?.website}
                className="italic text-blue-500 hover:underline"
                target="_blank"
              >
                Visit Website
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
