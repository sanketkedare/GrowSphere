import { createContext, useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { useParams } from "react-router-dom";
import { company } from "../../API/apis";
import useUserData from "../../Hooks/useUserData";
import { createInvestment } from "./fetchRequests";
import useNotification from "../../Hooks/useNotification";

export const InvestmentContext = createContext();

const InvestmentContextComponent = ({ children }) => 
{
  const { id } = useParams();
  const invester = useUserData();
  const [currentCompany, setCompany] = useState({});
  const [timeSlots, setTimeSlots] = useState({});
  const [massage, setMassage] = useState(null);
  const [alreadyInvested, setAlreadyInvested] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState({ sent: false, type: null });
  const notification = useNotification();

  // Check if investment already exists
  const checkAlreadyExists = () => {
    const inv = notification.find(
      (i) =>
        i.investmentNumber.investerId === invester._id &&
        i.investmentNumber.companyId === id
    );
    if (inv) {
      setAlreadyInvested(inv?._id);
    }
  };
  // Fetch company data based on the ID
  const getData = async () => {
    try {
      const companyData = await fetchData(`${company}/${id}`);
      setCompany(companyData.data);
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };
  // Submit investment request (combined for meeting and direct investment)
  const submitInvestmentRequest = async (type, obj) => {
    const investmentObject = {
      investmentNumber: {
        investerId: invester._id,
        companyId: id,
      },
      ...(type === "meeting"
        ? { meeting: { timeSlots: obj } }
        : { massages: [obj.message], progress: 'Pending' }),
    };

    const response = await createInvestment(investmentObject);
    setMassage(response);

    if (response.success) {
      setRequestSuccess({ sent: true, type });
    } else {
      setMassage({ success: false, data: response.data.response.data });
    }
  };
  
  // Fetch data when component is mounted or when 'id' changes
  useEffect(() => {
    getData();
  }, [id]);

  // Clear message after 9 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setMassage(null);
    }, 9000);

    return () => clearTimeout(timer);
  }, [massage]);

  // Check for existing investments
  useEffect(() => {
    if (notification.length > 0) {
      checkAlreadyExists();
    }
  }, [notification, id]);

  const value = {
    alreadyInvested,
    currentCompany,
    massage,
    requestSuccess,
    setMassage,
    invester,
    submitInvestmentRequest,
    timeSlots,
    setTimeSlots,
  };

  return <InvestmentContext.Provider value={value}>{children}</InvestmentContext.Provider>;
};

export default InvestmentContextComponent;
