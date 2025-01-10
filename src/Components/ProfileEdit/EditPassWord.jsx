import React, { useContext, useState } from "react";
import { EditContext } from "./EditContextComponent";

const EditPassWord = () => {
  const { newData, handleChange } = useContext(EditContext);

  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(null);

  const togglePasswordChange = () => {
    setShow(!show);
    setPass("");
    setIsValidPassword(null);
  };

  const validatePassword = () => {
    if (pass === newData.password) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };

  return (
    <>
      <button
        onClick={togglePasswordChange}
        className="bg-red-300 text-black p-2 rounded-xl text-xs font-medium hover:bg-red-600 hover:text-white transition-all duration-300"
      >
        {show ? "Cancel Password Change" : "Want to Change Password?"}
      </button>

      {show && (
        <>
          <div className="mb-4 my-2">
            <input
              type="password"
              value={pass}
              placeholder="Enter old password"
              onChange={(e) => setPass(e.target.value)}
              className="w-full px-3 py-1 text-white bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
            <button
              onClick={validatePassword}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-blue-800 transition-all duration-300"
            >
              Validate Password
            </button>
          </div>

          {isValidPassword === false && (
            <p className="text-red-500 font-bold mt-1 text-xs">Wrong password!</p>
          )}
          {isValidPassword === true && (
            <>
              <p className="text-green-500 font-bold mt-1 text-xs">Password is correct!</p>
              <div className="mb-4 my-2">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-white mb-1"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter new password"
                  onChange={handleChange}
                  className="w-full px-3 py-1 text-white bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default EditPassWord;
