import React, { useContext, useState } from "react";
import { CommunityContext } from "./CoProvider";
import { FcBusinessman } from "react-icons/fc";
import { FaUser, FaEdit, FaSignOutAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "../../Utils/AuthMethods";
import { GiPostOffice } from "react-icons/gi";

const CoMyProfile = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { myData, mode, setMode } = useContext(CommunityContext);
  const navigate = useNavigate();

  const logOutHandler = async () => {
    setIsLoggingOut(true);
    try {
      await LogOut();
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const menuItems = [
    { label: "View Profile", icon: <FaUser />, path: "/myprofile" },
    { label: "Edit Profile", icon: <FaEdit />, path: "/edit-profile" },
    { label: "My Investments", icon: <FaMoneyCheckAlt />, path: "/discuss" },
  ];

  if (!myData) {
    return null;
  }

  return (
    <div className="w-9/10 z-50 rounded-xl text-[#FFD700] m-2 p-4 shadow-lg">
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center gap-4 mb-6">
        {myData?.image || myData?.imageUrl ? (
          <img
            src={myData?.image || myData?.imageUrl}
            alt="Profile"
            className="w-[150px] h-[150px] rounded-full border border-[#FFD700] object-cover"
            loading="lazy"
          />
        ) : (
          <FcBusinessman className="text-4xl" />
        )}
        <div>
          <p className="font-bold text-center">{myData?.name || "Guest User"}</p>
          <p className="text-sm text-center">{myData?.email || "No email provided"}</p>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <Link to={item.path} key={item.label}>
            <li className="flex items-center gap-3 my-1 p-3 bg-[#292929] hover:bg-[#FFD700] hover:text-[#1F1F1F] rounded-lg transition-all cursor-pointer">
              {item.icon}
              {item.label}
            </li>
          </Link>
        ))}

        {/* Toggle between "My" and "All" posts */}
        <li
          onClick={() => setMode(mode === "All" ? "My" : "All")}
          className="flex items-center gap-3 p-3 bg-[#292929] hover:bg-[#FFD700] hover:text-[#1F1F1F] rounded-lg transition-all cursor-pointer"
        >
          <GiPostOffice />
          {mode === "All" ? "My " : "All "}Posts
        </li>

        {/* Logout Button */}
        <li
          onClick={!isLoggingOut ? logOutHandler : null}
          className={`flex items-center gap-3 p-3 bg-[#292929] hover:bg-[#FFD700] hover:text-[#1F1F1F] rounded-lg transition-all cursor-pointer ${isLoggingOut ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <FaSignOutAlt />
          {isLoggingOut ? "Logging Out..." : "Logout"}
        </li>
      </ul>
    </div>
  );
};

export default CoMyProfile;
