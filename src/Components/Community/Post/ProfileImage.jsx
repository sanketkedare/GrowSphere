import React from "react";

const ProfileImage = ({ myData }) => (
  <div className="w-[50px] h-[50px] cursor-pointer menu-container" title={myData?.email || "Profile"}>
    {myData?.image || myData?.imageUrl ? (
      <img
        src={myData?.image || myData?.imageUrl}
        alt="Profile"
        className="border border-[#FFD700] rounded-full h-full object-cover hover:shadow-lg"
        loading="lazy"
      />
    ) : (
      <div className="text-2xl bg-[#1F1F1F] rounded-full w-full h-full flex justify-center items-center shadow-md hover:bg-[#FFD700] hover:text-white transition-all">
        👤
      </div>
    )}
  </div>
);

export default ProfileImage;
