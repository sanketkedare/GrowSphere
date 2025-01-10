import React, { useContext } from "react";
import { EditContext } from "./EditContextComponent";

const EditNavbar = () => {
  const { index, setIndex } = useContext(EditContext);
  const Navlinks = ["user", "company", "business", "additional"];

  return (
    <div className="flex justify-between bg-white p-1 text-black rounded-xl ">
      {Navlinks.map((item, i) => (
        <p
          onClick={() => setIndex(i)}
          key={item}
          className={`m-auto w-full text-center p-2 text-md font-bold  border ${
            index === i ? "bg-gray-600 text-white" : "bg-white"
          } hover:bg-gray-300 hover:text-black`}
        >
          {item.toUpperCase()}
        </p>
      ))}
    </div>
  );
};

export default EditNavbar;
