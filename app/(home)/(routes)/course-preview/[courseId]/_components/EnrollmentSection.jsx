import { AuthContext } from "@/app/_context/AuthContext";
import { EnrollCourse } from "@/app/_services";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useContext } from "react";

const EnrollmentSection = ({ courseDetil, userCourse, loading }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const enrollCourse = async () => {
    if (!user?.role) {
      router.push("/login");
    } else {
      const resp = await EnrollCourse(courseDetil.id, user?.id);
      console.log(resp);
      router.push("/view-course/" + courseDetil.id);
    }
  };
  return (
    <>
      <div className="mx-1 my-2">
        <div className="border border-gray-300 p-4 rounded-lg text-center">
          <h2 className="text-lg font-semibold mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            repudiandae!
          </h2>
          {loading ? (
            <div className="animate-pulse h-8 w-full bg-gray-200 rounded"></div>
          ) : userCourse?.user_id ? (
            <button
              onClick={() => router.push("/view-course/" + courseDetil.id)}
              className="bg-purple-600 w-full py-2 rounded-md text-white font-semibold mt-4 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Lanjutkan Course
            </button>
          ) : (
            <button
              onClick={() => enrollCourse()}
              className="bg-purple-600 w-full py-2 rounded-md text-white font-semibold mt-4 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Mulai Course
            </button>
          )}
        </div>
        <div className="mt-6">
          <Link
            href="/browse"
            className="font-bold bg-blue-600 mt-6 w-full rounded-lg  p-2 text-white"
          >
            Kembali ke home
          </Link>
        </div>
      </div>
    </>
  );
};

export default EnrollmentSection;
