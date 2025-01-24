import { search } from "../../../API/apis";
import axios from "axios";

const fetchSuggestions = async (text) => {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Check if the input text matches the email format
  const isEmail = emailRegex.test(text);

  try {
    // Set the API endpoint based on whether the text is an email or name
    const API = isEmail ? `${search}/email` : search;
    
    // Set the request body accordingly
    const body = isEmail ? { email: text } : { name: text };

    // Make a POST request to the API
    const response = await axios.post(API, body);
    
    // Return the data if the request is successful
    return { success: true, data: response.data.data };
  } catch (error) {
    // Log the error and return failure response
    console.error("Error fetching suggestions:", error);
    return { success: false, error: error.message };
  }
};

export default fetchSuggestions;
