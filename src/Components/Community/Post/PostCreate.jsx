import React, { useContext, useEffect, useState } from "react";
import { CommunityContext } from "../CoProvider";
import { GiCancel } from "react-icons/gi";
import { MdPostAdd } from "react-icons/md";

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
          className={`fixed top-0 w-[650px] p-4 ${
            message?.success
              ? "bg-green-500 text-black "
              : "bg-red-600 text-white"
          } font-bold text-lg text-center rounded-b-full`}
        >
          {message?.message}
        </div>
      )}
      <div className="p-2 m-auto flex flex-col items-center rounded-3xl py-4 shadow-sm shadow-white">
        <div
          className="flex gap-4 items-center justify-center w-full"
          onClick={() => setNewPostOpen(true)}
        >
          <div
            className="w-[50px] h-[50px] cursor-pointer menu-container"
            title={myData?.email || "Profile"}
          >
            {myData?.image ||  myData?.imageUrl ? (
              <img
                src={myData?.image ||  myData?.imageUrl}
                alt="Profile"
                className="border border-[#FFD700] rounded-full h-full object-cover hover:shadow-lg"
                loading="lazy"

              />
            ) : (
              <div className="text-2xl bg-[#1F1F1F] rounded-full w-full h-full flex justify-center items-center shadow-md hover:bg-[#FFD700] hover:text-white transition-all">
                👤
              </div>
            )}
          </div>
          <input
            className="w-[500px] text-black p-4 rounded-3xl font-semibold"
            placeholder={
              newPostOpen ? "Post Heading" : "Share your thoughts and ideas"
            }
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
          <div className="mt-4 w-full px-4">
            <div className="flex justify-end mb-2 ">
              <GiCancel
                className="text-2xl cursor-pointer hover:text-red-500  p-1 rounded-full"
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
                placeholder="Post Content"
                className="w-full p-2 rounded-lg border h-32"
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
        )}
      </div>
    </div>
  );
};

export default PostCreate;
