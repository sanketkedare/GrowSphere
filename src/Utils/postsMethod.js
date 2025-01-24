import axios from "axios";
import { posts } from "../API/apis";

export const createNewPost = async (body) => {
  const api = posts;
  try {
    const response = await axios.post(api, body);
    return { success: true, message: response.data.message };
  } catch (error) {
    return { success: false, message: error.response.data.error };
  }
};

const getAllPosts = async () => {};

const getMyPosts = async (ownerId) => {};

const deletePost = async (postId) => {};

const updatePost = async (postId) => {};
