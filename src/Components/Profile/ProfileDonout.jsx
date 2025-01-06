import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProfileDonut = () => {
  const completion = 50;

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
