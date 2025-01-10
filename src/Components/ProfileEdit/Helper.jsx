import React from "react";

const Helper = ({ item, type = "text", fun, newData }) => {
  return (
    <div className="mb-4">
      <label htmlFor="image" className="block text-sm font-medium mb-1">
        {item.toUpperCase()}
      </label>
      <input
        type={type}
        id={item}
        name={item}
        placeholder={item}
        value={newData?.[`${item}`]}
        onChange={fun}
        className="w-full px-3 py-2 text-gray-900 rounded"
      />
    </div>
  );
};

export default Helper;
