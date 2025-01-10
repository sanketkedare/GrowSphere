import React, { useContext } from "react";
import { EditContext } from "../EditContextComponent";
import EditPassWord from "../EditPassWord";
import Helper from "../Helper";

const EditCompany = () => {
  const { newData, index, handleChange } = useContext(EditContext);

  const contentMappings = [
    [],
    ["image", "ceo", "contact", "location"],
    ["turnover", "type_of_company", "shareholding", "funds_requirement"],
    ["extra_information", "started_year", "website"],
  ];

  return (
    <div>
      {index === 0 ? (
        <>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newData?.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-900 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email (Read only)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={newData?.email}
              className="w-full px-3 py-2 text-gray-900 rounded"
              readOnly
            />
          </div>
          <EditPassWord />
        </>
      ) : (
        contentMappings[index]?.map((item) => (
          <Helper key={item} item={item} fun={handleChange} newData={newData} />
        ))
      )}
    </div>
  );
};

export default EditCompany;
