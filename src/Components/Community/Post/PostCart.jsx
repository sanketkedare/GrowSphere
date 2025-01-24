import React, { useContext, useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaCommentAlt } from "react-icons/fa";
import { CommunityContext } from "../CoProvider";

const PostCart = ({ post }) => 
{
  const {getOwnerData} = useContext(CommunityContext);
  const { ownerId, heading, subject, content, imageUrl, likes, dislikes, comments, createdAt } = post;
  const [owerData, setOwnerData] = useState(null);
  const getData = async() =>
  {
     const data = await getOwnerData(ownerId);
     if(data) setOwnerData(data?.data?.data)
  }
  useEffect(() =>
  {
    getData()
  },[])

  console.log(owerData)

  return (
    <div className="border p-5 w-full my-5 rounded-2xl shadow-lg bg-[#1e1e2f] text-[#e5e7eb]">
      {/* Post Heading */}
      <h1 className="text-3xl font-bold text-[#ffffff]">{heading || "Untitled Post"}</h1>
      
      {/* Subject and Content */}
      <p className="text-lg font-medium text-[#a0aec0] mt-3">{subject || "No subject provided"}</p>
      <p className="text-sm text-[#cbd5e0] mt-2">{content || "No content available"}</p>

            {/* Image */}
            {imageUrl && (
        <img
          src={imageUrl}
          alt="Post"
          className="w-full h-[600px] object-contain rounded-lg mt-3 border border-[#2d2d3a] shadow-md"
        />
      )}

      {/* Footer with Info and Actions */}
      <div className="flex items-center justify-between mt-5">
        {/* Info */}
        <div>
          <p className="text-sm text-[#9ca3af]">
            By: <b>{owerData?.name || ownerId}</b>
          </p>
          <p className="text-sm text-[#6b7280]">{new Date(createdAt).toLocaleString()}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center text-[#38a169]">
            <FaThumbsUp className="mr-1" />
            <span>{likes?.length || 0}</span>
          </div>
          <div className="flex items-center text-[#e53e3e]">
            <FaThumbsDown className="mr-1" />
            <span>{dislikes?.length || 0}</span>
          </div>
          <div className="flex items-center text-[#2b6cb0]">
            <FaCommentAlt className="mr-1" />
            <span>{comments?.length || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCart;
