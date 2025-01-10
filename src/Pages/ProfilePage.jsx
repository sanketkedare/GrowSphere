import ProfileComponent from "../Components/Profile/ProfileComponent";
import useUserData from "../Hooks/useUserData";

const ProfilePage = () => {
  const userData = useUserData();
  return (
    <ProfileComponent userData={userData} profileType={userData?.userType} />
  );
};

export default ProfilePage;
