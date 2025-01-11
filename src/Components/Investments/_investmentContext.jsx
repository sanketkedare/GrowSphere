import { createContext, useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { useParams } from "react-router-dom";
import { company } from "../../API/apis";
import useUserData from "../../Hooks/useUserData";

export const InvestmentContext = createContext();

const InvestmentContextComponent = ({ children }) => 
{
    const { id } = useParams();
    const invester = useUserData();
    const [currentCompany, setCompany] = useState({});

    // Fetch company data based on the ID
    const getData = async () => {
        try {
            const companyData = await fetchData(`${company}/${id}`);
            setCompany(companyData.data);
        } catch (error) {
            console.error("Error fetching company data:", error);
        }
    };

    // Submit meeting request
    const submitMeetingRequest = (obj) => {
        console.log("Meeting Request:", obj);
    };

    // Submit investment request
    const submitInvestmentRequest = (obj) => {
        const requestMessage = `From investor: ${invester?.name} to company: ${currentCompany?.name} request sent. For amount: ${currentCompany?.funds_requirement}.`;
        const message = `Message: ${obj?.message || ''}`;
        console.log(requestMessage, message);
    };

    // Fetch data when component is mounted or when 'id' changes
    useEffect(() => {
        getData();
    }, [id]);

    const value = {
        currentCompany,
        invester,
        submitMeetingRequest,
        submitInvestmentRequest
    };

    return (
        <InvestmentContext.Provider value={value}>
            {children}
        </InvestmentContext.Provider>
    );
};

export default InvestmentContextComponent;
