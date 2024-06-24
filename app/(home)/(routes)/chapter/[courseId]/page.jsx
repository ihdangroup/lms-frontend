"use client";
import { getCourseChapter } from "@/app/_services";
import Link from "next/link";
import React from "react";
import TabelChapter from "./_components/TabelChapter";

const ChapterPageAdmin = ({ params }) => {
  const { courseId } = params;
  const [chapters, setChapters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const getChapters = async () => {
    const res = await getCourseChapter(courseId);
    setLoading(false);
    setChapters(res);
  };
  React.useEffect(() => {
    getChapters();
  }, []);
  return (
    <div>
      <Link
        className="bg-purple-600 text-white p-2 rounded border-none"
        href={`/tambah-chapter/${courseId}`}
      >
        Tambah Chapter
      </Link>
      <TabelChapter
        chapters={chapters}
        loading={loading}
        refresh={getChapters}
      />
    </div>
  );
};

export default ChapterPageAdmin;
