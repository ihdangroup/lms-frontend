"use client";
import { KursusContext } from "@/app/_context/KursusContext";
import { getCoursePreview } from "@/app/_services";
import React from "react";
const FormEditKursus = ({ params }) => {
  const { courseId } = params;
  const { ubahKolomKursus, getDetailCourse, thisCourse, handleImageedit, editCourse } = React.useContext(KursusContext);
  
  React.useEffect(() => {
    getDetailCourse(courseId);
  }, [courseId]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Form Edit Kursus</h2>
      <form
        onSubmit={(e) => editCourse(e, thisCourse)}
        className="bg-white shadow-md rounded-lg w-full md:w-1/2  px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={thisCourse.name}
            onChange={ubahKolomKursus}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={thisCourse.description}
            onChange={ubahKolomKursus}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tag"
          >
            Category
          </label>
          <select
            name="tag"
            value={thisCourse.tag}
            onChange={ubahKolomKursus}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Category</option>
            <option value="1">Teknik Komputer dan Jaringan</option>
            <option value="2">Rekayasa Perangkat Lunak</option>
            <option value="3">Multimedia</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file"
          >
            Course Image
          </label>
          <input
            type="file"
            name="file"
            onChange={handleImageedit}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormEditKursus;
