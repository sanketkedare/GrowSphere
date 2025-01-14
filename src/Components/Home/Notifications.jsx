import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaBell } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useNotification from "../../Hooks/useNotification";
import NotificationCart from "../Notification/NotificationCart";
import { Link } from "react-router-dom";

const Notifications = () => {
  const { user } = useSelector((state) => state.user);
  const notifications = useNotification(user?.userType) || [];
  const [showNotifications, setShowNotifications] = useState(false);
  const [seen, setSeen] = useState(false);
  const notificationRef = useRef(null);

  const toggleNotifications = () => setShowNotifications((prev) => !prev);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    if (showNotifications) {
      setSeen(true);
    }
  }, [showNotifications]);

  const notificationVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
  };

  const bellVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: {
      scale: 0.9,
      rotate: -10,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="fixed left-3 bottom-20 lg:left-auto lg:right-24 lg:top-10  flex justify-center gap-4">
      {user && (
        <div className="relative">
          <div className="relative">
            <motion.div
              variants={bellVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-block"
            >
              <FaBell
                onClick={toggleNotifications}
                aria-expanded={showNotifications}
                aria-label="Notification Bell"
                className="text-5xl text-[#cb3030] bg-white border border-[#cb3030] p-2 shadow-lg rounded-full cursor-pointer hover:text-[#181818] transition-all duration-300"
              />
            </motion.div>
            {!seen && notifications.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </div>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                ref={notificationRef}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={notificationVariants}
                className="absolute right-0 mt-2 bg-white text-black w-[350px] max-h-[400px] p-1 shadow-lg rounded-md overflow-y-auto"
              >
                {notifications.length > 0 ? (
                  <ul className="space-y-2">
                    {notifications.map((notification) => (
                      <Link
                        key={notification._id}
                        to={`/discuss/${notification?._id}`}
                      >
                        <NotificationCart notification={notification} />
                      </Link>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm">
                    No notifications available.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Notifications;
