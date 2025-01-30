import axios from "axios";
import { community } from "../../../API/apis"

export const updateConnections = async(userType, userid, obj ) =>
{
    try 
    {
        const API = community + userid
        const body = {userType : userType, body: obj}
        const res = await axios.put(API, body )
        return res.data
        
    } 
    catch (error) 
    {
        
    }

}