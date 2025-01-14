import { useEffect } from "react";
import useAuthCheck from "./useAuthCheck";
import { useDispatch, useSelector } from "react-redux";
import getUserData from "../Utils/getUserData";
import { deleteUser, setUser } from "../Redux/userSlice";

const useUserData = () => 
{
  const dispatch = useDispatch();
  const { user } = useAuthCheck(); // Get authenticated user
  const userRedux = useSelector((state) => state.user.user); // Get user data from Redux store

  // Fetch and update user data in Redux store
  const updateRedux = async () => {
    try {
      const response = await getUserData({ email: user?.email });
      if (response?.success) {
        dispatch(setUser(response.data)); // Update Redux store with user data
      } else {
        console.error("Failed to fetch user data:", response?.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => 
  {
    if(userRedux !== null)
    {
      return;
    }
    if (user && userRedux === null) {
      // Fetch user data only if user exists and Redux store is empty
      updateRedux();
    } else if (!user) {
      // Clear Redux store if user logs out
      dispatch(deleteUser());
    }
    // Dependency array ensures effect runs when `user` changes
  }, [user, userRedux, dispatch]);

  return userRedux; // Return user data from Redux store
};

export default useUserData;
