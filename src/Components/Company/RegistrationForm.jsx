import React from "react";
import { FaBuilding, FaLocationArrow, FaRegImage } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdPhone, MdPerson, MdDateRange, MdEmail } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ handleSubmit, handleChange, formData }) => 
{
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Company Basic Information */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">
          Company Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div>
            <label className="text-[#d4af37] font-semibold mb-2 block">
              Company Name
            </label>
            <div className="relative">
              <FaBuilding className="absolute top-3 left-3 text-[#d4af37]" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="ex. Tech Innovations Ltd"
                required
                className="w-full pl-10 p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>

          {/* Type of Company */}
          <div>
            <label className="text-[#d4af37] font-semibold mb-2 block">
              Type of Company
            </label>
            <div className="relative">
              <FaLocationArrow className="absolute top-3 left-3 text-[#d4af37]" />
              <input
                type="text"
                name="type_of_company"
                value={formData.type_of_company}
                onChange={handleChange}
                placeholder="ex. Technology"
                required
                className="w-full pl-10 p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="text-[#d4af37] font-semibold mb-2 block">
              Location
            </label>
            <div className="relative">
              <FaLocationArrow className="absolute top-3 left-3 text-[#d4af37]" />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="ex. San Francisco, USA"
                required
                className="w-full pl-10 p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>

          {/* Started Year */}
          <div>
            <label className="text-[#d4af37] font-semibold mb-2 block">
              Started Year
            </label>
            <div className="relative">
              <MdDateRange className="absolute top-3 left-3 text-[#d4af37]" />
              <input
                type="number"
                name="started_year"
                value={formData.started_year}
                onChange={handleChange}
                placeholder="ex. 2015"
                required
                className="w-full pl-10 p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>

          {/* Image Link */}
          <div>
            <label className="text-[#d4af37] font-semibold mb-2 block">
              Image Link
            </label>
            <div className="relative">
              <FaRegImage className="absolute top-3 left-3 text-[#d4af37]" />
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="ex. https://image-link.com"
                required
                className="w-full pl-10 p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Financial Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">
          Financial Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Turnover */}
          <div>
            <label className="text-[#d4af37] font-semibold mb-2 block">
              Turnover
            </label>
            <div className="relative">
              <GiMoneyStack className="absolute top-3 left-3 text-[#d4af37]" />
              <input
                type="text"
                name="turnover"
                value={formData.turnover}
                onChange={handleChange}
                placeholder="ex. 10M USD"
                required
                className="w-full pl-10 p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>

          {/* Shareholding */}
          <div>
            <label className="text-[#d4af37] font-semibold mb-2 block">
              Shareholding
            </label>
            <div className="relative">
              <MdAttachMoney className="absolute top-3 left-3 text-[#d4af37]" />
              <input
                type="text"
                name="shareholding"
                value={formData.shareholding}
                onChange={handleChange}
                placeholder="ex. 70%"
                required
                className="w-full pl-10 p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>

          {/* Funds Requirement */}
          <div>
            <label className="text-[#d4af37] font-semibold mb-2 block">
              Funds Requirement
            </label>
            <div className="relative">
              <GiMoneyStack className="absolute top-3 left-3 text-[#d4af37]" />
              <input
                type="text"
                name="funds_requirement"
                value={formData.funds_requirement}
                onChange={handleChange}
                placeholder="ex. 2M USD"
                required
                className="w-full pl-10 p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-[#d4af37]">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact */}
          <div>
            <label className="text-[#d4af37] font-semibold mb-2 block">
              Contact Number
            </label>
            <div className="relative">
              <MdPhone className="absolute top-3 left-3 text-[#d4af37]" />
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="ex. +1 123-456-7890"
                required
                className="w-full pl-10 p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-[#d4af37] font-semibold mb-2 block">
              Company Email Id
            </label>
            <div className="relative">
              <MdEmail className="absolute top-3 left-3 text-[#d4af37]" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exmaple@gmail.com"
                required
                className="w-full pl-10 p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>

          {/* CEO */}
          <div>
            <label className="text-[#d4af37] font-semibold mb-2 block">
              CEO Name
            </label>
            <div className="relative">
              <MdPerson className="absolute top-3 left-3 text-[#d4af37]" />
              <input
                type="text"
                name="ceo"
                value={formData.ceo}
                onChange={handleChange}
                placeholder="ex. John Doe"
                required
                className="w-full pl-10 p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Extra Information */}
      <div>
        <label className="text-[#d4af37] font-semibold mb-2 block">
          Extra Information
        </label>
        <textarea
          name="extra_information"
          value={formData.extra_information}
          onChange={handleChange}
          placeholder="ex. Specializes in AI-driven products for healthcare."
          required
          className="w-full p-2 rounded-md bg-[#444444] text-white focus:ring-2 focus:ring-[#d4af37]"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          type="submit"
          className="bg-[#d4af37] text-black font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#c7a32c] transition-all duration-300"
        >
          Register Company
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-[#555555] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#444444] transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
