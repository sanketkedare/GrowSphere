import React, { Suspense } from "react";
import Users from "./Users/Users";

// Lazy load the Post component
const Post = React.lazy(() => import("./Post/Post"));

const Community = ({ show }) => {
  return (
    <div className="h-screen overflow-y-auto col-span-3">
      <Suspense fallback={<div>Loading...</div>}>
        {show ? <Post /> : <Users />}
      </Suspense>
    </div>
  );
};

export default Community;
