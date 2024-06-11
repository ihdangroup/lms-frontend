"use client";
import { getCourseList } from "@/app/_services";
import React from "react";
const { default: CategoryCourse } = require("../_components/CategoryCourse");
const { default: CourseList } = require("../_components/CourseList");

const CourseMenuUser = () => {
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
    if (category == 0) {
      setCourses(coursesOrg);
      return;
    }
    const filteredList = coursesOrg.filter((course) => course.tag == category);
    setCourses(filteredList);
  };
  return (
    <div>
      <CategoryCourse selectedCategory={(category) => filterCourse(category)} />
      <CourseList courses={courses} loadingCourse={loadingCourse} />
    </div>
  );
};
export default CourseMenuUser;
