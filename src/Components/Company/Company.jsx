import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import CompanyButtons from "./CompanyButtons";
import { pageVariants } from "./animations";
import NotFound from "./NotFound";
import fetchData from "../../Utils/fetchData";
import { company } from "../../API/apis";

const Company = () => {
  const { id } = useParams();
  const [companyData, setCompanyData] = useState(null);

  const getData = async () => {
    const { data } = await fetchData(`${company}/` + id);
    setCompanyData(data);
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (!companyData) {
    return <NotFound />;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="h-screen bg-gradient-to-b from-gray-900 to-black text-white"
    >
      {/* Hero Section */}
      <div className="relative h-1/2">
        <img
          src={companyData.image}
          alt={companyData.name}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <motion.h1
            className="text-5xl font-bold text-gold-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {companyData.name}
          </motion.h1>
          <p className="mt-2 italic text-lg text-gray-300">
            {companyData.extra_information}
          </p>
        </div>
      </div>

      {/* Company Details */}
      <div className="h-1/2 flex flex-col justify-between px-8 md:px-16 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
          {/* Left Details */}
          <div className="m-auto">
            <p>
              <span className="font-semibold text-gold-500">Turnover:</span>{" "}
              {companyData.turnover}
            </p>
            <p className="mt-4">
              <span className="font-semibold text-gold-500">Shareholding:</span>{" "}
              {companyData.shareholding}
            </p>
            <p className="mt-4">
              <span className="font-semibold text-gold-500">
                Funds Requirement:
              </span>{" "}
              {companyData.funds_requirement}
            </p>
          </div>

          {/* Right Details */}
          <div className="m-auto">
            <p>
              <span className="font-semibold text-gold-500">Started Year:</span>{" "}
              {companyData.started_year}
            </p>
            <p className="mt-4">
              <span className="font-semibold text-gold-500">
                Type of Company:
              </span>{" "}
              {companyData.type_of_company}
            </p>
            <p className="mt-4">
              <span className="font-semibold text-gold-500">Location:</span>{" "}
              {companyData.location}
            </p>
          </div>
        </div>

        {/* CEO and Contact */}
        <div className="text-center mt-6">
          <p className="text-2xl font-semibold text-gold-500">
            CEO: <span className="text-white">{companyData.ceo}</span>
          </p>
          <p className="text-lg mt-2 text-gray-300">
            Contact: {companyData.contact}
          </p>
        </div>

        {/* Buttons */}
        <CompanyButtons id={id }/>
      </div>
    </motion.div>
  );
};

export default Company;
