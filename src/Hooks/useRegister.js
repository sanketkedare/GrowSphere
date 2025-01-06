import axios from "axios";
import { signUp } from "../API/apis";

export const useRegister = async (role, email, password, name = "User") => {
  try {
    const response = await axios.post(signUp, {
      userType: role,
      data: {
        email: email,
        password: password,
        name: name,
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
