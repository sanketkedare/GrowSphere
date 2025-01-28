import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdPersonAdd, IoMdClose, IoMdCheckmark } from "react-icons/io";
import { CommunityContext } from "../CoProvider";
import { updateConnections } from "./connectionHandeler";

const UserCart = ({ item, index, setHoverIndex, hoverIndex }) => {
  const { myData } = useContext(CommunityContext);
  const [myConnectionObj, setMyConnectionObj] = useState(
    myData?.connections || { requests: [], accepted: [], pendings: [], blocked: [] }
  );
  const [clientConnection, setClientConnection] = useState(
    item?._connections || { requests: [], accepted: [], pendings: [], blocked: [] }
  );

  // Determine connection status
  const isConnected = myConnectionObj?.accepted?.includes(item?._id);
  const isPending = myConnectionObj?.pendings?.includes(item?._id);
  const isRequested = myConnectionObj?.requests?.includes(item?._id);
  const isBlocked = myConnectionObj?.blocked?.includes(item?._id);

  // Blocked users are hidden
  if (isBlocked) {
    return null;
  }

  // Handlers for connection actions
  const sendConnectionRequest = (clientId) => {
    setMyConnectionObj((prev) => ({
      ...prev,
      requests: [...prev.requests, clientId],
    }));
    setClientConnection((prev) => ({
      ...prev,
      pendings: [...prev.pendings, myData?._id],
    }));
  };

  const deleteConnectionRequest = (clientId) => {
    setMyConnectionObj((prev) => ({
      ...prev,
      requests: prev.requests.filter((id) => id !== clientId),
    }));
    setClientConnection((prev) => ({
      ...prev,
      pendings: prev.pendings.filter((id) => id !== myData?._id),
    }));
  };

  const acceptConnectionRequest = (clientId) => {
    setMyConnectionObj((prev) => ({
      ...prev,
      requests: prev.requests.filter((id) => id !== clientId),
      accepted: [...prev.accepted, clientId],
    }));
    setClientConnection((prev) => ({
      ...prev,
      pendings: prev.pendings.filter((id) => id !== myData?._id),
      accepted: [...prev.accepted, myData?._id],
    }));
  };

  const update = async () => {
    try {
      await Promise.all([
        updateConnections(myData?.userType, myData?._id, myConnectionObj),
        updateConnections(item?.userType, item?._id, clientConnection),
      ]);
      console.log("Connections updated successfully.");
    } catch (error) {
      console.error("Error updating connections:", error.message);
    }
  };

  useEffect(() => {
    if (myData?._id) {
      update();
    }
  }, [myData?._id, myConnectionObj, clientConnection]);

  return (
    <div
      className="relative rounded-xl py-1 w-[300px] min-w-[300px] max-h-[400px] text-white flex flex-col items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {/* Hover Actions */}
      {hoverIndex === index && myData?._id !== item?._id && (
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
          {isConnected && (
            <button className="bg-green-500 text-black p-2 rounded-md flex items-center gap-2" disabled>
              <IoMdCheckmark />
              <span>Connected</span>
            </button>
          )}
          {isPending && (
            <button
              className="bg-yellow-500 text-black p-2 rounded-md flex items-center gap-2"
              onClick={() => acceptConnectionRequest(item?._id)}
            >
              <IoMdCheckmark />
              <span>Accept</span>
            </button>
          )}
          {isRequested && (
            <button
              className="bg-red-500 text-black p-2 rounded-md flex items-center gap-2"
              onClick={() => deleteConnectionRequest(item?._id)}
            >
              <IoMdClose />
              <span>Cancel Request</span>
            </button>
          )}
          {!isConnected && !isPending && !isRequested && (
            <button
              className="bg-sky-500 text-black p-2 rounded-md flex items-center gap-2"
              onClick={() => sendConnectionRequest(item?._id)}
            >
              <IoMdPersonAdd />
              <span>Connect</span>
            </button>
          )}
        </div>
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
