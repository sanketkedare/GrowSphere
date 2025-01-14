import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { DiscussionContext } from "../_DiscussionContext";
import DiscussionCart from "./DiscussionCart";

const DiscussionOffers = () => {
  return (
    <div className="col-span-1 p-2 w-5/6 rounded-xl shadow-md overflow-y-auto">
     <Outlet/>
    </div>
  );
};

export default DiscussionOffers;
