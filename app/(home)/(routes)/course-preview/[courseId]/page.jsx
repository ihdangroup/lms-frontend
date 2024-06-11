"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import { getUserCourse } from "@/app/_services";
import { getCoursePreview } from "@/app/_services";
import React from "react";
import CourseDetil from "./_components/CourseDetil";
import EnrollmentSection from "./_components/EnrollmentSection";
import OptionSection from "./_components/OptionSection";
import VideoPlayer from "./_components/VideoPlayer";

const CoursePreview = ({ params }) => {
  const [courseDetil, setCourseDetil] = React.useState([]);
  const [userCourse, setUserCourse] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { user } = React.useContext(AuthContext);
  const getCourseDetil = async () => {
    const resp = await getCoursePreview(params?.courseId);
    setCourseDetil(resp[0]);
    setLoading(false);
  };
  const getCourseUser = async () => {
    const userCourse = await getUserCourse(params?.courseId, user?.id);
    setUserCourse(userCourse?.data[0]);
  };
  React.useEffect(() => {
    getCourseDetil();
    user?.email ? getCourseUser() : null;
  }, [user]);
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      <div className="w-full md:w-2/3">
        {loading ? (
          <div className="animate-pulse">
            <div className="p-6 border">
              <div className="h-[350px] bg-fuchsia-300"></div>
            </div>
            <div className="p-6 mt-4 border">
              <div className="w-full h-[20px] my-2 bg-gray-200"></div>
              <div className="w-full m-4 h-[20px] my-2 bg-gray-200"></div>
            </div>
          </div>
        ) : (
          <CourseDetil courseDetil={courseDetil} />
        )}
      </div>
      <div className="w-full mt-2 md:mt-0 md:w-1/3 mx-0 md:mx-4">
        <EnrollmentSection
          courseDetil={courseDetil}
          loading={loading}
          userCourse={userCourse}
        />
      </div>
    </div>
  );
};

export default CoursePreview;
