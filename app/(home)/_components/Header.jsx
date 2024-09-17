"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const Header = ({ slide, setSlide }) => {
  const router = useRouter();
  const { user } = React.useContext(AuthContext);

  return (
    <div className="p-5 border-b flex items-center justify-between bg-white shadow-md">
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
              className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold ml-4 hover:bg-purple-700 transition-colors"
            >
              {user?.name}
            </button>
            
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
