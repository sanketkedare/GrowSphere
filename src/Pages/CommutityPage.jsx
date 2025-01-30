import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import DiscussionHeader from "../Components/Discussion/DiscussionHeader";
import DiscussionGoHome from "../Components/Discussion/DiscussionGoHome";
import useAuthCheck from "../Hooks/useAuthCheck";
import NotLoggedIn from "../Components/Discussion/NotLoggedIn";
import Community from "../Components/Community/Community";
import CommunityProvider from "../Components/Community/CoProvider";
import SearchComponent from "../Components/Community/Search/SearchComponent";
import CoMyProfile from "../Components/Community/CoMyProfile";
import { FaRegListAlt, FaUsers } from "react-icons/fa";

const CommutityPage = () => {
  const { user, isLoading } = useAuthCheck();
  const [show, setShow] = useState(false);

  return (
    <>
      <Helmet>
      <meta charSet="UTF-8" />

        <title>Growshere Community</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Community platform for discussions on business ideas and making connections."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="http://growsphere.onrender.com/community" />

      </Helmet>

      <CommunityProvider>
        <img
          className="fixed -z-10 top-0 w-full h-full object-cover opacity-20"
          src="https://png.pngtree.com/background/20210709/original/pngtree-business-background-banner-business-website-picture-image_306168.jpg"
          alt="Community Background"
        />
        <SearchComponent />

        <button
          className="fixed top-24 right-14 z-30 flex items-center font-semibold p-3 px-6 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-black rounded-xl shadow-md hover:scale-105 transition-all ease-in-out"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <>
              <FaUsers className="inline mr-2 text-xl" />
              Make Connections
            </>
          ) : (
            <>
              <FaRegListAlt className="inline mr-2 text-xl" />
              Go to Posts
            </>
          )}
        </button>

        <div className="text-white grid grid-cols-4">
          <div className="col-span-1">
            <DiscussionHeader />
            <CoMyProfile />
          </div>
          {isLoading ? (
            <div className="flex w-full h-[60vh] items-center justify-center">
              Loading...
            </div>
          ) : !user ? (
            <div className="flex col-span-3 h-[60vh] items-center justify-center">
              <NotLoggedIn />
            </div>
          ) : (
            <Community show={show} />
          )}
          <DiscussionGoHome />
        </div>
      </CommunityProvider>
    </>
  );
};

export default CommutityPage;
