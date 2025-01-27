import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const LikeDislikeButtons = ({ likes, dislikes, setLikes, setDislikes, myId }) => {
  const likedByMe = likes.includes(myId);
  const dislikedByMe = dislikes.includes(myId);

  const handleLike = () => {
    if (likedByMe) {
      setLikes((prev) => prev.filter((id) => id !== myId));
    } else {
      setLikes((prev) => [...prev, myId]);
      setDislikes((prev) => prev.filter((id) => id !== myId));
    }
  };

  const handleDislike = () => {
    if (dislikedByMe) {
      setDislikes((prev) => prev.filter((id) => id !== myId));
    } else {
      setDislikes((prev) => [...prev, myId]);
      setLikes((prev) => prev.filter((id) => id !== myId));
    }
  };

  return (
    <div className="flex items-center gap-6 py-4">
      {/* Like Button */}
      <div
        className={`flex items-center gap-2 cursor-pointer ${
          likedByMe ? "text-green-400" : "text-gray-400 hover:text-green-400"
        }`}
        onClick={handleLike}
      >
        <div
          className={`rounded-full p-2 transition-transform ${
            likedByMe ? "bg-green-800 scale-110" : "bg-gray-800"
          }`}
        >
          <FaThumbsUp />
        </div>
        <span>{likes.length}</span>
      </div>

      {/* Dislike Button */}
      <div
        className={`flex items-center gap-2 cursor-pointer ${
          dislikedByMe ? "text-red-400" : "text-gray-400 hover:text-red-400"
        }`}
        onClick={handleDislike}
      >
        <div
          className={`rounded-full p-2 transition-transform ${
            dislikedByMe ? "bg-red-800 scale-110" : "bg-gray-800"
          }`}
        >
          <FaThumbsDown />
        </div>
        <span>{dislikes.length}</span>
      </div>
    </div>
  );
};

export default LikeDislikeButtons;
