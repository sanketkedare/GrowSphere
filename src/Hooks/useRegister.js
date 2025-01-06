import axios from "axios";
import { register } from "../API/apis";

export const useRegister = async (role, email) => {
  try {
    const response = await axios.post(register, {
      userType: role,
      data: {
        email: email,
      },
    });
    // Return the response data
    return response.data;
  } catch (error) {
    // Log and throw the error
    console.error("Error during registration:", error);
    throw error;
  }
};
