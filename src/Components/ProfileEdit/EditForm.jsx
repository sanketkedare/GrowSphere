import React from "react";

const EditForm = ({submitHandler, newData, handleChange, message, success}) => {
  return (
    <form
      className="w-full  bg-gray-800 p-6 rounded"
      style={{ width: "80%" }}
      onSubmit={submitHandler}
    >
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

      <div className="grid grid-cols-2 gap-4">


        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={newData?.email || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-900 rounded"
          />
        </div>







      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
      >
        Save Changes
      </button>

      {message && (
        <p className={`mt-4 ${success ? "text-green-500" : "text-red-500"}`}>
          {message}
        </p>
      )}
    </form>
  );
};

export default EditForm;
