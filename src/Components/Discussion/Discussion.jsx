import React from "react";
import User from "./Users/User";
import { Link, Outlet } from "react-router-dom";
import useAuthCheck from "../../Hooks/useAuthCheck";

const Discussion = () => {
  const { user } = useAuthCheck();

  return (
    <div className="mx-4 flex gap-2 bg-black h-[80vh] overflow-y-auto rounded-xl p-4 shadow-lg bg-opacity-25">
      {!user ? (
        <div className="flex flex-col justify-center items-center w-full text-center">
          <h1 className="text-2xl font-bold mb-4">You are not logged in</h1>
          <p className="mb-6 text-gray-400">
            Please log in to access discussions and view offers.
          </p>
          <Link to="/auth">
            <button className="px-6 py-3 bg-[#e94560] text-white font-semibold rounded-lg shadow-md hover:bg-[#d13450] transition-all duration-300">
              Login / Signup
            </button>
          </Link>
        </div>
      ) : (
        <>
    
          {/* Comapies or Investers List */}
          <User />
          {/* Offers by newest first */}
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Discussion;
