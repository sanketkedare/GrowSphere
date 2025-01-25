import React, { useContext} from "react";
import PostCreate from "./PostCreate";
import { CommunityContext } from "../CoProvider";
import PostCart from "./PostCart";

const Post = () => {
  const { myPosts } = useContext(CommunityContext);

  return (
    <div className="relative text-white min-h-screen p-2">
      {/* Post Creation Section */}
      <PostCreate />
      {/* Filter Buttons */}
      <div className="flex flex-col items-start pr-10 m-auto">
        {/* Posts Display */}
        {myPosts.length > 0 ? (
          <div className="flex flex-col gap-6 mt-6 w-full">
            {myPosts.map((post) => (
              <PostCart key={post?._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center w-full h-[200px] mt-10">
            <p className="text-gray-400 text-lg">🚀 Posts not available!</p>
            <p className="text-gray-500">
              Try switching filters or creating a new post.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
