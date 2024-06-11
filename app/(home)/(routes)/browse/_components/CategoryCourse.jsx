import React from "react";

const CategoryCourse = ({ selectedCategory }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const courses = [
    {
      id: 0,
      name: "Semua Course",
      value: "all",
    },
    {
      id: 1,
      name: "Teknik komputer dan Jaringan",
      value: "tkj",
    },
    {
      id: 2,
      name: "Rekayasa Perangkat Lunak",
      value: "rpl",
    },
    {
      id: 3,
      name: "Multimedia",
      value: "multimedia",
    },
  ];
  return (
    <div className="flex">
      {courses.map((course, index) => (
        <button
          onClick={() => {
            setActiveIndex(index);
            selectedCategory(course.id);
          }}
          className={`p-2 border mr-3 text-sm border-purple-600 text-purple-600 rounded ${
            activeIndex == index ? "bg-purple-400 text-white" : null
          }`}
          key={index}
        >
          {course.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryCourse;
