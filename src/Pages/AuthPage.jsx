import React from "react";
import AuthComponent from "../Components/Authentication/AuthComponent";
import AuthContextProvider from "../Components/Authentication/AuthContext";

const AuthPage = () => 
{
  return (
    <AuthContextProvider>
      <AuthComponent />
    </AuthContextProvider>
  );
};

export default AuthPage;
