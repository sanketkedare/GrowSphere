import axios from "axios";
import { profile } from "../API/apis";

const getUserData = async ({ email }) => {
  console.log(email)

  // Fetch user data from the database
  if(!email)return
  try {
    const response = await axios.post(profile, { email });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      success: false,
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    };
  }
};

export default getUserData;
