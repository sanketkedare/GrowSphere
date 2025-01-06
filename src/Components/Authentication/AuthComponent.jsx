import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import AuthForm from "./AuthForm";
import AuthButtons from "./AuthButtons";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../Hooks/useAuthCheck";

const AuthComponent = () => {
  const { isSignIn, error, message, setMessage } = useContext(AuthContext);
  const navigate = useNavigate();
  const { user } = useAuthCheck();

  // Clear messages after a timeout
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  // Redirect to home if user is logged in
  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [user, navigate]);

  return (
    <div className="bg-gradient-to-b from-[#0a0f24] to-[#11162d] text-[#f5f3f0] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-[#1b2238]">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-semibold text-[#e2bf65]">
            {isSignIn ? "Sign In" : "Log In"}
          </h1>
          {error ? (
            <p className="bg-[#B32624] italic text-white p-1 my-1 rounded-xl">
              {error}
            </p>
          ) : message ? (
            <p className="bg-[#006633] italic text-white p-1 my-1 rounded-xl">
              {message}
            </p>
          ) : (
            <p className="text-[#d1c4a9] italic">
              {isSignIn ? "Create a new account" : "Welcome back, please log in."}
            </p>
          )}
        </motion.div>
        <AuthForm />
        <AuthButtons />
      </div>
    </div>
  );
};

export default AuthComponent;
