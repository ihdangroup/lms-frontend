"use client";
import { ChapterContext } from "@/app/_context/ChapterContext";
import { deleteChapter } from "@/app/_services";
import Link from "next/link";
import React from "react";

const TabelChapter = ({ courseId }) => {
  const { chapters, loading, getChapters } = React.useContext(ChapterContext);
  const handleDelete = async (e, id) => {
    console.log(id);
    e.preventDefault();
    if (confirm("anda yakin ingin menghapusnya?")) {
      const res = await deleteChapter(id);
      if (res) {
        alert("berhasil terhapus");
        getChapters(courseId);
      } else {
        alert("batal dihapus");
      }
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                      </svg>
                    </button>
                    <Link href={`/edit-chapter/${chapter.video_id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                          />
                        </svg>
                      </button>
                    </Link>
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
