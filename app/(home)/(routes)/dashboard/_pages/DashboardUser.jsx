"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import React from "react";
import CardDashboard from "../_components/CardDashboard";

const DashboardUser = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <div>
      <CardDashboard id={user?.id} isAdmin={false} />
    </div>
  );
};

export default DashboardUser;
