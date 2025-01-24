import React, { useContext, useEffect, useState } from "react";
import PostCreate from "./PostCreate";
import { CommunityContext } from "../CoProvider";
import PostCart from "./PostCart";

const Post = () => {
  const filters = ["All", "My"];
  const [mode, setMode] = useState(filters[0]);
  const { communityPosts, myData } = useContext(CommunityContext);
  const [posts, setPosts] = useState(communityPosts);

  useEffect(() => {
    if (communityPosts) {
      setPosts(
        mode === "All"
          ? communityPosts
          : communityPosts.filter((i) => i.ownerId === myData?._id)
      );
    }
  }, [mode, communityPosts, myData]);

  return (
    <div className="relative text-white min-h-screen">
      {/* Post Creation Section */}
      <PostCreate />

      {/* Filter Buttons */}
      <div className="flex flex-col items-center mt-10 w-3/4 m-auto">
        <div className="flex justify-center gap-6 my-4">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${
                mode === filter
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-700 text-white"
              } p-3 px-5 font-bold rounded-full shadow-md hover:bg-yellow-400 hover:text-black transition-all`}
              onClick={() => setMode(filter)}
            >
              {filter} Posts
            </button>
          ))}
        </div>

        {/* Posts Display */}
        {posts.length > 0 ? (
          <div className="flex flex-col gap-6 mt-6 w-full">
            {posts.map((post) => (
              <PostCart key={post?._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center w-full h-[200px] mt-10">
            <p className="text-gray-400 text-lg">🚀 Posts not available!</p>
            <p className="text-gray-500">Try switching filters or creating a new post.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
