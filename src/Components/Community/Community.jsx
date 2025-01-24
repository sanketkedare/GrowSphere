import React from "react";
import CoMyProfile from "./CoMyProfile";
import Post from "./Post/Post";

const Community = () => {
  return (
    <div className="min-h-screen">
      <CoMyProfile />
      <img
        className="fixed top-0 w-full h-full object-cover opacity-20"
        src="https://png.pngtree.com/background/20210709/original/pngtree-business-background-banner-business-website-picture-image_306168.jpg"
      />
      <Post />
    </div>
  );
};

export default Community;
