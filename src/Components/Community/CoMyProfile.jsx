import React, { useContext, useState, useEffect } from "react";
import { CommunityContext } from "./CoProvider";
import { FcBusinessman } from "react-icons/fc";
import { FaUser, FaEdit, FaSignOutAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "../../Utils/AuthMethods";

const CoMyProfile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { myData } = useContext(CommunityContext);
  const navigate = useNavigate();

  const logOutHandler = async () => {
    setIsLoggingOut(true);
    try {
      await LogOut();
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".menu-container")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Framer Motion Variants
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const menuItems = [
    { label: "View Profile", icon: <FaUser />, path: "/myprofile" },
    { label: "Edit Profile", icon: <FaEdit />, path: "/edit-profile" },
    { label: "My Investments", icon: <FaMoneyCheckAlt />, path: "/discuss" },
  ];

  return (
    <div
      className="absolute top-10 right-10 z-50"
      
    >
      {/* Profile Icon */}
      {myData && (
        <div
          className="w-[50px] h-[50px] cursor-pointer menu-container"
          onClick={() => setMenuOpen(!menuOpen)} title={myData?.email || "Profile"}
        >
          {myData?.image ? (
            <img
              src={myData?.image || "/default-profile.png"}
              alt="Profile"
              className="border border-[#FFD700] rounded-full h-full object-cover hover:shadow-lg"
            />
          ) : (
            <FcBusinessman className="text-5xl bg-[#1F1F1F] p-1 rounded-full shadow-md hover:bg-[#FFD700] hover:text-white transition-all" />
          )}
        </div>
      )}

      {/* Menu Options */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-[60px] right-0 bg-[#1F1F1F] border border-[#FFD700] rounded-lg shadow-xl w-[250px] p-4 menu-container"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <Link to={item.path} key={item.label}>
                  <li
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 cursor-pointer bg-[#292929] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1F1F1F] p-3 rounded-lg transition-all"
                  >
                    {item.icon} {item.label}
                  </li>
                </Link>
              ))}
              <li
                onClick={!isLoggingOut ? logOutHandler : null}
                className={`flex items-center gap-3 cursor-pointer bg-[#292929] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1F1F1F] p-3 rounded-lg transition-all ${
                  isLoggingOut ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FaSignOutAlt /> {isLoggingOut ? "Logging Out..." : "Logout"}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoMyProfile;
