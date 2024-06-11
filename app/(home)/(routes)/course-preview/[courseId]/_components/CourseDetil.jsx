import Image from "next/image";
import React from "react";

const CourseDetil = ({ courseDetil }) => {
  return (
    <div className="container mx-auto">
      <div className="border-2 border-gray-400 p-4 rounded-lg shadow-lg">
        <img
          className="w-full rounded-t-lg"
          src={"/images/" + courseDetil.image}
          alt={courseDetil.image}
        />
        <div className="p-4">
          <h1 className="text-2xl text-purple-600 font-bold mb-2">
            {courseDetil.name}
          </h1>
          <span className="text-sm text-purple-600 border border-purple-600 px-2 py-1 rounded">
            {courseDetil.totalChapters} Bab
          </span>
          <p className="mt-2 text-gray-800">{courseDetil.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetil;
