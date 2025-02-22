import { createContext, useEffect, useState } from "react";
import { login_Email_Password, signUp_Email_Password } from "../../Utils/AuthMethods";
import { useRegister } from "../../Hooks/useRegister";
import { INVESTER } from "../../Utils/constants";

// Create AuthContext
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between Sign In and Sign Up
  const [email, setEmail] = useState(""); // State to store email input
  const [password, setPassword] = useState(""); // State to store password input
  const [error, setError] = useState(null); // State to store error messages
  const [message, setMessage] = useState(null);

  // Handles form submission for sign-in/sign-up
  const submitForm = async () => {
    try {
      if (isSignIn) {
        useRegister(INVESTER, {email, password});
        await signUp_Email_Password(email, password)
        setMessage("User Signed in Successfully");
      } else {
        const res = await login_Email_Password(email, password);
        console.log(res);
        setMessage("User Logged in Successfully");
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Unexpected error";
      setError(errorMessage);
      setPassword("");
    }
  };

  // Context value object to share states and functions
  const value = {
    isSignIn,
    setIsSignIn,
    email,
    setEmail,
    password,
    setPassword,
    submitForm,
    error,
    message,
    setMessage,
  };

  useEffect(() => {
    setError(null);
    setPassword("");
  }, [isSignIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
