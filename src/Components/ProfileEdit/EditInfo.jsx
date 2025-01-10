import React, { useContext } from "react";
import { EditContext } from "./EditContextComponent";

const EditInfo = () => {
  const { userData: newData } = useContext(EditContext);

  return (
    <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
      {/* Profile Image */}
      <img
        className="w-32 h-32 object-cover rounded-full border-4 border-yellow-600 mb-4"
        src={newData?.image || newData?.imageUrl}
        alt={`${newData.name}'s profile image`}
      />

      {/* Name */}
      <h1 className="text-3xl font-semibold text-white mb-2">{newData.name}</h1>

      {/* Role or Company */}
      <h2 className="text-lg font-medium text-indigo-400 mb-2">
        {newData?.type_of_company || newData?.role || newData?.position}
      </h2>

      {/* Email */}
      <p className="text-sm text-gray-400 italic mb-4">{newData.email}</p>

      {/* Location */}
      <p className="text-md text-gray-300 mb-4">
        {newData?.location || newData?.contactDetails?.location}
      </p>

    </div>
  );
};

export default EditInfo;
