"use client";
import { AuthContextProvider } from "@/app/_context/AuthContext";
import React from "react";
import TopNav from "../_components/TopNav";
import SidebarNav from "../_components/SidebarNav";
import MainPage from "./MainPage";

const homeLayout = ({ children }) => {
  const [slide, setSlide] = React.useState(false);
  return (
    <AuthContextProvider>
      {/* <div
        className={`h-full bg-[#f7f7fa] md:flex flex-col shadow-md border w-64 fixed inset-y-0 z-50 ${
          slide ? "" : "hidden"
        }`}
        a
      >
        <SidebarNav slide={slide} setSlide={setSlide} />
      </div> */}
      <TopNav slide={slide} setSlide={setSlide} />
      <div className="min-h-screen px-10 lg:px-24 bg-[#f7f7fa] py-20">
        <MainPage children={children} />
      </div>
    </AuthContextProvider>
  );
};

export default homeLayout;
