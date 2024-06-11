import React from "react";
import { AuthContextProvider } from "../_context/AuthContext";
const AuthLayout = ({ children }) => {
  return (
    <AuthContextProvider>
      <div>{children}</div>
    </AuthContextProvider>
  );
};

export default AuthLayout;
