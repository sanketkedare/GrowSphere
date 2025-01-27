import React, { useContext, useEffect, useState } from "react";
import { CommunityContext } from "../CoProvider";
import LikeDislikeButtons from "./LikeDislikeButtons";
import CommentsSection from "./CommentsSection";
import {updateThisPost} from "./postUtils"

const PostActions = ({ post }) => {
  const { myData } = useContext(CommunityContext);
  const myId = myData?._id;

  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLikes(post.likes || []);
    setDislikes(post.dislikes || []);
    setComments(post.comments || []);
  }, [post]);

  const updatePost = async () => {
    const newObj = { ...post, likes, comments, dislikes };
    await updateThisPost(newObj);
  };

  useEffect(() => {
    myId && updatePost();
  }, [likes, dislikes, comments]);

  return (
    <div className="text-white">
      <LikeDislikeButtons
        likes={likes}
        dislikes={dislikes}
        setLikes={setLikes}
        setDislikes={setDislikes}
        myId={myId}
      />
      <CommentsSection
        comments={comments}
        setComments={setComments}
        myId={myId}
      />
    </div>
  );
};

export default PostActions;
