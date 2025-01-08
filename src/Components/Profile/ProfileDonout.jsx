import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

const ProfileDonut = () => 
{
  const data = useSelector((state)=> state.user.user)
  const completion = calculateProfileCompletion(data);
  return (
    <div className="flex flex-col justify-center mx-auto absolute left-10">
      <div className="w-20 m-auto">
        <CircularProgressbar
          value={completion}
          text={`${completion}%`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: `#22c55e`, // Tailwind green-500 color
            textColor: "#22c55e", // Tailwind green-500 color
            trailColor: "#e5e7eb", // Tailwind gray-200 color
            backgroundColor: "#f3f4f6", // Tailwind gray-100 color
          })}
        />
      </div>
      <p className="text-center mt-2 text-sm font-medium text-gray-400 italic">
        Profile Completion
      </p>
    </div>
  );
};

export default ProfileDonut;


function calculateProfileCompletion(profileData) {
  let totalFields = 0;
  let fieldsSet = 0;

  // Helper function to check if a value is considered "set"
  function isFieldSet(value) {
    if (Array.isArray(value)) {
      return value.length > 0; // Arrays should have at least one item
    } else if (typeof value === 'object' && value !== null) {
      // For nested objects, check their keys
      return Object.values(value).some(isFieldSet);
    }
    return value !== "NOT SET" && value !== null && value !== ""; // Non-empty values are considered "set"
  }

  // Iterate through profile data to calculate total fields and fields set
  for (const key in profileData) {
    if (profileData.hasOwnProperty(key)) {
      totalFields++;
      if (isFieldSet(profileData[key])) {
        fieldsSet++;
      }
    }
  }

  // Calculate the percentage
  const completionPercentage = (fieldsSet / totalFields) * 100;
  return completionPercentage.toFixed(2); // Return percentage up to 2 decimal places
}