"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Register = () => {
  const { user, registerData, handleRegisterChange, handleRegisterSubmit } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const redirectPage = () => {
    if (user) {
      router.push("/browse");
    }
  };
  React.useEffect(() => {
    user ? redirectPage() : null;
  }, [user]);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <form
        onSubmit={handleRegisterSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-64"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={registerData.name}
            onChange={handleRegisterChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={registerData.email}
            onChange={handleRegisterChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex mb-6">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={registerData.password}
            onChange={handleRegisterChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className=" px-4 py-2 bg-gray-200 rounded-r"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="mb-4">
          <select
            name="role"
            value={registerData.role}
            onChange={handleRegisterChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
