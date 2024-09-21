"use client";
import { learningDetails } from "./utils";
import NavList from "./_components/NavList";
import React from "react";

const { default: Navbar } = require("@/app/components/Navbar");

const LearningPath = () => {
  const [detailLearning, setDetailLearning] = React.useState([]);
  const [tag, setTag] = React.useState("tkj");
  const navlist = [
    {
      name: "Teknik Komputer dan Jaringan",
      tag: "tkj",
    },
    {
      name: "Rekayasa Perangkat Lunak",
      tag: "rpl",
    },
    {
      name: "Multimedia",
      tag: "mul",
    },
  ];
  const learningList = (tag) => {
    const learningCourse = learningDetails?.filter(
      (learning) => learning.tag == tag
    );
    setDetailLearning(learningCourse);
  };
  React.useEffect(() => {
    learningList(tag);
  }, [tag]);
  return (
    <main>
      <Navbar />
      <NavList navlist={navlist} handleList={(tag) => learningList(tag)} />
      <section
        id="header"
        className="flex justify-center items-center text-center py-16"
      >
        <div className="w-[50%]">
          {detailLearning?.map((learning) => (
            <>
              <h2 className="text-2xl font-bold ">{learning.title}</h2>
              <p className="text-base my-6">{learning.description}</p>
            </>
          ))}
        </div>
      </section>
    </main>
  );
};
export default LearningPath;
