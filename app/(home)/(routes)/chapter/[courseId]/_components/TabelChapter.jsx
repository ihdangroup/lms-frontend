"use client";
import { deleteChapter } from "@/app/_services";
import React from "react";

const TabelChapter = ({ chapters, loading }) => {
  const handleDelete = async (e, id) => {
    console.log(id);
    e.preventDefault();
    if (confirm("anda yakin ingin menghapusnya?")) {
      const res = await deleteChapter(id);
      res
        ? alert("chapter berhasil terhapus")
        : alert("chapter gagal terhapus");
    } else {
      alert("tidak jadi terhapus");
    }
  };
  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto my-4">
        <table className="table-auto min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Video</th>
              <th className="px-4 py-2">Video ID</th>
              <th className="px-4 py-2">YouTube URL</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr className="animate-pulse">
                <td colSpan="6" className="p-4"></td>
              </tr>
            ) : (
              chapters?.map((chapter, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{chapter.name}</td>
                  <td className="border px-4 py-2">{chapter.video}</td>
                  <td className="border px-4 py-2">{chapter.video_id}</td>
                  <td className="border px-4 py-2">
                    <a
                      href={`https://www.youtube.com/watch?v=${chapter.youtube_url}`}
                      className="text-blue-500 hover:underline"
                    >
                      {chapter.youtube_url}
                    </a>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={(e) => handleDelete(e, chapter.video_id)}
                    >
                      Delete
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelChapter;
