import React, { useContext, useState, useEffect } from "react";
import { CommunityContext } from "../CoProvider";
import { MdPostAdd } from "react-icons/md";
import ProfileImage from "./ProfileImage";
import PostForm from "./PostForm";

const PostCreate = () => {
  const { myData, createPost, message } = useContext(CommunityContext);
  const [newPostOpen, setNewPostOpen] = useState(false);
  const [postData, setPostData] = useState({
    heading: "",
    subject: "",
    content: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreatePost = async (e) => {
    try {
      if (
        postData.heading === "" ||
        postData.subject === "" ||
        postData.content === ""
      ) {
        return;
      }
      e.preventDefault();
      await createPost(postData);
    } catch (error) {
      console.error("Post creation failed", error);
    }
  };

  useEffect(() => {
    if (message?.success) {
      setPostData({ heading: "", subject: "", content: "", imageUrl: "" });
      setNewPostOpen(false);
    }
  }, [message]);

  return (
    <div className="sticky z-30 top-5 ml-4 mt-6 w-[650px] bg-gray-700 rounded-3xl">
      {message && (
        <div
          className={`fixed top-0 w-[650px] p-4 ${message?.success ? "bg-green-500 text-black " : "bg-red-600 text-white"} font-bold text-lg text-center rounded-b-full`}
        >
          {message?.message}
        </div>
      )}
      <div className="p-2 m-auto flex flex-col items-center rounded-3xl py-4 shadow-sm shadow-white">
        <div className="flex gap-4 items-center justify-center w-full">
          <ProfileImage myData={myData} />
          <input
            className="w-[500px] text-black p-4 rounded-3xl font-semibold"
            placeholder={newPostOpen ? "Post Heading" : "Share your thoughts and ideas"}
            value={postData.heading}
            name="heading"
            readOnly={!newPostOpen}
            onChange={handleInputChange}
            onClick={() => setNewPostOpen(true)}
            required
          />
          <button
            className="rounded-full p-1 border hover:bg-white hover:text-black text-3xl cursor-pointer"
            onClick={() => setNewPostOpen(true)}
          >
            <MdPostAdd />
          </button>
        </div>

        {newPostOpen && (
          <PostForm
            postData={postData}
            setPostData={setPostData}
            handleInputChange={handleInputChange}
            handleCreatePost={handleCreatePost}
            setNewPostOpen={setNewPostOpen}
          />
        )}
      </div>
    </div>
  );
};

export default PostCreate;
