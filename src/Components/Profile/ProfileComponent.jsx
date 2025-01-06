import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LogOut } from "../../Utils/AuthMethods";
import { fadeInUp } from "./motionAnimations";
import ProfileButtons from "./ProfileButtons";
import ProfileInformation from "./ProfileInformation";
import { useSelector } from "react-redux";
import ProfileEdit from "./ProfileEdit";
import ProfileDonut from "./ProfileDonout";

const ProfileComponent = () => {
  const { user } = useSelector((state) => state.user);
  const [message, setMessage] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const logOutHandler = async () => {
    const response = await LogOut();
    setMessage(response);
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await import("./userData");
      setUserData(data.userData);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        navigate("/");
        setMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" bg-gradient-to-b from-[#0a0f24] to-[#11162d] text-[#f5f3f0] flex items-center justify-center py-4">
      {message && (
        <p className="fixed w-[500px] top-10 text-center p-4 bg-[#006633] italic text-white my-1 rounded-xl">
          {message}
        </p>
      )}
      <div className="relative w-[90%] h-[90%] p-8 rounded-lg shadow-lg bg-[#1b2238] flex flex-col justify-between">
        {/* Profile Edit */}
        <ProfileDonut />
        <ProfileEdit />
        {/* Profile Header */}
        <motion.div className=" text-center" {...fadeInUp}>
          <img
            src={userData.imageUrl}
            alt="Profile Avatar"
            className="w-28 h-28 rounded-full mx-auto border-4 border-[#e2bf65] shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4 text-[#e2bf65]">
            {user?.displayName || user?.email}
          </h1>
          <p className="text-[#d1c4a9] italic">{userData.role}</p>
        </motion.div>

        {/* Profile Information */}
        <ProfileInformation userData={userData} />

        {/* Action Buttons */}
        <ProfileButtons logOutHandler={logOutHandler} />
      </div>
    </div>
  );
};

export default ProfileComponent;
