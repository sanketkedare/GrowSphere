import { useEffect, useState } from "react";
import { investments } from "../API/apis";
import useUserData from "./useUserData";
import fetchData from "../Utils/fetchData";
import { COMPANY, INVESTER } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setAllNotification } from "../Redux/notificationSlice";
import { setChangeStage } from "../Redux/stageChange";

const useNotification = () => {
  const { stage } = useSelector((state) => state);
  const data = useUserData();
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState([]);
  const id = data?._id;
  const userType = data?.userType;

  const getNotifications = async () => {
    const API =
      userType === INVESTER
        ? `${investments}invester/${id}`
        : userType === COMPANY
        ? `${investments}company/${id}`
        : "";
    const response = await fetchData(API);
    if (response?.data?.length > 0) {
      setNotifications(response?.data);
      dispatch(setAllNotification(response.data));
    }
  };

  useEffect(() => {
    if (data) {
      getNotifications();
    }
  }, [data]);

  useEffect(() => {
    getNotifications();
    if (stage === true) {
      setTimeout(() => {
        dispatch(setChangeStage());
      }, 2000);
    }
  }, [stage]);

  useEffect(() => {
    // Only set the interval if there are no notifications
    if (!notifications || notifications.length === 0) {
      // Function to fetch notifications periodically
      const fetchNotifications = () => {
        getNotifications();
      };

      // Set interval to call the function every 5 seconds
      const intervalId = setInterval(fetchNotifications, 5000);

      // Cleanup function to clear interval
      return () => clearInterval(intervalId);
    }

    // No interval setup if notifications exist
    return () => {};
  }, [notifications, getNotifications]);

  return notifications;
};

export default useNotification;
