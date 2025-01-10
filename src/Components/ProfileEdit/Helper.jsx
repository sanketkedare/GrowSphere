const Helper = ({ item, type = "text", fun, newData, readOnly = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={item} className="block text-xs font-medium mb-1 text-white">
        {item.toUpperCase()}
      </label>
      <input
        type={type}
        id={item}
        name={item} // Name matches the key in contactDetails
        placeholder={item}
        value={newData?.[item] || ""} // Access value dynamically
        onChange={fun}
        className="w-full px-3 py-1 text-white bg-gray-800 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        readOnly={readOnly}
      />
    </div>
  );
};

export default Helper;
