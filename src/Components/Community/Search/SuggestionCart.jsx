import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const SuggestionCart = ({ type, list = [] }) => {
  return (
    <div className="text-black">
      <b>{type}</b>
      {list.length > 0 ? (
        list.map((item, index) => (
          <Link to={`/profile/${item?.userType}${item._id}`}>
            <div
              key={index}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer flex justify-between items-center gap-3 my-2 "
            >
              <div className="flex items-center gap-3 ">
                <img
                  alt={item.name}
                  src={item.image || item?.imageUrl}
                  className="w-10 h-10 p-1 rounded-full object-cover"
                />
                {item?.name}
              </div>
              <span className="flex items-center gap-2 w-1/3">
                <FaLocationDot />
                {item?.location || item?.contactDetails?.location}
              </span>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500">No suggestions found.</p>
      )}
    </div>
  );
};

export default SuggestionCart;
