import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CompanyButtons = ({ id }) => 
{
  const navigate = useNavigate();
  return (
    <div className="flex justify-center gap-6 mt-6">
      <Link to={`/investment/${id}`}>
        <button className="bg-[#d4af37] text-black font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#b8932b] transition-all duration-300">
          Start Investment
        </button>
      </Link>
      <button
        onClick={() => navigate("/")}
        className="bg-[#2d2d2d] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#444444] transition-all duration-300"
      >
        Go Home
      </button>
    </div>
  );
};

export default CompanyButtons;
