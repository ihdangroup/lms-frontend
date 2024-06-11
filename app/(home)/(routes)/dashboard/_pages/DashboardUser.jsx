"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import { getCourseUser } from "@/app/_services";
import React from "react";
import CardItem from "../../browse/_components/CardItem";

const DashboardUser = () => {
  const { user } = React.useContext(AuthContext);
  const [courses, setCourses] = React.useState([]);
  const [allCourses, setAllCourses] = React.useState([]);
  let courseList = [];
  const fetchCourseUser = async () => {
    const res = await getCourseUser(user?.id);
    setAllCourses(res);
    const listCourse = res?.filter((course) => course?.completed_video == null);
    courseList = listCourse?.map((course) => course?.course[0]);
    console.log(listCourse);
    setCourses(courseList);
  };
  const getProgress = (id) =>
    allCourses?.filter(
      (course) => course.course_id == id && course.completed_video != null
    );
  React.useEffect(() => {
    fetchCourseUser();
  }, []);
  return (
    <div>
      <span className=" py-2 text-purple-600 font-semibold border border-0 border-b-2 border-purple-600">
        Dashboard User
      </span>
      <div className="w-full mt-7 flex flex-wrap">
        {courses.length > 0 ? (
          courses?.map((course, index) => {
            const progress = getProgress(course.id).length;
            return (
              <div className="w-full lg:w-[24%]" key={index}>
                <CardItem course={course} progress={progress} />
              </div>
            );
          })
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default DashboardUser;
