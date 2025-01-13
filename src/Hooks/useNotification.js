import { useEffect, useState } from "react";
import { investments } from "../API/apis";
import useUserData from "./useUserData";
import fetchData from "../Utils/fetchData";

const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const data = useUserData();
  const id = data?._id;

  const getNotifications = async () => {
    const response = await fetchData(`${investments}company/${id}`);
    if (response?.data?.length > 0) setNotifications(response?.data);
  };

  useEffect(() => {
    if (data && id) {
      getNotifications();
    }
  }, [data, id]);

  return notifications;
};

export default useNotification;
