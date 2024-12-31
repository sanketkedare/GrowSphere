import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "./AuthContext";

const AuthForm = ({}) => {
  const { isSignIn, email, setEmail, password, setPassword, submitForm} = useContext(AuthContext);

  const signUpHandler = (e) =>{
    e.preventDefault();
    submitForm()
  }

  return (
    <motion.form
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      onSubmit={(e)=>signUpHandler(e)}
    >
      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="block text-[#d1c4a9] text-sm font-medium"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="mt-2 w-full p-3 rounded-md bg-[#1b2238] text-[#f5f3f0] border border-[#e2bf65] focus:outline-none focus:ring-2 focus:ring-[#e2bf65]"
        />
      </div>

      {/* Password Input */}
      <div>
        <label
          htmlFor="password"
          className="block text-[#d1c4a9] text-sm font-medium"
        >
          Password
        </label>
        <input
         onChange={(e)=>setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          value={password}
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
  );
};

export default AuthForm;
