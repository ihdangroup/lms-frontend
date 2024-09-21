"use client";
import { createContext } from "react";
import { generateUniqueFileName, getCourseChapter } from "@/app/_services";
import { addChapter } from "@/app/_services";
import { uploadFile } from "@/app/_services";
import React from "react";
import { useRouter } from "next/navigation";
import { editChapter, getChapter } from "../_services";
import { getAllChapter } from "../_services";

export const ChapterContext = createContext({});
export const ChapterContextProvider = ({ children }) => {
  const [file, setFile] = React.useState({ file: "", nameFile: "" });
  const [allChapter, setAllChapter] = React.useState([]);
  const [chapters, setChapters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [courseIdContext, setCourseIdContext] = React.useState(0);
  const router = useRouter();
  const [chapterBaru, setChapterBaru] = React.useState({
    course_id: 0,
    name: "",
    video: null,
    image: null,
    text: null,
    youtube_url: "",
  });
  const [thisChapter, setThisChapter] = React.useState({
    course_id: 0,
    name: "",
    video: null,
    image: null,
    text: null,
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
    console.log(chapterBaru);
    const res = await addChapter(chapterBaru);
    uploadFile(file);
    res ? router.push("/chapter/" + chapterBaru.course_id) : null;
    setChapterBaru({
      course_id: 0,
      name: "",
      video: null,
      image: null,
      text: null,
      youtube_url: "",
    });
  };

  const getDetailChapter = async (chapterId) => {
    const res = await getChapter(chapterId);
    setThisChapter(res?.chapter[0]);
  };
  const editChapterChange = (e) => {
    const { name, value } = e.target;
    setThisChapter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const editChapterCourse = async (e, value) => {
    e.preventDefault();
    console.log(value);
    const res = await editChapter(value);
    uploadFile(file);
    res ? router.push("/chapter/" + value.course_id) : null;
    setChapterBaru({
      course_id: 0,
      name: "",
      video: null,
      image: null,
      text: null,
      youtube_url: "",
    });
  };

  const handleFile = (e, id, option) => {
    const uniqueFileName = generateUniqueFileName(e.target.files?.[0]);
    setFile({ file: e.target.files?.[0], nameFile: uniqueFileName });
    console.log(id);
    id
      ? option == "video"
        ? setThisChapter({ ...thisChapter, video: uniqueFileName })
        : setThisChapter({ ...thisChapter, image: uniqueFileName })
      : setChapterBaru({ ...chapterBaru, video: uniqueFileName });
  };
  const handleImage = (e) => {
    const uniqueFileName = generateUniqueFileName(e.target.files?.[0]);
    setFile({ file: e.target.files?.[0], nameFile: uniqueFileName });
    setChapterBaru({ ...chapterBaru, image: uniqueFileName });
  };

  const getChapters = async (courseId) => {
    const res = await getCourseChapter(courseId);
    setLoading(false);
    setChapters(res);
  };
  const showAllChapter = async () => {
    const { data } = await getAllChapter();
    setAllChapter(data);
  };
  React.useEffect(() => {
    showAllChapter();
  }, []);
  return (
    <ChapterContext.Provider
      value={{
        allChapter,
        thisChapter,
        getDetailChapter,
        editChapterChange,
        getChapters,
        chapters,
        loading,
        file,
        chapterBaru,
        handleChapterChange,
        handleAddChapter,
        handleFile,
        handleImage,
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
