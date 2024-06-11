"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import Search from "../icons/Search";

const Header = ({ slide, setSlide }) => {
  const router = useRouter();
  const { user, logoutUser } = React.useContext(AuthContext);
  const [logout, setLogout] = React.useState(false);

  return (
    <div className="p-5 border-b flex items-center justify-between bg-white shadow-md">
      <div className="flex items-center">
        <div className="flex items-center bg-gray-100 p-2 rounded-lg">
          <input
            type="text"
            placeholder="Search Course"
            className="bg-gray-100 border-none outline-none w-full"
          />
          <Search className="text-gray-500 ml-2" />
        </div>
      </div>
      <div className="flex items-center">
        {!user?.email ? (
          <button
            onClick={() => router.push("/login")}
            className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold ml-4 hover:bg-purple-700 transition-colors"
          >
            Login
          </button>
        ) : (
          <div className="relative">
            <button
              onClick={() => setLogout(!logout)}
              className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold ml-4 hover:bg-purple-700 transition-colors"
            >
              {user?.name}
            </button>
            {logout && (
              <button
                onClick={logoutUser}
                className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md px-4 py-2 text-sm shadow-lg hover:bg-gray-100 transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        )}
        <div
          onClick={() => setSlide(!slide)}
          className="flex md:hidden ml-4 w-6 h-5 flex-col justify-between cursor-pointer"
        >
          <span className="h-[2px] w-full bg-purple-600"></span>
          <span className="h-[2px] w-full bg-purple-600"></span>
          <span className="h-[2px] w-full bg-purple-600"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
