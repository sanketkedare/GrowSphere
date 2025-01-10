import React, { useContext } from "react";
import { EditContext } from "../EditContextComponent";
import Helper from "../Helper";
import EditPassWord from "../EditPassWord";

const EditInvester = () => {
  const { newData, setNewData, index, handleChange } = useContext(EditContext);

  const groups = {
    authentication: ["email"],
    profile: ["name", "imageUrl", "role", "aboutMe"],
    investment: ["investmentFocus"],
    contact: ["phone", "location"],
  };

  const contactHandelChange = (e) => {
    const { name, value } = e.target;
    setNewData({
      ...newData,
      contactDetails: {
        ...newData.contactDetails,
        [name]: value,
      },
    });
  };

  return (
    <div className="p-4">
      {index === 0 && (
        <>
          <Helper
            item={"email"}
            type={"email"}
            fun={handleChange}
            newData={newData}
            readOnly={true}
          />
          <EditPassWord />
        </>
      )}

      {index === 1 && (
        <>
          {groups.profile.map((item) => (
            <Helper key={item} item={item} fun={handleChange} newData={newData} />
          ))}
        </>
      )}

      {index === 2 && (
        <>
          <Helper item={"investmentFocus"} fun={handleChange} newData={newData} />
          <div className="mb-4">
            <label
              htmlFor="portfolioHighlights"
              className="block text-sm font-medium mb-1"
            >
              PORTFOLIO HIGHLIGHTS
            </label>
            <textarea
              id="portfolioHighlights"
              name="portfolioHighlights"
              value={newData?.portfolioHighlights?.join(", ") || ""}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "portfolioHighlights",
                    value: e.target.value.split(",").map((item) => item.trim()),
                  },
                })
              }
              placeholder="Enter portfolio highlights separated by commas"
              className="w-full px-3 py-2 text-gray-900 rounded"
            />
          </div>
        </>
      )}

      {index === 3 && (
        <>
          {groups.contact.map((item) => (
            <Helper
              key={item}
              item={item}
              fun={contactHandelChange}
              newData={newData.contactDetails || {}}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default EditInvester;
