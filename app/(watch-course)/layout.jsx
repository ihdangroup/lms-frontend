import React from "react";
import { AuthContextProvider } from "../_context/AuthContext";

const WatchCourseLayout = ({ children }) => {
  return (
    <AuthContextProvider>
      <div>{children}</div>
    </AuthContextProvider>
  );
};

export default WatchCourseLayout;
