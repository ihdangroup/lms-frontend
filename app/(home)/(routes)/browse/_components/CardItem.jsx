"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import { ChapterContext } from "@/app/_context/ChapterContext";
import { getCourseList } from "@/app/_services";
import { hapusCourse } from "@/app/_services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardItem = ({ course, progress, refresh, isAdmin }) => {
  const { user } = React.useContext(AuthContext);
  const { allChapter } = React.useContext(ChapterContext);
  const chapterLength = allChapter?.filter(
    (chapter) => chapter.course_id == course?.id
  );
  const handleDelete = async (e) => {
    e.preventDefault();
    if (confirm("Anda yakin ingin menghapusnya")) {
      await hapusCourse(course?.id);
      alert("Course berhasil dihapus");
      refresh();
    } else {
      alert("course batal dihapus");
    }
  };

  return (
    <div className="rounded-lg shadow-xl mx-2 mb-6 p-4 bg-white">
      <Image
        src={`/images/${course?.image}`}
        alt="file image is wrong"
        width={1000}
        height={500}
        className="rounded-t-md"
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold truncate">{course?.name}</h1>
        <p className="text-sm my-2 text-purple-600">
          {chapterLength.length}
          Chapter
        </p>
        {progress ? (
          <div className="flex items-center mb-4">
            {progress === chapterLength.length ? (
              <p className="p-1 bg-green-500 rounded text-white text-xs">
                Course Completed
              </p>
            ) : (
              <>
                <p className="text-sm mr-2">Progress</p>
                <div className="w-full bg-gray-200 rounded-full  h-2.5">
                  <div
                    className="bg-purple-600 mb-2 h-2.5 rounded-full"
                    style={{
                      width: `${(progress / chapterLength.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </>
            )}
          </div>
        ) : null}
        {!user ? null : user?.role !== "user" && !isAdmin ? (
          <div className="flex flex-wrap items-center">
            <Link href={`/detil-kursus/${course?.id}`} passHref>
              <button className="text-white bg-green-600 px-2 py-1 rounded-md hover:bg-green-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-lines-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                </svg>
              </button>
            </Link>
            <Link href={`/chapter/${course?.id}`} passHref>
              <button className="text-xs mx-2 text-white bg-purple-600 px-2 py-1 rounded-md hover:bg-purple-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-journals"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2" />
                  <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0" />
                </svg>
              </button>
            </Link>
            <Link href={`/kursus/${course.id}`} passHref>
              <button className="text-xs mr-2 text-white bg-blue-600 px-2 py-1 rounded-md hover:bg-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </button>
            </Link>

            <button
              onClick={handleDelete}
              className="text-xs text-white bg-red-600 px-2 py-1 rounded-md hover:bg-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardItem;
