import React, { useContext } from "react";
import { DiscussionContext } from "../_DiscussionContext";
import UserCart from "./UserCart";

const User = () => 
{
  
  const { investments } = useContext(DiscussionContext);

  return (
    <div className="w-1/6  rounded-xl p-2">
      {investments
        ? investments.map((user) => <UserCart key={user?._id} client={user?.investmentNumber} ntfId={user?._id}/>)
        : "No User Found"}
    </div>
  );
};

export default User;
