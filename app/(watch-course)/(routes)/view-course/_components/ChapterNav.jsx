"use client";
import { CompletedChapterContext } from "@/app/_context/CompletedChapterContext";
import Link from "next/link";
import React from "react";

const ChapterNav = ({ course, setChapter
 }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { completedChapter, setCompletedChapter } = React.useContext(
    CompletedChapterContext
  );
  const isCompletedChapter = (chapterId) => {
    return completedChapter?.find((item) => item.video_id == chapterId);
  };
  return (
    <div className="m-4">
      <div className="p-4 bg-purple-600 mb-2 shadow-xl rounded-lg">
        <Link href="/browse" className="font-bold py-2 text-white">
          Kembali ke home
        </Link>
      </div>
      <div>
        {course?.map((chapter, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setChapter(chapter);
            }}
            className={`flex items-center p-4 rounded cursor-pointer ${
              activeIndex === index
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-100"
            }`}
          >
            {activeIndex === index ? (
              <img src="/icons/PauseIcon.svg" className="w-4 h-4" />
            ) : isCompletedChapter(chapter?.video_id) ? (
              <img src="/icons/check.svg" className="w-4 h-4" />
            ) : (
              <img src="/icons/play.svg" className="w-4 h-4" />
            )}
            <p className="ml-2 text-sm">{chapter.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterNav;
