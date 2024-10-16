"use client";
import { ChapterContext } from "@/app/_context/ChapterContext";
import React from "react";
const FormEditChapter = ({ params }) => {
  const {
    editChapterCourse,
    editChapterChange,
    thisChapter,
    getDetailChapter,
    handleFile,
  } = React.useContext(ChapterContext);
  const { chapterId } = params;
  React.useEffect(() => {
    getDetailChapter(chapterId);
  }, [chapterId]);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Form Edit Chapter</h2>
      <form
        onSubmit={(e) => editChapterCourse(e, thisChapter)}
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
            value={thisChapter?.name}
            onChange={editChapterChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Isi Chapter
          </label>
          <textarea
            type="text"
            name="text"
            id="text"
            placeholder="Masukkan Konten Chapter"
            value={thisChapter?.text}
            onChange={editChapterChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
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
            value={thisChapter?.youtube_url}
            onChange={editChapterChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Gambar Chapter
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={(e) => handleFile(e, chapterId, "image")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {/* <p>{thisChapter?.video}</p> */}
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
            onChange={(e) => handleFile(e, chapterId, "video")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {/* <p>{thisChapter?.video}</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormEditChapter;
