"use client";
import React from "react";
import TableUser from "../_components/TableUser";
import { UserContext } from "@/app/_context/UserContext";
import { AuthContext } from "@/app/_context/AuthContext";

const DashboardAdmin = () => {
  const {
    setUserAcount,
    filterUsers,
    handleSearch,
    verifyEmail,
    students,
    loading,
  } = React.useContext(UserContext);
  const { user } = React.useContext(AuthContext);
  const usingUser = () => {
    setUserAcount(user);
  };
  React.useEffect(() => {
    usingUser(user);
  }, [user]);
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Daftar Mahasiswa</h2>
      <div>
        <input
          type="text"
          className="px-6 py-2 rounded my-2 border border-gray-400"
          placeholder="search user"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
      <div className="overflow-x-auto">
        <TableUser
          verifyEmail={verifyEmail}
          loading={loading}
          filterUsers={filterUsers.length > 0 ? filterUsers : students}
        />
      </div>
    </div>
  );
};

export default DashboardAdmin;
