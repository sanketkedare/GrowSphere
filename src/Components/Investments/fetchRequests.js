import axios  from "axios";
import { investments } from "../../API/apis";

const INVESTMENT_API = investments;

export const createInvestment = async(data) =>
{
    try 
    {
        const response = await axios.post(INVESTMENT_API, data);
        return {success : true, data: response.data}
        
    } 
    catch (error) {
        return {success : false, data:error}
        
    }

}