"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import React from "react";
import DashboardAdmin from "./_pages/DashboardAdmin";
import DashboardUser from "./_pages/DashboardUser";

const page = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <div>
      {user ? (
        user?.role == "user" ? (
          <DashboardUser />
        ) : (
          <DashboardAdmin />
        )
      ) : null}
    </div>
  );
};

export default page;
