import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileEdit = () => {
  return (
    <Link to={'/edit-profile'}>
      <button className="absolute right-10 flex items-center gap-2 p-2 rounded-xl hover:bg-[#ffff] hover:text-black font-bold px-3">
        <FaEdit /> Edit profile
      </button>
    </Link>
  );
};

export default ProfileEdit;
