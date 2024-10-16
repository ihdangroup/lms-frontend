"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { getCourseList, getCoursePreview } from "../_services";
import { memberCourse } from "../_services";
import { editKursus } from "../_services";
import { addCourse } from "../_services";
import { uploadFile } from "../_services";
import { generateUniqueFileName } from "../_services";
export const KursusContext = React.createContext({});
export const KursusContextProvider = ({ children }) => {
  const [courses, setCourses] = React.useState([]);
  const [thisCourse, setthisCourse] = React.useState([]);
  const [coursesOrg, setCoursesOrg] = React.useState([]);
  const [listStudents, setlistStudents] = React.useState([]);
  const [loadingCourse, setLoadingCourse] = React.useState(true);
  const [loadingAddCourse, setLoadingAddCourse] = React.useState(false);
  const getCourses = async () => {
    const res = await getCourseList();
    setLoadingCourse(false);
    setCourses(res);
    setCoursesOrg(res);
  };
  const getDetailCourse = async (courseId) => {
    const res = await getCoursePreview(courseId);
    setthisCourse(res[0]);
  };
  const ubahKolomKursus = (e) => {
    const { name, value } = e.target;
    setthisCourse((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const getstudents = async () => {
    const res = await memberCourse();
    setlistStudents(res);
  };
  React.useEffect(() => {
    getCourses();
    getstudents();
  }, []);
  const filterCourse = (category) => {
    if (category == 0) {
      setCourses(coursesOrg);
      return;
    }
    console.log(coursesOrg);
    console.log(category);
    const filteredList = coursesOrg.filter((course) => course.tag == category);
    setCourses(filteredList);
  };
  const [file, setFile] = React.useState({ file: "", nameFile: "" });
  const router = useRouter();
  const [kursusBaru, setKursusBaru] = React.useState({
    name: "",
    description: "",
    image: "",
    tag: "",
  });

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setKursusBaru((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    setLoadingAddCourse(true);
    const res = await addCourse(kursusBaru);
    if (file.file) {
      await uploadFile(file);
    }
    setKursusBaru({
      name: "",
      description: "",
      image: "",
      tag: "",
    });
    setLoadingAddCourse(false);
    await getCourses();
    if (res) {
      router.push("/browse");
    }
  };
  const editCourse = async (e, value) => {
    e.preventDefault();
    const res = await editKursus(value);
    if (file.file) {
      await uploadFile(file);
    }
    setKursusBaru({
      name: "",
      description: "",
      image: "",
      total_chapter: "",
      tag: "",
    });
    if (res) {
      router.push("/browse");
      await getCourses();
    }
  };

  const handleImage = (e) => {
    const uniqueFileName = generateUniqueFileName(e.target.files?.[0]);
    setFile({ file: e.target.files?.[0], nameFile: uniqueFileName });
    setKursusBaru((prevData) => ({
      ...prevData,
      image: uniqueFileName,
    }));
    console.log(file.nameFile) 
  };
  const handleImageedit = (e) => {
    const uniqueFileName = generateUniqueFileName(e.target.files?.[0]);
    setFile({ file: e.target.files?.[0], nameFile: uniqueFileName });
    setthisCourse((prevData) => ({
      ...prevData,
      image: uniqueFileName,
    }));
    console.log(file.nameFile) 
  };
  return (
    <KursusContext.Provider
      value={{
        loadingAddCourse,
        kursusBaru,
        listStudents,
        handleAddCourse,
        handleCourseChange,
        editCourse,
        handleImage,
        getDetailCourse,
        ubahKolomKursus,
        courses,
        thisCourse,
        filterCourse,
        handleImageedit,
        getCourses,
        loadingCourse,
      }}
    >
      {children}
    </KursusContext.Provider>
  );
};
