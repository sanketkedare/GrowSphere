import React, { lazy, Suspense, useContext } from "react";
import EditNavbar from "./EditNavbar";
import { EditContext } from "./EditContextComponent";
import EditCompany from "./EditCompany/EditCompany";
const EditInfo = lazy(() => import("./EditInfo"));

const EditProfile = () => 
{
  const { newData, index, setIndex, submitHandler, message, success } = useContext(EditContext);

  const nextHandler = () => setIndex(index + 1)


  return (
    <div className="min-h-screen flex-col flex justify-start bg-gray-900 text-white px-10 py-6">
    
      <h1 className="my-2 font-semibold text-4xl">Edit Profile</h1>
      <hr className="border border-yellow-400 w-full" />
      {newData ? (
        <div className="bg-white rounded-xl mt-4 bg-opacity-15 w-full min-h-[80vh] py-2 p-2 gap-2 grid grid-cols-3">
          <Suspense fallback={<div>Loading...</div>}>
            <EditInfo />
          </Suspense>
          <div className="relative col-span-2 rounded-xl">
            <EditNavbar />
            <p className={`${success == true ? 'bg-green-600' : success === false ? 'bg-red-600' : 'bg-inherit'} text-center w-[80%] m-auto rounded-b-full p-1`}>{message}</p>
            <div className="py-2">
              <EditCompany />
            </div>
            <div className="absolute bottom-1 w-full">
              <button onClick={submitHandler} className="w-1/2 hover:bg-sky-400 p-2 hover:text-black font-bold bg-gray-600 h-11 text-white ">
                Save
              </button>
              <button onClick={nextHandler} hidden={index === 3 ? true : false} className="w-1/2 hover:bg-sky-400 p-2 rounded-r-full hover:text-black font-bold bg-gray-600 h-11 text-white">
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
