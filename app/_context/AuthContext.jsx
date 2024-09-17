"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RegisterUser } from "../_services/auth";
import { LoginUser } from "../_services/auth";
export const AuthContext = React.createContext({});
export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  // State untuk login
  const [user, setUser] = React.useState(null);
  const [messageError, setMessageError] = React.useState(null);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // State untuk register
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [registerDataUser, setRegisterDataUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  // Handler untuk perubahan data login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler untuk perubahan data register
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleRegisterUserChange = (e) => {
    const { name, value } = e.target;
    setRegisterDataUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler untuk submit login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Lakukan validasi atau kirim data login ke server
    if (loginData.email !== "" || loginData.password !== "") {
      const resp = await LoginUser(loginData);
      if (resp.bug) {
        setMessageError(resp.bug);
      } else {
        setUser(resp);
        const userJSON = JSON.stringify(resp);
        localStorage.setItem("user", userJSON);
      }
    } else {
      console.log("mohon isi email & password dahulu");
    }
    setLoginData({
      email: "",
      password: "",
    });
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/");
  };

  // Handler untuk submit register
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (
      registerData.email !== "" ||
      registerData.password !== "" ||
      registerData.name !== ""
    ) {
      await RegisterUser(registerData);
      router.push("/login");
      console.log(registerData);
    } else {
      console.log("mohon isi email & password dahulu");
    }
    setRegisterData({
      name: "",
      email: "",
      password: "",
      role: "",
    });
  };
  const handleRegisterUserSubmit = async (e) => {
    e.preventDefault();
    if (
      registerDataUser.email !== "" ||
      registerDataUser.password !== "" ||
      registerDataUser.name !== ""
    ) {
      await RegisterUser(registerDataUser);
      router.push("/login");
      console.log(registerDataUser);
    } else {
      console.log("mohon isi email & password dahulu");
    }
    setRegisterDataUser({
      name: "",
      email: "",
      password: "",
      role: "",
    });
  };

  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parseUser = JSON.parse(storedUser);
      setUser(parseUser);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        messageError,
        user,
        setUser,
        loginData,
        registerData,
        logoutUser,
        handleLoginChange,
        handleRegisterChange,
        handleLoginSubmit,
        handleRegisterSubmit,
        handleRegisterUserSubmit,
        handleRegisterUserChange,
        registerDataUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
