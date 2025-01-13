import React, {useContext} from "react";
import DiscussionLogs from "./DiscussionLogs";
import DiscussionOffers from "./DiscussionOffers";
import {DiscussionContext} from "./_DiscussionContext";

const Discussion = () => 
{
  // const {user} = useUserData();
  const data = useContext(DiscussionContext)
  console.log(data)
  return (
    <div className="mx-4 bg-black min-h-[80vh] rounded-xl p-4 shadow-lg bg-opacity-25">
      {/* Offers by newest first */}
      <DiscussionOffers />
      {/* Chatting Options with dynamic partner*/}
      <DiscussionLogs />
    </div>
  );
};

export default Discussion;
