"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import React from "react";

const Profile = () => {
  const { user } = React.useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-purple-400 mb-4">
          Profil Pengguna
        </h2>
        <div className="mt-7 shadow-lg bg-white p-8 border-l-4 border-purple-400">
          <div className="flex items-center mb-4">
            <p className="mr-4 font-semibold">Nama :</p>
            <h2 className="font-medium">{user?.name}</h2>
          </div>
          <div className="flex items-center mb-4">
            <p className="mr-4 font-semibold">Status :</p>
            <h4 className="font-medium">
              {user?.role === "user" ? "Siswa" : "Administrator"}
            </h4>
          </div>
          <div className="flex items-center">
            <p className="mr-4 font-semibold">Email :</p>
            <p className="font-medium">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
