"use client";
import { createContext } from "react";
import { generateUniqueFileName } from "@/app/_services";
import { addChapter } from "@/app/_services";
import { uploadFile } from "@/app/_services";
import React from "react";
import { useRouter } from "next/navigation";
import { editChapter } from "../_services";

export const ChapterContext = createContext({});
export const ChapterContextProvider = ({ children }) => {
  const [file, setFile] = React.useState({ file: "", nameFile: "" });
  const [courseIdContext, setCourseIdContext] = React.useState(0);
  const router = useRouter();
  const [chapterBaru, setChapterBaru] = React.useState({
    course_id: 0,
    name: "",
    video: "",
    youtube_url: "",
  });
  const changeCourseId = (value) => {
    setChapterBaru({ ...chapterBaru, course_id: parseInt(value) });
  };
  const handleChapterChange = (e) => {
    const { name, value } = e.target;
    setChapterBaru((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddChapter = async (e) => {
    e.preventDefault();
    const res = await addChapter(chapterBaru);
    uploadFile(file);
    res ? router.push("/chapter/" + chapterBaru.course_id) : null;
    setChapterBaru({
      course_id: 0,
      name: "",
      video: "",
      youtube_url: "",
    });
  };
  const editChapterCourse = async (e, value) => {
    e.preventDefault();
    const res = await editChapter(value);
    res ? router.push("/chapter/" + value.course_id) : null;
    setChapterBaru({
      course_id: 0,
      name: "",
      video: "",
      youtube_url: "",
    });
  };

  const handleFile = (e) => {
    const uniqueFileName = generateUniqueFileName(e.target.files?.[0]);
    setFile({ file: e.target.files?.[0], nameFile: uniqueFileName });
    setChapterBaru({ ...chapterBaru, video: uniqueFileName });
  };
  return (
    <ChapterContext.Provider
      value={{
        file,
        chapterBaru,
        handleChapterChange,
        handleAddChapter,
        handleFile,
        setCourseIdContext,
        courseIdContext,
        changeCourseId,
        editChapterCourse,
      }}
    >
      {children}
    </ChapterContext.Provider>
  );
};
