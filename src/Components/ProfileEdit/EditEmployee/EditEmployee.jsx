import React, { useContext } from "react";
import { EditContext } from "../EditContextComponent";
import Helper from "../Helper";
import EditPassWord from "../EditPassWord";

const EditEmployee = () => {
  const { newData, index, handleChange } = useContext(EditContext);

  // Group related fields (password removed from authentication)
  const groups = {
    authentication: ["email"], // Only the email field remains in authentication
    profile: ["name", "imageUrl", "position"], // Profile fields
    permissions: ["removeCompany", "blockInvestor", "removeEmployee", "other"], // Permission fields
    status: ["granted"], // Status fields (e.g., if the employee has been granted access)
  };

  return (
    <div className="p-4 bg-gray-800 text-white">
      {/* Authentication Section */}
      {index === 0 && (
        <>
          {groups.authentication.map((item) => (
            <Helper
              key={item}
              item={item}
              fun={handleChange}
              newData={newData}
              type={item}
              readOnly={true}
            />
          ))}
          <Helper item={"location"} fun={handleChange} newData={newData} />
          <EditPassWord /> {/* Password editing component */}
        </>
      )}

      {/* Profile Information Section */}
      {index === 1 && (
        <>
          {groups.profile.map((item) => (
            <Helper
              key={item}
              item={item}
              fun={handleChange}
              newData={newData}
              readOnly={false} // Allow editing profile fields
            />
          ))}
        </>
      )}

      {/* Permissions Section (Read-Only, Displayed as Messages) */}
      {index === 2 && (
        <>
          {groups.permissions.map((permission) => (
            <div key={permission} className="mb-2">
              <p className="text-gray-300">
                {permission.replace(/([A-Z])/g, " $1").toUpperCase()}:{" "}
                <span
                  className={
                    newData.permissions[permission]
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {newData.permissions[permission] ? "Granted" : "Not Granted"}
                </span>
              </p>
            </div>
          ))}
        </>
      )}

      {/* Status Section (Read-Only, Displayed as a Message) */}
      {index === 3 && (
        <div className="mb-4">
          <p className="text-gray-300">
            {newData.granted
              ? "You have been granted as an employee from the CEO."
              : "You have not been granted as an employee yet."}
          </p>
        </div>
      )}
    </div>
  );
};

export default EditEmployee;
