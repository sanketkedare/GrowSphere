import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import {
  FaRocket,
  FaCog,
  FaBuilding,
  FaInfoCircle,
  FaUserPlus,
  FaUserCircle,
  FaSignInAlt,
  FaPenFancy,
} from "react-icons/fa";

const Menu = () => {
  const isAuthenticated = false;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu state
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleMenuItemClick = (targetId) => {
    setMenuOpen(false);
    if (targetId) {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Menu animation variants
  const menuVariants = {
    hidden: { y: -150, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  return (
    <div className="fixed right-8 top-10 z-50 flex justify-center gap-4">
      {/* Menu Icon */}
      {!menuOpen ? (
        <IoMdMenu
          onClick={toggleMenu}
          className="text-5xl p-3 rounded-full bg-[#e2bf65] text-[#0a0f24] shadow-lg hover:bg-[#d1c4a9] transition-all duration-300"
        />
      ) : (
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              className="relative bg-[#11162d] text-white w-[250px] rounded-xl p-4 shadow-xl backdrop-blur-sm border border-white"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Menu Items */}
              <button
                onClick={() => handleMenuItemClick("mission")}
                className="flex items-center gap-2 bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300"
              >
                <FaRocket /> Our Mission
              </button>
              <button
                onClick={() => handleMenuItemClick("process")}
                className="flex items-center gap-2 bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300"
              >
                <FaCog />
                Investment Process
              </button>
              <button
                onClick={() => handleMenuItemClick("company")}
                className="flex items-center gap-2 bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300"
              >
                <FaBuilding />
                Listed Companies
              </button>
              <button
                onClick={() => handleMenuItemClick("about")}
                className="flex items-center gap-2 bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300"
              >
                <FaInfoCircle /> About Us
              </button>
              <button
                onClick={() => handleMenuItemClick("contact")}
                className="flex items-center gap-2 bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300"
              >
                <FaUserPlus /> Join Us
              </button>
              <Link
                to='/register'
                onClick={() => handleMenuItemClick()}
                className="w-full"
              >
                <button className="flex items-center gap-2 bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300">
                <FaPenFancy />Register Company
                </button>
              </Link>
              <Link
                to={isAuthenticated ? "/myprofile" : "/auth"}
                onClick={() => handleMenuItemClick()}
                className="w-full"
              >
                <button className="flex items-center gap-2 bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300">
                  {isAuthenticated ? (
                    <>
                      <FaUserCircle /> Profile
                    </>
                  ) : (
                    <>
                      <FaSignInAlt /> Login / Sign Up
                    </>
                  )}
                </button>
              </Link>

              {/* Social Icons */}
              <div className="h-[100px] flex justify-center items-center gap-4 mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 hover:bg-[#11162d] hover:text-[#e2bf65] transition-all duration-300"
                >
                  <TbBrandLinkedinFilled className="text-4xl" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 hover:bg-[#11162d] hover:text-[#e2bf65] transition-all duration-300"
                >
                  <BsGithub className="text-4xl" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default Menu;
