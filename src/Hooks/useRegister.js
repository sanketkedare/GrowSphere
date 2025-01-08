import axios from "axios";
import { register } from "../API/apis";

export const useRegister = async (role, obj) => {
  try {
    const response = await axios.post(register, {
      userType: role,
      data: obj,
    });
    return { success: true, response: response.data };
  } catch (error) {
    if (error.response && error.response.status === 409) {
      console.log("Conflict Error:", error.response.data.message);
    }
    return { success: false, error: error.response ? error.response.data : error.message };
  }
};
