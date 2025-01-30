import React from "react";
import { Link } from "react-router-dom";
import { useConnection } from "../../../Hooks/useConnection";
import ConnectionActions from "./ConnectionActions";

const UserCart = ({ item, index, setHoverIndex, hoverIndex }) => {
  const {
    isConnected,
    isPending,
    isRequested,
    isBlocked,
    sendConnectionRequest,
    deleteConnectionRequest,
    acceptConnectionRequest,
  } = useConnection(item);

  // Blocked users are hidden
  if (isBlocked) {
    return null;
  }

  return (
    <div
      className="relative rounded-xl py-1 w-[300px] min-w-[300px] max-h-[400px] text-white flex flex-col items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {/* Hover Actions */}
      {hoverIndex === index && (
        <ConnectionActions
          isConnected={isConnected}
          isPending={isPending}
          isRequested={isRequested}
          sendConnectionRequest={sendConnectionRequest}
          deleteConnectionRequest={deleteConnectionRequest}
          acceptConnectionRequest={acceptConnectionRequest}
          item={item}
        />
      )}

      {/* Link to Profile */}
      <Link
        to={`/profile/${item?.userType}${item?._id}`}
        className="absolute inset-0 bg-black bg-opacity-60 rounded-xl opacity-0 h-[300px] w-[300px] top-1 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
      >
        <span className="text-white text-lg font-semibold">Visit Profile</span>
      </Link>

      {/* User's Image */}
      <img
        src={item?.image || item?.imageUrl}
        alt={item?.name || "Unnamed"}
        className="h-[300px] w-[300px] object-cover rounded-xl"
        loading="lazy"
      />

      {/* User's Details */}
      <div className="text-center mt-2">
        <p className="font-bold text-lg">{item?.name || "Unnamed"}</p>
        <b className="block">{item?.position || null}</b>
        <i className="text-gray-400 text-sm">
          {item?.location || item?.contactDetails?.location || "Location Unknown"}
        </i>
      </div>
    </div>
  );
};

export default UserCart;
