import React from "react";
import { GiCancel } from "react-icons/gi";

const PostForm = ({ postData, setPostData, handleInputChange, handleCreatePost, setNewPostOpen }) => (
  <div className="mt-4 w-full px-4">
    <div className="flex justify-end mb-2">
      <GiCancel
        className="text-2xl cursor-pointer hover:text-red-500 p-1 rounded-full"
        onClick={() => setNewPostOpen(false)}
      />
      Cancel
    </div>
    <div className="space-y-4 text-black">
      <input
        required
        name="subject"
        value={postData.subject}
        onChange={handleInputChange}
        placeholder="Subject"
        className="w-full p-2 rounded-lg border"
      />
      <textarea
        name="content"
        required
        value={postData.content}
        onChange={handleInputChange}
        placeholder="Write your content here..."
        className="w-full p-2 rounded-lg border h-32 resize-none"
        rows="4"
      />
      <input
        name="imageUrl"
        value={postData.imageUrl}
        onChange={handleInputChange}
        placeholder="Image URL (Optional)"
        className="w-full p-2 rounded-lg border"
      />
      <div className="flex justify-end">
        <button
          onClick={handleCreatePost}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Create Post
        </button>
      </div>
    </div>
  </div>
);

export default PostForm;
