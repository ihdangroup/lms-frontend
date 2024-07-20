"use client";
import { AuthContextProvider } from "@/app/_context/AuthContext";
import { ChapterContextProvider } from "@/app/_context/ChapterContext";
import { KursusContextProvider } from "@/app/_context/KursusContext";
import { UserContextProvider } from "@/app/_context/UserContext";
import React from "react";
import Header from "../_components/Header";
import SidebarNav from "../_components/SidebarNav";

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
        <AuthContextProvider>
          <UserContextProvider>
            <KursusContextProvider>
              <ChapterContextProvider>
                <div className="p-4">{children}</div>
              </ChapterContextProvider>
            </KursusContextProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </div>
    </AuthContextProvider>
  );
};

export default homeLayout;
