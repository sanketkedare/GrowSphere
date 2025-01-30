import { useState, useEffect } from "react";
import { updateConnections } from "../Components/Community/Users/connectionHandeler";
import useUserData from "./useUserData";

export const useConnection = (item) => {
  const myData = useUserData();

  const [myConnectionObj, setMyConnectionObj] = useState(
    myData?.connections || {
      requests: [],
      accepted: [],
      pendings: [],
      blocked: [],
    }
  );

  const [clientConnection, setClientConnection] = useState(
    item?._connections || {
      requests: [],
      accepted: [],
      pendings: [],
      blocked: [],
    }
  );

  // Connection Status
  const isConnected = myConnectionObj?.accepted?.includes(item?._id);
  const isPending = myConnectionObj?.pendings?.includes(item?._id);
  const isRequested = myConnectionObj?.requests?.includes(item?._id);
  const isBlocked = myConnectionObj?.blocked?.includes(item?._id);

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

  // Update connections in the database
  const update = async () => {
    try {
      await Promise.all([
        updateConnections(myData?.userType, myData?._id, myConnectionObj),
        updateConnections(item?.userType, item?._id, clientConnection),
      ]);
    } catch (error) {
      console.error("Error updating connections:", error.message);
    }
  };


  useEffect(() => {
    if (myData?._id) {
      update();
    }
  }, [myData?._id, myConnectionObj, clientConnection, item]);

  return {
    isConnected,
    isPending,
    isRequested,
    isBlocked,
    sendConnectionRequest,
    deleteConnectionRequest,
    acceptConnectionRequest,
  };
};
