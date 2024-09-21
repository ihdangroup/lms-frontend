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
          <>
            <div className="h-[300px] flex flex-col text-center items-center justify-center p-6 rounded-lg my-4 text-white bg-[#065371]">
              <h2 className="text-3xl">Selamat Datang {user?.name}!</h2>
              <p>Semoga aktivitas belajarmu menyenangkan.</p>
            </div>
            <DashboardUser />
          </>
        ) : (
          <DashboardAdmin />
        )
      ) : null}
    </div>
  );
};

export default page;
