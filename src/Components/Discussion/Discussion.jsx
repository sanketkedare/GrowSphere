import React, { useState, useEffect } from "react";
import User from "./Users/User";
import { Outlet } from "react-router-dom";
import useAuthCheck from "../../Hooks/useAuthCheck";
import NotLoggedIn from "./NotLoggedIn";

const Discussion = () => {
  const { user } = useAuthCheck();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-4 flex gap-2 bg-black h-[80vh] overflow-y-auto rounded-xl p-4 shadow-lg bg-opacity-25">
      {showComponent ? (
        !user ? (
          <NotLoggedIn />
        ) : (
          <>
            {/* Companies or Investors List */}
            <User />
            {/* Offers by newest first */}
            <Outlet />
          </>
        )
      ) : (
        <div className="flex justify-center items-center w-full text-center">
          <h1 className="text-2xl font-bold text-gray-400">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Discussion;
