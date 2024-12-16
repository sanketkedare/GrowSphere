import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between Sign In and Log In forms

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
          <p className="text-[#d1c4a9] italic">
            {isSignIn ? "Create a new account" : "Welcome back, please log in."}
          </p>
        </motion.div>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-[#d1c4a9] text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="mt-2 w-full p-3 rounded-md bg-[#1b2238] text-[#f5f3f0] border border-[#e2bf65] focus:outline-none focus:ring-2 focus:ring-[#e2bf65]"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-[#d1c4a9] text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="mt-2 w-full p-3 rounded-md bg-[#1b2238] text-[#f5f3f0] border border-[#e2bf65] focus:outline-none focus:ring-2 focus:ring-[#e2bf65]"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full p-3 rounded-md text-lg font-semibold bg-[#e2bf65] text-[#0a0f24] hover:bg-[#d1c4a9] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSignIn ? "Sign Up" : "Log In"}
          </motion.button>
        </motion.form>

        {/* Toggle between Sign In and Log In */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-[#e2bf65] text-sm font-medium hover:underline focus:outline-none"
          >
            {isSignIn
              ? "Already have an account? Log In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>

        {/* Google Login Button */}
        <motion.button
          className="w-full flex items-center justify-center gap-3 p-3 mt-4 rounded-md bg-[#f5f3f0]  text-black text-lg font-semibold hover:bg-[#e4dfde] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FcGoogle/>
          Login with Google
        </motion.button>

        {/* Go Home Button */}
        <motion.button
          className="w-full p-3 mt-4 rounded-md bg-[#1b2238] text-[#e2bf65] text-lg font-semibold hover:bg-[#333c56] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="w-full h-full block text-center">
            Go Home
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default AuthPage;
