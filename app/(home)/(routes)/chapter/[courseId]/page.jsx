"use client";
import { ChapterContext } from "@/app/_context/ChapterContext";
import Link from "next/link";
import React from "react";
import TabelChapter from "./_components/TabelChapter";

const ChapterPageAdmin = ({ params }) => {
  const { courseId } = params;
  const { getChapters } = React.useContext(ChapterContext);
  React.useEffect(() => {
    getChapters(courseId);
  }, [courseId]);
  return (
    <div>
      <Link
        className="bg-purple-600 text-white p-2 rounded border-none"
        href={`/tambah-chapter/${courseId}`}
      >
        Tambah Chapter
      </Link>
      <TabelChapter courseId={courseId} />
    </div>
  );
};

export default ChapterPageAdmin;
