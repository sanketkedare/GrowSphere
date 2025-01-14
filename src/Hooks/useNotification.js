import { useEffect, useState } from "react";
import { investments } from "../API/apis";
import useUserData from "./useUserData";
import fetchData from "../Utils/fetchData";
import { COMPANY, INVESTER } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { setAllNotification } from "../Redux/notificationSlice";

const useNotification = () => 
{
  const data = useUserData();
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState([]);
  const id = data?._id; 
  const userType = data?.userType;

  const getNotifications = async () => {
    const API = (userType === INVESTER) ? `${investments}invester/${id}` : (userType === COMPANY) ? `${investments}company/${id}`: "";
    const response = await fetchData(API);
    if (response?.data?.length > 0) 
    {
      setNotifications(response?.data);
      dispatch(setAllNotification(response.data))
    }
  };

  useEffect(() => {
    if (data) {
      getNotifications();
    }
  }, [data]);

  return notifications;
};

export default useNotification;
