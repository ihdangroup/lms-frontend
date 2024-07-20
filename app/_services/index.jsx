import axios from "axios";

const { default: request, gql } = require("graphql-request");

const MASTER_URL = `http://127.0.0.1:8000/`;

export const getCourseList = async () => {
  const { data } = await axios.get(MASTER_URL + "api/kursus");
  return data;
};
export const addCourse = async (newCourse) => {
  const { data } = await axios.post(MASTER_URL + "api/kursus", newCourse);
  return data;
};
export const editKursus = async (value) => {
  const courseId = parseInt(value?.id);
  const { data } = await axios.put(
    MASTER_URL + "api/kursus/" + courseId,
    value
  );
  return data;
};
export const hapusCourse = async (id) => {
  const { data } = await axios.delete(MASTER_URL + "api/kursus/" + id);
  return data;
};
export const getAllChapter = async () => {
  const { data } = await axios.get(MASTER_URL + "api/chapter");
  return data;
};
export const getChapter = async (id) => {
  const { data } = await axios.get(MASTER_URL + "api/chapter/" + id);
  return data;
};
export const addChapter = async (newCourse) => {
  const { data } = await axios.post(MASTER_URL + "api/chapter", newCourse);
  return data;
};
export const deleteChapter = async (id) => {
  const chapterId = parseInt(id);
  const { data } = await axios.delete(MASTER_URL + "api/chapter/" + chapterId);
  return data;
};
export const editChapter = async (value) => {
  //   const chapterId = parseInt(id);
  const { data } = await axios.put(
    MASTER_URL + "api/chapter/" + value.video_id,
    value
  );
  return data;
};
export const getCourseChapter = async (id) => {
  const { data } = await axios.get(MASTER_URL + "api/chapter-kursus/" + id);
  return data.chapter;
};

export const studentsCourse = async (id) => {
  const { data } = await axios.get(MASTER_URL + "api/detil-kursus/" + id);
  return data;
};
export const memberCourse = async (id) => {
  const { data } = await axios.get(MASTER_URL + "api/student-course");
  return data;
};

export const getCoursePreview = async (id) => {
  const { data } = await axios.get(MASTER_URL + "api/kursus/" + id);
  return data;
};
export const getCourseUser = async (id) => {
  const { data } = await axios.get(MASTER_URL + "api/user-course/" + id);
  return data;
};

export const EnrollCourse = async (courseId, userId, video_id) => {
  const result = await axios.post("http://127.0.0.1:8000/api/user-course", {
    course_id: courseId,
    user_id: userId,
    completed_video: video_id ? video_id : null,
  });
  return result;
};
export const getUserCourse = async (courseId, userId) => {
  const result = await axios.get(
    `http://127.0.0.1:8000/api/user-course/${userId}/${courseId}`
  );
  return result;
};
export const getStudents = async () => {
  const { data } = await axios.get(`http://127.0.0.1:8000/api/students`);
  return data?.students;
};
export const getUsers = async () => {
  const { data } = await axios.get(`${MASTER_URL}api/users`);
  const users = data?.students.filter((dt) => dt.role != "s-admin");
  return users;
};

export function generateUniqueFileName(file) {
  const timestamp = new Date().getTime(); // Menggunakan timestamp saat ini
  const randomString = Math.random().toString(36).substring(2, 8); // Menghasilkan string acak

  const fileExtension = file.name.split(".").pop(); // Mendapatkan ekstensi file

  return `${randomString}_${timestamp}.${fileExtension}`; // Menggabungkan string acak, timestamp, dan ekstensi file
}
export const uploadFile = async (file) => {
  if (!file.file) return;
  try {
    const data = new FormData();
    data.set("file", file.file, file.nameFile);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    if (!res.ok) throw new Error(await res.text());
  } catch (e) {
    console.error(e);
  }
};
