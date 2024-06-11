"use client";
import { generateUniqueFileName } from "@/app/_services";
import { addChapter } from "@/app/_services";
import { uploadFile } from "@/app/_services";
import { addCourse } from "@/app/_services";
import { useRouter } from "next/navigation";
import React from "react";
const FormTambahChapter = ({ params }) => {
  const router = useRouter();
  const { courseId } = params;
  const [file, setFile] = React.useState({ file: "", nameFile: "" });
  const [chapterBaru, setChapterBaru] = React.useState({
    course_id: parseInt(courseId),
    name: "",
    video: "",
    youtube_url: "",
  });
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
    res ? router.push("/chapter/" + courseId) : null;
  };

  const handleFile = (e) => {
    const uniqueFileName = generateUniqueFileName(e.target.files?.[0]);
    setFile({ file: e.target.files?.[0], nameFile: uniqueFileName });
    setChapterBaru({ ...chapterBaru, video: uniqueFileName });
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Tambah Chapter Baru
      </h2>
      <form
        onSubmit={handleAddChapter}
        className="max-w-md mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nama Chapter
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Masukkan Nama Chapter"
            value={chapterBaru.name}
            onChange={handleChapterChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="youtube_url"
            className="block text-gray-700 font-bold mb-2"
          >
            URL YouTube
          </label>
          <input
            type="text"
            name="youtube_url"
            id="youtube_url"
            placeholder="Masukkan URL Video YouTube"
            value={chapterBaru.youtube_url}
            onChange={handleChapterChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="video_file"
            className="block text-gray-700 font-bold mb-2"
          >
            Video Chapter
          </label>
          <input
            type="file"
            name="video_file"
            id="video_file"
            accept="video/*"
            required
            onChange={handleFile}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Tambah Chapter
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormTambahChapter;
