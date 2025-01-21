import React from "react";
import DiscussionHeader from "../Components/Discussion/DiscussionHeader";
import DiscussionGoHome from "../Components/Discussion/DiscussionGoHome";
import CommunityProvider from "../Components/Community/CoProvider";
import useAuthCheck from "../Hooks/useAuthCheck";
import NotLoggedIn from "../Components/Discussion/NotLoggedIn";
import Community from "../Components/Community/Community";

const CommutityPage = () => {
  const { user, isLoading } = useAuthCheck();
  return (
    <CommunityProvider>
      <div className="text-white h-screen">
        <DiscussionHeader />
        {isLoading ? (
          <div className="flex w-full h-[60vh] items-center justify-center">
            Loading.....
          </div>
        ) : !user ? (
          <div className="flex w-full h-[60vh] items-center justify-center">
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
