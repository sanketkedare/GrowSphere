import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import useUserData from "../../Hooks/useUserData";
import { createNewPost } from "../../Utils/postsMethod";
import fetchData from "../../Utils/fetchData";
import { posts, search } from "../../API/apis";

export const CommunityContext = createContext(null);

const CommunityProvider = ({ children }) => {
  const [communityPosts, setCoPosts] = useState([]);
  const myData = useUserData();
  const [message, setMessage] = useState();

  const getPosts = async () => {
    const allPosts = await fetchData(posts);
    allPosts.succes
      ? setCoPosts(allPosts?.data?.data)
      : setMessage({ succes: false, message: "Faild to load community posts" });
  };

  const createPost = async (data) => {
    const body = { ...data, ownerId: myData._id };
    const res = await createNewPost(body);
    res && setMessage(res);
  };

  const catche = {};

  const getOwnerData = async (ownerId) => {
    if (catche[ownerId]) {
      return catche[ownerId];
    }
    const response = await fetchData(`${search}${ownerId}`);
    catche[ownerId] = response;
    return response;
  };

  useEffect(() => {
    let timeout;
    if (message) {
      timeout = setTimeout(() => setMessage(""), 3000);
    }
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [message]);

  useEffect(() => {
    setTimeout(() => {
      getPosts();
    }, [2000]);
  }, []);

  const value = { myData, createPost, message, communityPosts, getOwnerData };

  return (
    <CommunityContext.Provider value={value}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;
