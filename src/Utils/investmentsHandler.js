import axios from "axios";
import { investments } from "../API/apis";

const investmentsHandler = async (id, body) => {
  try {
    const response = await axios.put(`${investments}${id}`, body);
    return { success: true, massage: response.data };
  } catch (error) {
    return { success: false, massage: error };
  }
}

export default investmentsHandler;
