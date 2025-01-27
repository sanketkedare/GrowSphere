import React, { useContext, useEffect, useState } from "react";
import { CommunityContext } from "../CoProvider";
import PostActions from "./PostActions";
import { FaTrashAlt } from "react-icons/fa";

const PostCart = ({ post }) => {
  const { getOwnerData, myData, deletePost } = useContext(CommunityContext);
  const { ownerId, heading, subject, content, imageUrl, createdAt } = post;
  const [owerData, setOwnerData] = useState(null);
  const isMinePost = myData?._id === ownerId;
  const getData = async () => {
    const data = await getOwnerData(ownerId);
    if (data) setOwnerData(data?.data?.data);
  };

  const deleteMyPost = async () => {
    console.log(post?._id);
    let result = confirm("Are you sure you want to delete this post?");
    if (result) {
      result = deletePost(post?._id);
      result && alert(result?.data?.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="relative border p-5 w-full my-5 rounded-2xl shadow-lg bg-[#1e1e2f] text-[#e5e7eb]">
      {/* Post Heading */}
      <h1 className="text-3xl font-bold text-[#ffffff]">
        {heading || "Untitled Post"}
      </h1>
      {isMinePost && (
        <button
          onClick={deleteMyPost}
          className="absolute top-2 right-2 bg-gradient-to-r from-[#FF4D4D] to-[#FF1A1A] text-white p-3 rounded-xl shadow-md hover:scale-105 transition-all ease-in-out"
        >
          <FaTrashAlt className="text-lg" />
        </button>
      )}

      {/* Subject and Content */}
      <p className="text-lg font-medium text-[#a0aec0] mt-3">
        {subject || "No subject provided"}
      </p>
      <p className="text-sm text-[#cbd5e0] mt-2">
        {content || "No content available"}
      </p>

      {/* Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Post"
          className="w-full h-[600px] object-contain rounded-lg mt-3 border border-[#2d2d3a] shadow-md"
        />
      )}

      {/* Footer with Info and Actions */}
      {/* Info */}
      <div>
        <p className="text-sm text-[#9ca3af]">
          By: <b>{owerData?.name || ownerId}</b>
        </p>
        <p className="text-sm text-[#6b7280]">
          {new Date(createdAt).toLocaleString()}
        </p>
      </div>

      {/* Actions */}
      <PostActions post={post} />
    </div>
  );
};

export default PostCart;
