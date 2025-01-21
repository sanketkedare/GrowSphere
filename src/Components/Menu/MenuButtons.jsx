import React from "react";
import { useSelector } from "react-redux";
import { COMPANY } from "../../Utils/constants";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useAuthCheck from "../../Hooks/useAuthCheck";
import { GiExplosiveMeeting } from "react-icons/gi";
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
import { RiUserCommunityFill } from "react-icons/ri";
import useNotification from "../../Hooks/useNotification";
import MenuSocial from "./MenuSocial";

const MenuButtons = ({ handleMenuItemClick, menuOpen, menuRef }) => {
  const notification = useNotification();
  const userType = useSelector((state) => state.user.user?.userType);
  const { user } = useAuthCheck();

  // Menu animation variants
  const menuVariants = {
    hidden: { y: -150, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  return (
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
          <Link to={"/community"} target="_blank">
            <button className="flex items-center gap-2 bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300">
              <RiUserCommunityFill />
              Go To Commutity
            </button>
          </Link>

          <Link
            to={
              notification[0]?._id
                ? `/discuss/${notification[0]._id}`
                : `/discuss/`
            }
          >
            <button className="flex items-center gap-2 bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300">
              <GiExplosiveMeeting />
              Discussions
            </button>
          </Link>

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

          {userType !== COMPANY && (
            <Link
              to="/register"
              onClick={() => handleMenuItemClick()}
              className="w-full"
            >
              <button className="flex items-center gap-2 bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300">
                <FaPenFancy />
                Register Company
              </button>
            </Link>
          )}

          <Link
            to={user ? "/myprofile" : "/auth"}
            onClick={() => handleMenuItemClick()}
            className="w-full"
          >
            <button className="flex items-center gap-2 bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300">
              {user ? (
                <>
                  <FaUserCircle />
                  My Profile
                </>
              ) : (
                <>
                  <FaSignInAlt /> Login / Sign Up
                </>
              )}
            </button>
          </Link>

          {/* Social Icons */}
          <MenuSocial />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuButtons;
