"use client";
import { KursusContext } from "@/app/_context/KursusContext";
import React from "react";

const FormTambahKursus = () => {
  const {
    kursusBaru,
    handleCourseChange,
    loadingAddCourse,
    handleImage,
    handleAddCourse,
  } = React.useContext(KursusContext);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Form Tambah Kursus</h2>
      <form
        onSubmit={handleAddCourse}
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
            value={kursusBaru.name}
            onChange={handleCourseChange}
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
            value={kursusBaru.description}
            onChange={handleCourseChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="total_chapter"
          >
            Total Chapter
          </label>
          <input
            type="number"
            name="total_chapter"
            placeholder="Total Chapter"
            value={kursusBaru.total_chapter}
            onChange={handleCourseChange}
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
            value={kursusBaru.tag}
            onChange={handleCourseChange}
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
            onChange={handleImage}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          {!loadingAddCourse ? (
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Tambah Kursus
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default FormTambahKursus;
