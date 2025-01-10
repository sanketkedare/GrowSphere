import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../../Utils/AuthMethods";
import ProfileButtons from "./ProfileButtons";
import ProfileEdit from "./ProfileEdit";
import ProfileDonout from "./ProfileDonout";
import InvesterProfile from "../../Profiles/InvesterProfile";
import { COMPANY, INVESTER } from "../../Utils/constants";
import CompanyProfile from "../../Profiles/CompanyProfile";
import EmployeeProfile from "../../Profiles/EmployeeProfile";
import { motion } from "framer-motion";
import { fadeInUp } from "./motionAnimations";
import useUserData from "../../Hooks/useUserData";

const ProfileComponent = () => {
  const userData = useUserData();
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const logOutHandler = async () => {
    const response = await LogOut();
    setMessage(response);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        navigate("/");
        setMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message, navigate]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-[#0a0f24] to-[#11162d] text-[#f5f3f0] flex items-center justify-center py-4">
      {message && (
        <p className="fixed w-[500px] z-10 top-10 text-center p-4 bg-[#006633] italic text-white my-1 rounded-xl">
          {message}
        </p>
      )}

      <div className="relative w-[90%] h-[90%] p-8 rounded-lg shadow-lg bg-[#1b2238] flex flex-col justify-between">
        <ProfileDonout />
        <ProfileEdit />

        <motion.div className="text-center" {...fadeInUp}>
          <img
            src={userData?.image || userData?.imageUrl || "https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png"}
            alt="Profile Avatar"
            className="w-28 h-28 p-2 rounded-full mx-auto border-4 border-[#e2bf65] shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4 text-[#e2bf65]">{userData?.name || userData?.email}</h1>
          <p className="text-[#d1c4a9] italic">{userData?.role || userData?.type_of_company || userData?.position}</p>
        </motion.div>

        {userData.userType === INVESTER ? (
          <InvesterProfile userData={userData} />
        ) : userData.userType === COMPANY ? (
          <CompanyProfile userData={userData} />
        ) : (
          <EmployeeProfile userData={userData} />
        )}

        <div className="h-[300px] flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-semibold text-[#e2bf65] mb-4">Profile Information</h2>
          <p className="text-lg text-[#d1c4a9] italic">
            {`This is a ${
              userData?.userType === INVESTER
                ? "Investor"
                : userData?.userType === COMPANY
                ? "Company"
                : "Employee"
            } Profile`}
          </p>
          <div className="mt-4 p-4 border border-[#e2bf65] rounded-lg bg-[#212d45] shadow-md">
            <ul className="list-none space-y-2 text-[#d1c4a9]">
              <li>
                <span className="font-bold text-[#e2bf65]">Name:</span> {userData?.name || "N/A"}
              </li>
              <li>
                <span className="font-bold text-[#e2bf65]">Role:</span> {userData?.position || userData?.role || userData?.type_of_company || "N/A"}
              </li>
              <li>
                <span className="font-bold text-[#e2bf65]">Email:</span> {userData?.email || "N/A"}
              </li>
            </ul>
          </div>
        </div>

        <ProfileButtons logOutHandler={logOutHandler} />
      </div>
    </div>
  );
};

export default ProfileComponent;
