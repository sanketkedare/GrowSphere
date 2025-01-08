import ProfileComponent from "../Components/Profile/ProfileComponent";
import { useSelector, useDispatch } from "react-redux";
import useAuthCheck from "../Hooks/useAuthCheck";
import getUserData from "../Utils/getUserData";
import { setUser } from "../Redux/userSlice";
import { deleteUser } from "firebase/auth";
import { useEffect, useState } from "react";
import { COMPANY, EMPLOYEE, INVESTER } from "../Utils/constants";

const InvestorProfile = () => {
  const userData = useSelector((state) => state.user.user); // Access user data from Redux store
  const { user } = useAuthCheck(); // Custom hook to check authenticated user
  const dispatch = useDispatch();
  const [profileType, setProfileType] = useState(null);

  // console.log("User from Firebase :" , user)

  const fetchUserData = async () => {
    try {
      // Fetch user data based on email
      const newUser = await getUserData({ email: user?.email });

      if (user && newUser) {
        dispatch(setUser(newUser.data)); // Update Redux store with fetched user data
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      dispatch(deleteUser()); // Clear user data on error
    }
  };

  const getProfileType = (type) => {
    type === INVESTER
      ? setProfileType(INVESTER)
      : type === COMPANY
      ? setProfileType(COMPANY)
      : setProfileType(EMPLOYEE);
  };

  useEffect(() => {
    if (user && !userData) {
      fetchUserData();
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (userData) {
      getProfileType(userData?.userType);
    }
  }, [userData]);



  return <ProfileComponent userData={userData} profileType={profileType} />;
};

export default InvestorProfile;
