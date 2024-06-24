"use client";
import { KursusContext } from "@/app/_context/KursusContext";
import React from "react";
import CategoryCourse from "./_components/CategoryCourse";
import CourseList from "./_components/CourseList";

const CourseMenuUser = () => {
  const { courses, getCourses, loadingCourse, filterCourse } =
    React.useContext(KursusContext);
  return (
    <div>
      <CategoryCourse selectedCategory={(category) => filterCourse(category)} />
      <CourseList
        courses={courses}
        refresh={getCourses}
        loadingCourse={loadingCourse}
      />
    </div>
  );
};
export default CourseMenuUser;
