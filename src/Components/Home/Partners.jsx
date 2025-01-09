import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fetchData from "../../Utils/fetchData";
import { company } from "../../API/apis";
import Shimmer from "../Extras/Shimmer";

const Partners = () => {
  const [companies, setCompanies] = useState([]);

  // Fetch Data Function
  const getData = async () => {
    try {
      const { data } = await fetchData(company);
      setCompanies(data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  console.log(companies);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="company" className="min-h-screen p-10">
      <h1 className="text-4xl font-bold text-[#e2bf65] text-center my-10">
        Available Companies for Investment
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies ? (
          companies.map((company) => (
            <Link key={company._id} to={`/${company._id}`}>
              <motion.div
                className="rounded-lg shadow-lg bg-[#1b2238] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                {/* Company Image */}
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />

                {/* Company Info */}
                <div className="p-4 text-[#f5f3f0]">
                  <h2 className="text-2xl font-semibold mb-2 text-[#e2bf65]">
                    {company.name}
                  </h2>
                  <p className="text-sm mb-1">
                    <strong>Industry:</strong> {company.type_of_company}
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Turnover:</strong> {company.turnover}
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Funds Required:</strong> {company.funds_requirement}
                  </p>
                  <p className="text-sm mb-1">
                    <strong>Started:</strong> {company.started_year}
                  </p>
                  <p className="text-sm">
                    <strong>Location:</strong> {company.location}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))
        ) : (
          <Shimmer len={6} />
        )}
      </div>
    </div>
  );
};

export default Partners;
