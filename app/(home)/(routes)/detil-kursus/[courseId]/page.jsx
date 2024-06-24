"use client";
import { studentsCourse } from "@/app/_services";
import React from "react";
const DetilKursus = ({ params }) => {
  const [students, setStudents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [listUsers, setListUsers] = React.useState([]);
  const getStudentCourse = async () => {
    const resp = await studentsCourse(params?.courseId);
    const listStudents = resp?.filter((list) => list.completed_video == null);
    setListUsers(resp);
    setStudents(listStudents);
    setLoading(false);
  };
  const isCompleted = (idUser) => {
    return listUsers?.filter(
      (student) => student.user_id == idUser && student.completed_video !== null
    );
  };
  React.useEffect(() => {
    params ? getStudentCourse() : null;
  }, [params]);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Daftar Siswa dalam Kursus Ini</h1>
      <div>
        {loading ? (
          <div className="animate-pulse">
            <div className="h-16 w-full bg-gray-200 my-2 rounded"></div>
            <div className="h-16 w-full bg-gray-200 my-2 rounded"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {students.length > 0 ? (
              students.map((student, index) => {
                const completedChapters = isCompleted(student?.user_id).length;
                return (
                  <div
                    key={index}
                    className="bg-white shadow rounded-lg p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                      <p className="font-semibold">
                        {student?.student[0].name}
                      </p>
                    </div>
                    <p className="text-sm bg-purple-600 text-white rounded px-2">
                      {completedChapters} Bab Selesai
                    </p>
                  </div>
                );
              })
            ) : (
              <p>kursus ini belum memiliki siswa</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default DetilKursus;
