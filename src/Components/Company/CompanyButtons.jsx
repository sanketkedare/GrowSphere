import React from 'react'
import { useNavigate } from 'react-router-dom';


const CompanyButtons = () => {
    const navigate = useNavigate();
  return (
    <div className="flex justify-center gap-6 mt-6">
          <button
            className="bg-[#d4af37] text-black font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#b8932b] transition-all duration-300"
          >
            Start Investment
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-[#2d2d2d] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#444444] transition-all duration-300"
          >
            Go Home
          </button>
        </div>
  )
}

export default CompanyButtons
