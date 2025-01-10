import React, { useContext } from "react";
import { EditContext } from "./EditContextComponent";

const EditInfo = () => {
  const { userData:  newData   } = useContext(EditContext);

  return (
    <div className="rounded-xl flex flex-col items-center justify-center p-4">
      <img
        className="w-full max-w-sm h-auto object-contain rounded-xl"
        src={newData.image}
        alt={`${newData.name}'s profile image`}
      />
      <h1 className="text-3xl p-2 font-bold">{newData.name}</h1>
      <h2 className="text-lg font-medium">{newData.type_of_company}</h2>
      <p className="italic ">{newData.email}</p>
      <p className="">{newData.location}</p>
    </div>
  );
};

export default EditInfo;
