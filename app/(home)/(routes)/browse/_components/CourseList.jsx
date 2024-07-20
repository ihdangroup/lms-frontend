"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import React from "react";
import Link from "next/link";
import CardItem from "./CardItem";
import SkeletonCard from "./SkeletonCard";

const CourseList = ({ courses, loadingCourse, refresh }) => {
  const { user } = React.useContext(AuthContext);
  return (
    <div className="flex flex-wrap mt-4">
      {loadingCourse ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : user?.role == "user" || !user?.role ? (
        courses.map((course) => (
          <Link
            href={`/course-preview/${course.id}`}
            className="w-full lg:w-[24%]"
            key={course.id}
          >
            <CardItem course={course} />
          </Link>
        ))
      ) : (
        <React.Fragment>
          <div className="w-full my-6">
            <Link
              href="/tambah-kursus"
              className="bg-purple-600 text-white px-8 py-2 rounded"
            >
              Tambah Kursus
            </Link>
          </div>
          {courses.map((course) => (
            <React.Fragment key={course.id}>
              <div className="w-full lg:w-[25%]">
                <CardItem refresh={refresh} course={course} />
              </div>
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default CourseList;
