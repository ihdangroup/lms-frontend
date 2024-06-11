"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import { CompletedChapterContext } from "@/app/_context/CompletedChapterContext";
import { getUserCourse } from "@/app/_services";
import { getCourseChapter } from "@/app/_services";
import React from "react";
import ChapterNav from "../_components/ChapterNav";
import PlayVideo from "../_components/PlayVideo";

const CoursePage = ({ params }) => {
  const { user } = React.useContext(AuthContext);
  const [course, setCourse] = React.useState([]);
  const [userCourse, setUserCourse] = React.useState();
  const [activeChapter, setActiveChapter] = React.useState();
  const [loadingChapter, setLoadingChapter] = React.useState(true);
  const [completedChapter, setCompletedChapter] = React.useState([]);
  const getCourse = async () => {
    const allUserCourse = await getUserCourse(params?.courseId, user?.id);
    const resp = await getCourseChapter(params?.courseId);
    console.log(resp);
    setCourse(resp);
    setUserCourse(resp);
    setLoadingChapter(false);
    setActiveChapter(resp[0]);
    allUserCourse?.data?.map((completeVideo) => {
      if (completeVideo.completed_video)
        completedChapter.push({ video_id: completeVideo.completed_video });
    });
  };
  const setChapter = (chapter) => {
    setActiveChapter(chapter);
    setLoadingChapter(false);
  };
  React.useEffect(() => {
    user?.id ? getCourse() : null;
  }, [user]);
  return (
    <CompletedChapterContext.Provider
      value={{ completedChapter, setCompletedChapter }}
    >
      <div className="w-full flex">
        <div className="w-1/4 shadow-lg p-4 ">
          <ChapterNav
            course={course}
            userCourse={userCourse}
            setChapter={setChapter}
          />
        </div>
        <div className="w-3/4">
          <PlayVideo
            userCourse={userCourse}
            activeChapter={activeChapter}
            loadingChapter={loadingChapter}
            setLoadingChapter={setLoadingChapter}
          />
        </div>
      </div>
    </CompletedChapterContext.Provider>
  );
};

export default CoursePage;
