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
import useUserData from "../../Hooks/useUserData";
import ProfileInfo from "./ProfileInfo";
import ProfileHeader from "./ProfileHeader";

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
        <ProfileHeader userData={userData} />
        {userData.userType === INVESTER ? (
          <InvesterProfile userData={userData} />
        ) : userData.userType === COMPANY ? (
          <CompanyProfile userData={userData} />
        ) : (
          <EmployeeProfile userData={userData} />
        )}
        <ProfileInfo userData={userData} />
        <ProfileButtons logOutHandler={logOutHandler} />
      </div>
    </div>
  );
};

export default ProfileComponent;
