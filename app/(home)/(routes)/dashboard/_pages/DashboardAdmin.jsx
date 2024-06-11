"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import { getUsers } from "@/app/_services";
import { getStudents } from "@/app/_services";
import { Verifikasi } from "@/app/_services/auth";
import React from "react";

const DashboardAdmin = () => {
  const { user } = React.useContext(AuthContext);
  const [students, setStudents] = React.useState([]);
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
  React.useEffect(() => {
    tampilSiswa();
  }, []);
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Daftar Mahasiswa</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Nama User</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Detail</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <>
                <tr className="animate-pulse">
                  <td colSpan="3" className="p-4 bg-gray-200"></td>
                </tr>
                <tr className="animate-pulse">
                  <td colSpan="3" className="p-4 bg-gray-200"></td>
                </tr>
              </>
            ) : (
              students?.map((student, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                >
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.role}</td>
                  <td className="border px-4 py-2 flex gap-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Detail
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Hapus
                    </button>
                    {!student.email_verified && (
                      <button
                        onClick={() => verifyEmail(student.id)}
                        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Verifikasi
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAdmin;
