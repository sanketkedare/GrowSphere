import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuHandler = () => setMenuOpen((prev) => !prev);

  return (
    <div className="absolute right-8 top-10 z-50">
      {/* Menu Icon */}
      {!menuOpen ? (
        <IoMdMenu
          onClick={menuHandler}
          className="text-5xl p-3 rounded-full bg-[#e2bf65] text-[#0a0f24] shadow-lg hover:bg-[#d1c4a9] transition-all duration-300"
        />
      ) : (
        <motion.div
          className="h-[600px] bg-[#11162d] text-white w-[300px] rounded-xl p-4 shadow-xl backdrop-blur-sm border border-white"
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0 , opacity: 1}}
          exit={{ y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onMouseLeave={menuHandler}
        >
          <Link to="/auth" onClick={menuHandler}>
            <h2 className="bg-white text-black font-bold w-full text-center p-4 rounded-xl my-2 hover:bg-[#e2bf65] hover:text-[#11162d] transition-all duration-300">
              Login / Signup
            </h2>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Menu;
