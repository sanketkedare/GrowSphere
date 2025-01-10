import React from "react";
import EditProfile from "../Components/ProfileEdit/EditProfile";
import EditContextComponent from "../Components/ProfileEdit/EditContextComponent.jsx";
const ProfileEditPage = () => {
  return (
    <EditContextComponent>
      <EditProfile />
    </EditContextComponent>
  )
}

export default ProfileEditPage;
