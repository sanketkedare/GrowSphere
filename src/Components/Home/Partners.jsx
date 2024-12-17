import React from 'react'
import { motion } from "framer-motion";
import companies from '../../Utils/companies.json'

const Partners = () => {
  return (
    <div id='company' className="min-h-screen p-10">
      <h1 className="text-4xl font-bold text-[#e2bf65] text-center my-10">
        Available Companies for Investment
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <motion.div
            key={index}
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
        ))}
      </div>
    </div>
  )
}

export default Partners
