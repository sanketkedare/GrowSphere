import {
  createContext,
  useEffect,
  useState,
} from "react";
import useUserData from "../../Hooks/useUserData";
import { createNewPost } from "../../Utils/postsMethod";
import fetchData from "../../Utils/fetchData";
import { posts, search } from "../../API/apis";
import axios from "axios";

export const CommunityContext = createContext(null);

const CommunityProvider = ({ children }) => {
  const filters = ["All", "My"];
  const [mode, setMode] = useState(filters[0]);
  const [communityPosts, setCoPosts] = useState([]);
  const myData = useUserData();
  const [message, setMessage] = useState(null);
  const [myPosts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const allPosts = await fetchData(posts);
      if (allPosts.succes) {
        setCoPosts(allPosts?.data?.data);
      } else {
        setMessage({ success: false, message: "Failed to load community posts" });
      }
    } catch (error) {
      setMessage({ success: false, message: "Error loading community posts" });
    }
  };

  const createPost = async (data) => {
    try {
      const body = { ...data, ownerId: myData._id };
      const res = await createNewPost(body);
      await getPosts()
      if (res) setMessage(res);
    } catch (error) {
      setMessage({ success: false, message: "Error creating post" });
    }
  };

  const cache = {};

  const getOwnerData = async (ownerId) => {
    if (cache[ownerId]) {
      return cache[ownerId];
    }
    try {
      const response = await fetchData(`${search}${ownerId}`);
      cache[ownerId] = response;
      return response;
    } catch (error) {
      return { success: false, message: "Error fetching owner data" };
    }
  };


  const deletePost = async(postId) =>
  {
    try
    {
      const API = `${posts}${postId}`;
      const response = await axios.delete(API);
      await getPosts()
      response && alert("Post deleted successfully")
    }
    catch(error){
      alert("Error deleting post");
    }

  }

  useEffect(() => {
    if (communityPosts) {
      setPosts(
        mode === "All"
          ? communityPosts
          : communityPosts.filter((post) => post.ownerId === myData?._id)
      );
    }
  }, [mode, communityPosts, myData]);

  useEffect(() => {
    let timeout;
    if (message) {
      timeout = setTimeout(() => setMessage(null), 3000);
    }
    return () => clearTimeout(timeout);
  }, [message]);

  useEffect(() => {
    getPosts();
  }, []);

  const value = {
    myData,
    getPosts,
    createPost,
    message,
    myPosts,
    mode,
    setMode,
    getOwnerData,
    deletePost
  };

  return (
    <CommunityContext.Provider value={value}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;
