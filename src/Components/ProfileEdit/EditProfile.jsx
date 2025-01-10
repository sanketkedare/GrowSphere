import React, { lazy, Suspense, useContext } from "react";
import EditNavbar from "./EditNavbar";
import { EditContext } from "./EditContextComponent";
import EditCompany from "./EditCompany/EditCompany";
import { COMPANY, INVESTER } from "../../Utils/constants";
import EditInvester from "./EditInvester/EditInvester";
import EditEmployee from "./EditEmployee/EditEmployee";
const EditInfo = lazy(() => import("./EditInfo"));

const EditProfile = () => {
  const {
    newData,
    index,
    setIndex,
    submitHandler,
    message,
    success,
    userType,
  } = useContext(EditContext);

  const nextHandler = () => setIndex(index + 1);

  return (
    <div className="min-h-screen flex-col flex justify-start bg-gray-900 text-white px-10 py-6">
      <h1 className="my-2 font-semibold text-4xl">Edit Profile</h1>
      <hr className="border border-yellow-400 w-full" />
      {newData ? (
        <div className="bg-white rounded-xl mt-4 bg-opacity-15 w-full min-h-[80vh] py-2 p-2 gap-2 grid grid-cols-1 md:grid-cols-3">
          {/* Profile Information */}
          <Suspense fallback={<div>Loading...</div>}>
            <EditInfo />
          </Suspense>
          <div className="relative col-span-2 rounded-xl">
            {/* Navbar and Message */}
            <EditNavbar userType={newData?.userType} />
            <p
              className={`${
                success === true
                  ? "bg-green-600"
                  : success === false
                  ? "bg-red-600"
                  : "bg-inherit"
              } text-center w-[80%] m-auto rounded-b-full p-1 mt-2 transition-all duration-300`}
            >
              {message}
            </p>
            <div className="py-4">
              {/* Show respective form based on userType */}
              {userType === COMPANY ? (
                <EditCompany />
              ) : userType === INVESTER ? (
                <EditInvester />
              ) : (
                <EditEmployee />
              )}
            </div>
            <div className="absolute bottom-4 w-full flex justify-between px-4">
              {/* Save Button */}
              <button
                onClick={submitHandler}
                className="w-1/2 hover:bg-sky-400 p-3 rounded-md hover:text-black font-bold bg-gray-600 h-12 text-white transition-all duration-300"
              >
                Save
              </button>
              {/* Next Button */}
              <button
                onClick={nextHandler}
                hidden={index === 3 ? true : false}
                className="w-1/2 mx-1 hover:bg-sky-400 p-3 rounded-md hover:text-black font-bold bg-gray-600 h-12 text-white transition-all duration-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default EditProfile;
