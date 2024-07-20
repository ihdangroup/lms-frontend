"use client";
import React from "react";
import { KursusContext } from "@/app/_context/KursusContext";
import { ChapterContext } from "@/app/_context/ChapterContext";
import BarChart from "./components/BarChart";
import { UserContext } from "@/app/_context/UserContext";
const Statistic = () => {
  const { courses, listStudents } = React.useContext(KursusContext);
  const { allChapter } = React.useContext(ChapterContext);
  const { students } = React.useContext(UserContext);
  const members = students?.filter((student) => student.role == "user");
  return (
    <div>
      <h1>Statistic Page</h1>
      <div className="flex flex-wrap mt-6">
        <div className="p-4 w-[400px] flex items-center ml-2 rounded bg-white">
          <div className="rounded p-2 bg-[#838a96]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              fill="currentColor"
              className="bi bi-bookmarks-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z" />
              <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-xl">Kursus</h3>
            <h4 className="text-xl">{courses.length}</h4>
          </div>
        </div>
        <div className="p-4 w-[400px] flex items-center ml-2 rounded bg-white">
          <div className="rounded p-2 bg-[#edf4ff]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77"
              height="77"
              fill="currentColor"
              className="bi bi-journals"
              viewBox="0 0 16 16"
            >
              <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2" />
              <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-xl">Chapter</h3>
            <h4 className="text-xl">{allChapter.length}</h4>
          </div>
        </div>
        <div className="p-4 w-[400px] flex ml-2 rounded items-center bg-white">
          <div className="rounded p-2 bg-[#edf4ff]">
            <img src="/icons/dash-students.svg" width="77" height="77" alt="" />
          </div>
          <div className="ml-3">
            <h3 className="text-xl">Students</h3>
            <h4 className="text-xl">{members.length}</h4>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-wrap">
        <div className="w-1/2">
          <BarChart students={listStudents} />
        </div>
      </div> */}
    </div>
  );
};
export default Statistic;
