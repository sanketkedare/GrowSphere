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
        className="bg-red-200 p-2 rounded-xl text-black px-3 hover:bg-red-600 hover:text-white"
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
              className="w-full px-3 py-2 text-gray-900 rounded"
            />
            <button
              onClick={validatePassword}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Validate Password
            </button>
          </div>

          {isValidPassword === false && (
            <p className="text-red-500 font-bold">Wrong password!</p>
          )}
          {isValidPassword === true && (
            <>
              <p className="text-green-500 font-bold">Password is correct!</p>
              <div className="mb-4 my-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter new password"
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-900 rounded"
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
