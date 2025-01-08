import React, { useState } from "react";
import { LogOut } from "../../Utils/AuthMethods";

const RegistrationMessage = ({ user }) => {
  const [message, setMessage] = useState("");

  const userType = user.userType === "INV" ? "Investor" : "Employee";

  const logOutHandler = async () => {
    try {
      const response = await LogOut();
      setMessage(response);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      setMessage("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white px-4 py-6">
      <div className="bg-[#1f1f1f] p-8 rounded-lg shadow-2xl w-full lg:w-7/12">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#e5c100]">
          Register Your Company
        </h1>
        <div className="text-lg space-y-4 text-center">
          <p className="text-[#d4d4d4] text-center text-xl">
            Hey, you are currently logged in as <span className="font-semibold">{userType}</span>.
          </p>
          <p className="text-[#d4d4d4]">
            To register as a company, you need to logout from this account:{" "}
            <span className="text-[#e5c100] font-semibold">{user.email}</span>.
          </p>
          <p className="text-[#d4d4d4]">
            If you want to register as a company, please logout and proceed to create a new account.
          </p>
        </div>
        <button
          className="w-full mt-6 p-3 rounded-lg bg-[#e5c100] text-black font-bold text-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none shadow-md"
          aria-label="Logout and proceed to register"
          onClick={logOutHandler}
        >
          Proceed with Logout
        </button>
        {message && (
          <p className="mt-4 text-center text-[#ff4d4d] font-semibold">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default RegistrationMessage;
