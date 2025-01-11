import React from "react";
import Investments from "../Components/Investments/Investments";
import InvestmentContextComponent from "../Components/Investments/_investmentContext";

const InvestmentPage = () => {
  return (
    <InvestmentContextComponent>
      <Investments />
    </InvestmentContextComponent>
  );
};

export default InvestmentPage;
