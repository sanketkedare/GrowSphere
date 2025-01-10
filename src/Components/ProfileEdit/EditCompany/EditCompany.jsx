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
    <div className="p-4">
      {index === 0 ? (
        <>
          <Helper item={"name"} fun={handleChange} newData={newData} />
          <Helper
            item={"email"}
            type={"email"}
            fun={handleChange}
            newData={newData}
            readOnly={true}
          />
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
