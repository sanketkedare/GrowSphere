import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import { useSelector } from "react-redux";
import { COMPANY, EMPLOYEE, INVESTER } from "../../Utils/constants";
import RegistrationMassage from "./RegistrationMassage";
import { motion } from "framer-motion"; // Import Framer Motion
import { MdCheckCircle } from "react-icons/md"; // Import success icon
import { useRegister } from "../../Hooks/useRegister";

const CompanyRegistration = () => {
  const { user } = useSelector((state) => state.user);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Form state to manage input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    turnover: "",
    shareholding: "",
    funds_requirement: "",
    started_year: "",
    type_of_company: "",
    location: "",
    contact: "",
    ceo: "",
    extra_information: "",
  });

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, error } = await useRegister(COMPANY, { ...formData });
    success ? setSuccess(true) : setError(error?.message);
  };

  // Redirect users who are not eligible for registration
  if (user?.userType === INVESTER || user?.userType === EMPLOYEE) {
    return <RegistrationMassage user={user} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-6">
      {/* Display registration success message */}
      {success || error ? (
        <motion.div
          className="fixed inset-0 z-10 bg-black bg-opacity-75 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {success ? (
            <div className="bg-gray-800 text-center p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
              <MdCheckCircle className="text-[#28a745] text-6xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-[#d4af37] mb-6">
                Registration Successful
              </h2>
              <p className="text-lg mb-4">Company Profile is Under Review.</p>
              <p className="text-lg mb-4">
                After successful registration, we will inform you shortly.
              </p>
              <p className="text-lg mb-4">
                For now, your company has been listed.
              </p>
              <p className="text-lg mb-6">
                You will be provided a{" "}
                <b className="text-yellow-400">Sign up link</b> via email.
                Please log in after that.
              </p>
              <Link
                to="/"
                className="px-6 py-2 bg-[#d4af37] text-black rounded-lg font-medium hover:bg-[#c49b35] transition-all"
              >
                Go Home
              </Link>
            </div>
          ) : (
            <div className="bg-red-800 text-center p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
              <h2 className="text-3xl font-bold text-white mb-6">
                Registration Failed
              </h2>
              <p>{error}</p>
              <p className="text-lg mb-4">
                We encountered an error during registration. Please check your
                inputs and try again.
              </p>
              <p className="text-lg mb-4">
                If the problem persists, please contact support.
              </p>
              <button
                onClick={() => setError(false)}
                className="px-6 py-2 bg-white text-red-800 rounded-lg font-medium hover:bg-red-700 hover:text-white transition-all"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      ) : null}
      {/* Registration form */}
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full lg:w-9/12">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#d4af37]">
          Register Your Company
        </h1>
        <RegistrationForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default CompanyRegistration;
