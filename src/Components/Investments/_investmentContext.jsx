import { createContext, useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { useParams } from "react-router-dom";
import { company } from "../../API/apis";
import useUserData from "../../Hooks/useUserData";
import { createInvestment } from "./fetchRequests";

export const InvestmentContext = createContext();

const InvestmentContextComponent = ({ children }) => {
  const { id } = useParams();
  const invester = useUserData();
  const [currentCompany, setCompany] = useState({});
  const [timeSlots, setTimeSlots] = useState({}); 
  const [massage, setMassage] = useState(null);
  const [requestSuccess, setRequestSuccess] = useState({sent: false,type: null});

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
  const submitMeetingRequest = async (obj) => {
    const investmentObject = {
      investerId: invester._id,
      companyId: currentCompany._id,
      meeting: { timeSlots: obj },
    };
    const response = await createInvestment(investmentObject);
    setMassage(response);
    if (response.success) setRequestSuccess({ sent: true, type: "meeting" });
  };
  // Submit investment request
  const submitInvestmentRequest = async (obj) => {
    const investmentObject = {
      investerId: invester._id,
      companyId: currentCompany._id,
      massages: [obj.message],
      progress: "In Progress",
    };
    const response = await createInvestment(investmentObject);
    setMassage(response);
    if (response.success) setRequestSuccess({ sent: true, type: "direct" });
  };

  // Fetch data when component is mounted or when 'id' changes
  useEffect(() => {
    getData();
  }, [id]);

  useEffect(() => {
    let timer;
    
      timer = setTimeout(() => {
        setMassage(null);
      }, 4000);

    return () => clearTimeout(timer);
  }, [massage]);

  const value = {
    currentCompany,
    massage,
    requestSuccess,
    setMassage,
    invester,
    submitMeetingRequest,
    submitInvestmentRequest,
    timeSlots,
    setTimeSlots,
  };

  return (
    <InvestmentContext.Provider value={value}>
      {children}
    </InvestmentContext.Provider>
  );
};

export default InvestmentContextComponent;
