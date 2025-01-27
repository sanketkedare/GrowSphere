import React, { useContext, useEffect, useState } from "react";
import { FaCommentAlt, FaTrash } from "react-icons/fa";
import { CommunityContext } from "../CoProvider";

const CommentsSection = ({ comments, setComments, myId }) => 
{
    const { getOwnerData } = useContext(CommunityContext);
  
  const [myName, setMyname] = useState('')
  const [commentOpen, setCommentOpen] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleCommentToggle = () => {
    setCommentOpen((prev) => !prev);
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") return; // Ignore empty comments
    const newCommentObj = {
      userId: myId,
      text: newComment.trim(),
      timestamp: new Date().toISOString(),
    };
    setComments((prev) => [...prev, newCommentObj]);
    setNewComment(""); // Clear input field after adding the comment
  };

  const handleDeleteComment = (timestamp) => {
    setComments((prev) => prev.filter((comment) => comment.timestamp !== timestamp));
  };

  const getMyName = async() =>
  {
    const {data} = await getOwnerData(myId);
    setMyname(data?.data?.name)

  }

  useEffect(()=>{
myId && getMyName()
  },[myId])


  return (
    <div>
      <div
        className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-blue-400"
        onClick={handleCommentToggle}
      >
        <div className="rounded-full bg-gray-800 p-2">
          <FaCommentAlt />
        </div>
        <span>{comments.length}</span>
      </div>

      {/* Comments Section */}
      {commentOpen && (
        <div className="bg-gray-800 w-full p-4 mt-4 rounded-xl shadow-lg">
          {/* Comment Input */}
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full p-2 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={handleAddComment}
            >
              Post
            </button>
          </div>

          {/* Comments Display */}
          {comments.length === 0 ? (
            <p className="text-center text-gray-400">No comments yet.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-4 rounded-lg shadow-md flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm text-gray-400">{myName || comment.userId}</p>
                    <p className="text-lg font-medium text-gray-200 py-2">
                      {comment.text}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(comment.timestamp).toLocaleString()}
                    </p>
                  </div>
                  {comment.userId === myId && (
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteComment(comment.timestamp)}
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
