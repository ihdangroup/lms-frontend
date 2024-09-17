"use client";
import { AuthContextProvider } from "@/app/_context/AuthContext";
import React from "react";
import Header from "../_components/Header";
import SidebarNav from "../_components/SidebarNav";
import MainPage from "./MainPage";

const homeLayout = ({ children }) => {
  const [slide, setSlide] = React.useState(false);
  return (
    <AuthContextProvider>
      <div
        className={`h-full bg-[#f7f7fa] md:flex flex-col shadow-md border w-64 fixed inset-y-0 z-50 ${
          slide ? "" : "hidden"
        }`}
      >
        <SidebarNav slide={slide} setSlide={setSlide} />
      </div>
      <div className="ml-0 md:ml-64 bg-[#f7f7fa]">
        <Header slide={slide} setSlide={setSlide} />
        <MainPage children={children} />
      </div>
    </AuthContextProvider>
  );
};

export default homeLayout;
