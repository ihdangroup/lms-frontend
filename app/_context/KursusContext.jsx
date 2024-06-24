"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { getCourseList } from "../_services";
import { editKursus } from "../_services";
import { addCourse } from "../_services";
import { uploadFile } from "../_services";
import { generateUniqueFileName } from "../_services";
export const KursusContext = React.createContext({});
export const KursusContextProvider = ({ children }) => {
  const [courses, setCourses] = React.useState([]);
  const [coursesOrg, setCoursesOrg] = React.useState([]);
  const [loadingCourse, setLoadingCourse] = React.useState(true);
  const getCourses = async () => {
    const res = await getCourseList();
    setLoadingCourse(false);
    setCourses(res);
    setCoursesOrg(res);
  };
  React.useEffect(() => {
    getCourses();
  }, []);
  const filterCourse = (category) => {
    if (category == 0) {
      setCourses(coursesOrg);
      return;
    }
    const filteredList = coursesOrg.filter((course) => course.tag == category);
    setCourses(filteredList);
  };
  const [file, setFile] = React.useState({ file: "", nameFile: "" });
  const router = useRouter();
  const [kursusBaru, setKursusBaru] = React.useState({
    name: "",
    description: "",
    image: "",
    total_chapter: "",
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
    const res = await addCourse(kursusBaru);
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
    }
  };
  const editCourse = async (e, value) => {
    e.preventDefault();
    const res = await editKursus(value);
    setKursusBaru({
      name: "",
      description: "",
      image: "",
      total_chapter: "",
      tag: "",
    });
    if (res) {
      router.push("/browse");
    }
  };

  const handleImage = (e) => {
    const uniqueFileName = generateUniqueFileName(e.target.files?.[0]);
    setFile({ file: e.target.files?.[0], nameFile: uniqueFileName });
    setKursusBaru((prevData) => ({
      ...prevData,
      image: uniqueFileName,
    }));
  };
  return (
    <KursusContext.Provider
      value={{
        kursusBaru,
        handleAddCourse,
        handleCourseChange,
        editCourse,
        handleImage,
        courses,
        filterCourse,
        getCourses,
        loadingCourse,
      }}
    >
      {children}
    </KursusContext.Provider>
  );
};
