"use client";
import React from "react";
import CardDashboard from "../../dashboard/_components/CardDashboard";

const DetilSiswa = ({ params }) => {
  const { userId } = params;
  return (
    <div>
      <CardDashboard isAdmin={true} id={userId} />
    </div>
  );
};

export default DetilSiswa;
