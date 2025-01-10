import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileEdit = () => {
  return (
    <Link to={'/edit-profile'}>
      <button className="absolute right-10 flex items-center gap-2 p-3 px-6 rounded-xl bg-[#e2bf65] text-[#0a0f24] font-semibold hover:bg-[#f5f3f0] hover:text-[#0a0f24] hover:scale-105 transition-all duration-300 shadow-lg transform">
        <FaEdit className="text-xl" /> Edit Profile
      </button>
    </Link>
  );
};

export default ProfileEdit;
