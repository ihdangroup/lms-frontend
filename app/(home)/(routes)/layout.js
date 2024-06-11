"use client";
import { AuthContextProvider } from "@/app/_context/AuthContext";
import React from "react";
import Header from "../_components/Header";
import SidebarNav from "../_components/SidebarNav";

const homeLayout = ({ children }) => {
  const [slide, setSlide] = React.useState(false);
  return (
    <AuthContextProvider>
      <div
        className={`h-full bg-white md:flex flex-col shadow-md border w-64 fixed inset-y-0 z-50 ${
          slide ? "" : "hidden"
        }`}
      >
        <SidebarNav />
      </div>
      <div className="ml-0 md:ml-64">
        <Header slide={slide} setSlide={setSlide} />
        <AuthContextProvider>
          <div className="p-4">{children}</div>
        </AuthContextProvider>
      </div>
    </AuthContextProvider>
  );
};

export default homeLayout;
