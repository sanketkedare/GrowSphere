import React from "react";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <div className="bg-[#0a0f24] text-[#f5f3f0] py-8">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center justify-center">
        <div className="text-center mb-6">
          <p className="text-lg font-semibold text-[#e2bf65]">
            Connect with me
          </p>
          <p className="text-sm text-[#d1c4a9]">
            Developed by <span className="font-bold">Sanket Kedare</span>, CEO of GrowSphere
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-3xl">
          <a
            href="https://github.com/sanketkedare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d1c4a9] hover:text-[#e2bf65] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sanketkedare/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d1c4a9] hover:text-[#e2bf65] transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://sanketkedare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d1c4a9] hover:text-[#e2bf65] transition duration-300"
          >
            <FaExternalLinkAlt />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-sm text-[#d1c4a9]">
          <p>&copy; 2024 Sanket Kedare. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
