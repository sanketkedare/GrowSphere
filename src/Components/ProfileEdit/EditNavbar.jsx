import React, { useContext, useEffect, useState } from "react";
import { EditContext } from "./EditContextComponent";
import { COMPANY, INVESTER } from "../../Utils/constants";

const EditNavbar = () => {
  const { index, setIndex, userType } = useContext(EditContext);
  const [navlinks, setNavlinks] = useState([]);

  const invester = ['Authentication', 'Profile', 'Investment', 'Contact'];
  const company = ["user", "company", "business", "additional"];
  const employee = ['Authentication', 'Profile', 'Permissions', 'Timestamps'];

  // Set navlinks based on the user type
  const handler = () => {
    switch(userType) {
      case INVESTER: setNavlinks(invester); break;
      case COMPANY: setNavlinks(company); break;
      default: setNavlinks(employee);
    }
  }

  useEffect(() => {
    handler();
  }, [userType]);

  return (
    <div className="flex gap-2 justify-between bg-gray-800 p-2 text-white rounded-xl shadow-lg">
      {navlinks.map((item, i) => (
        <p
          onClick={() => setIndex(i)}
          key={item}
          className={`m-auto w-full text-center p-3 text-sm font-semibold rounded-md cursor-pointer transition-all duration-300 
            ${index === i 
              ? "bg-indigo-600 text-white" 
              : "bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white"
            }`}
        >
          {item.toUpperCase()}
        </p>
      ))}
    </div>
  );
};

export default EditNavbar;
