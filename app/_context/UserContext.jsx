import React from "react";
import { deleteUser, getStudents } from "../_services";
import { getUsers } from "../_services";
import { Verifikasi } from "../_services/auth";
export const UserContext = React.createContext({});
export const UserContextProvider = ({ children }) => {
  const [students, setStudents] = React.useState([]);
  const [filterUsers, setFilterUsers] = React.useState([]);
  const [verify, setVerify] = React.useState(false);
  const [userAcount, setUserAcount] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const tampilSiswa = async () => {
    if (userAcount?.role == "s-admin") {
      const data = await getUsers();
      setStudents(data);
    } else {
      const data = await getStudents();
      setStudents(data);
    }
    setLoading(false);
  };
  const verifyEmail = async (id) => {
    await Verifikasi(id);
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
  const hapusUser = async (e, user_id) => {
    e.preventDefault();
    if (confirm("Anda yakin ingin menghapusnya")) {
      await deleteUser(user_id);
      alert("User berhasil dihapus");
      await tampilSiswa();
    } else {
      alert("User batal dihapus");
    }
  };

  React.useEffect(() => {
    tampilSiswa();
  }, [students]);
  return (
    <UserContext.Provider
      value={{
        setUserAcount,
        filterUsers,
        handleSearch,
        verifyEmail,
        students,
        loading,
        hapusUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
