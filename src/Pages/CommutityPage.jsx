import React from "react";
import DiscussionHeader from "../Components/Discussion/DiscussionHeader";
import DiscussionGoHome from "../Components/Discussion/DiscussionGoHome";
import useAuthCheck from "../Hooks/useAuthCheck";
import NotLoggedIn from "../Components/Discussion/NotLoggedIn";
import Community from "../Components/Community/Community";
import CommunityProvider from "../Components/Community/CoProvider";
import SearchComponent from "../Components/Community/Search/SearchComponent";
import CoMyProfile from "../Components/Community/CoMyProfile";

const CommutityPage = () => {
  const { user, isLoading } = useAuthCheck();

  return (
    <CommunityProvider>
      <img
        className="fixed -z-10 top-0 w-full h-full object-cover opacity-20"
        src="https://png.pngtree.com/background/20210709/original/pngtree-business-background-banner-business-website-picture-image_306168.jpg"
      />
      <SearchComponent />

      <div className="text-white grid grid-cols-4">
        <div className="col-span-1 ">
          <DiscussionHeader />
          <CoMyProfile />
        </div>
        {isLoading ? (
          <div className="flex w-full h-[60vh] items-center justify-center">
            Loading.....
          </div>
        ) : !user ? (
          <div className="flex col-span-3  h-[60vh] items-center justify-center">
            <NotLoggedIn />
          </div>
        ) : (
          <Community />
        )}
        <DiscussionGoHome />
      </div>
    </CommunityProvider>
  );
};

export default CommutityPage;
