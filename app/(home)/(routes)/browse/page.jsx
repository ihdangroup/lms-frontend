"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import React from "react";
import CourseMenuAdmin from "./_pages/CourseMenuAdmin";
import CourseMenuUser from "./_pages/CourseMenuUser";

const Dashboard = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <div>
      {!user ? (
        <CourseMenuUser />
      ) : user?.role == "user" ? (
        <CourseMenuUser />
      ) : (
        <CourseMenuAdmin />
      )}
    </div>
  );
};

export default Dashboard;
