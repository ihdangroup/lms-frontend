import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardItem from "./CardItem";
import SkeletonCard from "./SkeletonCard";

const CourseList = ({ courses, loadingCourse }) => {
  return (
    <div className="flex flex-wrap mt-4">
      {loadingCourse ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        courses.map((course) => (
          <Link
            href={`/course-preview/${course.id}`}
            className="w-full lg:w-[24%]"
            key={course.id}
          >
            <CardItem course={course} />
          </Link>
        ))
      )}
    </div>
  );
};

export default CourseList;
