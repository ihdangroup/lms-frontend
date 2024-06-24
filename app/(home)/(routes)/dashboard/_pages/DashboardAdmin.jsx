"use client";
import React from "react";
import Link from "next/link";
import { AuthContext } from "@/app/_context/AuthContext";
import { getUsers } from "@/app/_services";
import { getStudents } from "@/app/_services";
import { Verifikasi } from "@/app/_services/auth";
import TableUser from "../_components/TableUser";

const DashboardAdmin = () => {
  const { user } = React.useContext(AuthContext);
  const [students, setStudents] = React.useState([]);
  const [filterUsers, setFilterUsers] = React.useState([]);
  const [verify, setVerify] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const tampilSiswa = async () => {
    if (user?.role == "s-admin") {
      const data = await getUsers();
      setStudents(data);
    } else {
      const data = await getStudents();
      setStudents(data);
    }
    setLoading(false);
  };
  const verifyEmail = async (id) => {
    const resp = await Verifikasi(id);
    await tampilSiswa();
  };
  const handleSearch = (value) => {
    if (value) {
      const filterUser = students?.filter((student) =>
        student.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(value.toLowerCase().replace(/\s+/g, ""))
      );
      if (filterUser) setFilterUsers(filterUser);
    } else if (value == "") setFilterUsers(students);
  };

  React.useEffect(() => {
    tampilSiswa();
  }, [students]);
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
