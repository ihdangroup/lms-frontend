"use client";
import CardItem from "../_components/CardItem";
import SkeletonCard from "../_components/SkeletonCard";
import { getCourseList } from "@/app/_services";
import Link from "next/link";
import React from "react";

const CourseMenuAdmin = () => {
  const [courses, setCourses] = React.useState([]);
  const [coursesOrg, setCoursesOrg] = React.useState([]);
  const [loadingCourse, setLoadingCourse] = React.useState(true);

  const getCourses = async () => {
    const res = await getCourseList();
    setLoadingCourse(false);
    setCourses(res);
    setCoursesOrg(res);
  };

  React.useEffect(() => {
    getCourses();
  }, []);

  const filterCourse = (category) => {
    if (category === "all") {
      setCourses(coursesOrg);
      return;
    }
    const filteredList = coursesOrg.filter((course) =>
      course.tag.includes(category)
    );
    setCourses(filteredList);
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-semibold">Course Management</h1>
        <Link href="/tambah-kursus">
          <span className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-purple-700 transition-colors">
            Tambah Kursus
          </span>
        </Link>
      </div>
      <div className="flex flex-wrap -mx-2">
        {loadingCourse ? (
          <>
            <div className="w-full lg:w-1/4 p-2">
              <SkeletonCard />
            </div>
            <div className="w-full lg:w-1/4 p-2">
              <SkeletonCard />
            </div>
            <div className="w-full lg:w-1/4 p-2">
              <SkeletonCard />
            </div>
            <div className="w-full lg:w-1/4 p-2">
              <SkeletonCard />
            </div>
          </>
        ) : (
          courses.map((course) => (
            <div className="w-full lg:w-1/4 p-2" key={course.id}>
              <CardItem course={course} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CourseMenuAdmin;
