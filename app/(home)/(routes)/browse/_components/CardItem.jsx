"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import { getCourseList } from "@/app/_services";
import { hapusCourse } from "@/app/_services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardItem = ({ course, progress }) => {
  const { user } = React.useContext(AuthContext);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (confirm("Anda yakin ingin menghapusnya")) {
      await hapusCourse(course?.id);
      alert("Course berhasil dihapus");
    } else {
      alert("course batal dihapus");
    }
  };

  return (
    <div className="rounded-lg shadow-xl mb-6 p-4 bg-white">
      <Image
        src={`/images/${course?.image}`}
        alt="file image is wrong"
        width={1000}
        height={500}
        className="rounded-t-md"
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold">{course?.name}</h1>
        <p className="text-sm my-2 text-purple-600">
          {course?.total_chapter} Chapter
        </p>
        {progress ? (
          <div className="flex items-center mb-4">
            {progress === course.total_chapter ? (
              <p className="p-1 bg-green-500 rounded text-white text-xs">
                Course Completed
              </p>
            ) : (
              <>
                <p className="text-xs mr-2">Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{
                      width: `${(progress / course.total_chapter) * 100}%`,
                    }}
                  ></div>
                </div>
              </>
            )}
          </div>
        ) : null}
        {!user ? null : user?.role !== "user" ? (
          <div className="flex flex-wrap">
            <Link href={`/detil-kursus/${course?.id}`} passHref>
              <span className="text-xs text-white bg-green-600 px-2 py-1 rounded-md hover:bg-green-700">
                Lihat Siswa
              </span>
            </Link>
            <Link href={`/chapter/${course?.id}`} passHref>
              <span className="text-xs ml-2 text-white bg-purple-600 px-2 py-1 rounded-md hover:bg-purple-700">
                Lihat Chapter
              </span>
            </Link>
            <button
              onClick={handleDelete}
              className="text-xs text-white mt-2 bg-red-600 px-2 py-1 rounded-md hover:bg-red-700"
            >
              Hapus Course
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardItem;
