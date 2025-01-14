import React from "react";
import User from "./Users/User";
import { Outlet } from "react-router-dom";

const Discussion = () => {
  return (
    <div className="mx-4 flex gap-2 bg-black h-[80vh] overflow-y-auto rounded-xl p-4 shadow-lg bg-opacity-25">
      {/* Comapies or Investers List */}
      <User />
      {/* Offers by newest first */}
      <Outlet />
    </div>
  );
};

export default Discussion;
