import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import MenuButtons from "../Menu/MenuButtons";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
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

  return (
    <div className="fixed left-3 bottom-5 lg:left-auto lg:right-8 lg:top-10 z-50 flex justify-center gap-4">
      {/* Menu Icon */}
      {!menuOpen ? (
        <IoMdMenu
          onClick={toggleMenu}
          className="text-5xl p-3 rounded-full bg-[#e2bf65] text-[#0a0f24] shadow-lg hover:bg-[#d1c4a9] transition-all duration-300"
        />
      ) : (
        <MenuButtons handleMenuItemClick={handleMenuItemClick} menuOpen={menuOpen} menuRef={menuRef}/>
      )}
    </div>
  );
};

export default Menu;
