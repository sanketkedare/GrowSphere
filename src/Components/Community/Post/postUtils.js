import axios from "axios";
import { posts } from "../../../API/apis"

export const updateThisPost = async(post) =>
{
    let API = posts + post?._id;
    const body =  {...post}

    try 
    {
        const response = await axios.put(API, body);
        return response.data;
        
    } 
    catch (error) 
    {
        console.log(error)
        
    }
}


