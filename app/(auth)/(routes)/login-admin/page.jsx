"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import { CompletedChapterContext } from "@/app/_context/CompletedChapterContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const LoginAdmin = () => {
  const {
    user,
    loginData,
    handleLoginChange,
    handleLoginSubmit,
    messageError,
  } = useContext(AuthContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const redirectPage = () => {
    if (user) {
      router.push("/statistic");
    }
  };
  React.useEffect(() => {
    user ? redirectPage() : null;
  }, [user]);
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form
          onSubmit={handleLoginSubmit}
          className="bg-white border-2 border-gray-300 w-[30%] shadow-md rounded px-8 pt-6 pb-8 mb-4 w-64"
        >
          {messageError ? (
            <div className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight">
              {messageError}
            </div>
          ) : null}
          <div className="flex justify-center">
            <img src="/logo.png" width={120} height={120} alt="" />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex mb-6">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className=" px-4 py-2 bg-gray-200 rounded-r"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-slate-600 w-full hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
