import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { signIn_With_Google } from "../../Utils/AuthMethods";
import { INVESTER } from "../../Utils/constants";
import { useRegister } from "../../Hooks/useRegister";

const AuthButtons = () => {
  const { isSignIn, setIsSignIn, setMessage } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const response = await signIn_With_Google();
      const dm = await useRegister(INVESTER, {email:response.user.email , password:response.user.email});
      console.log(dm)
      setMessage("User signed in successfully");
    } catch (error) {
      setMessage("Error signing in with Google");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mt-4 text-center">
        <button
          onClick={() => setIsSignIn(!isSignIn)}
          className="text-[#e2bf65] text-sm font-medium hover:underline focus:outline-none"
        >
          {isSignIn ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
        </button>
      </div>

      {/* Google Sign-In Button */}
      <motion.button
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className={`w-full flex items-center justify-center gap-3 p-3 mt-4 rounded-md ${
          isLoading ? "bg-gray-300 cursor-not-allowed" : "bg-[#f5f3f0] hover:bg-[#e4dfde]"
        } text-black text-lg font-semibold transition-all duration-300`}
        whileHover={{ scale: isLoading ? 1 : 1.05 }}
        whileTap={{ scale: isLoading ? 1 : 0.95 }}
        aria-label="Sign in with Google"
      >
        {isLoading ? "Loading..." : <>
          <FcGoogle />
          Login with Google
        </>}
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
    </>
  );
};

export default AuthButtons;
