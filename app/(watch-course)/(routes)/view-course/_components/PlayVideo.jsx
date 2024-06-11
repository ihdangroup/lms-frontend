"use client";
import { AuthContext } from "@/app/_context/AuthContext";
import { CompletedChapterContext } from "@/app/_context/CompletedChapterContext";
import { EnrollCourse } from "@/app/_services";
import { updateChapterCompleted } from "@/app/_services";
import React from "react";
import YouTube from "react-youtube";

const PlayVideo = ({
  userCourse,
  activeChapter,
  loadingChapter,
  setLoadingChapter,
}) => {
  const { user } = React.useContext(AuthContext);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const { completedChapter, setCompletedChapter } = React.useContext(
    CompletedChapterContext
  );
  const isCompletedChapter = (chapterId) => {
    return completedChapter?.find((item) => item.video_id == chapterId);
  };
  const markChapterCompleted = async () => {
    if (!completedChapter?.length) {
      setCompletedChapter([]);
    }
    completedChapter
      ? setCompletedChapter([
          ...completedChapter,
          { video_id: activeChapter?.video_id },
        ])
      : setCompletedChapter([{ video_id: activeChapter?.video_id }]);
    await EnrollCourse(
      activeChapter.course_id,
      user?.id,
      activeChapter?.video_id
    );
  };
  return (
    <div>
      <div className="flex flex-col items-center py-10 w-full justify-center">
        <h1 className="mb-4 text-2xl font-semibold border border-b-2 border-0 py-2 border-purple-600">
          {activeChapter?.name}
        </h1>
        {loadingChapter ? (
          <div className="animate-pulse w-[640px] h-[390px] p-6 bg-fuchsia-300"></div>
        ) : (
          <div className="p-4 shadow-lg">
            <YouTube
              videoId={`${activeChapter.youtube_url}`}
              className="rounded-lg"
              opts={opts}
            />
          </div>
        )}
        {!isCompletedChapter(activeChapter?.video_id) ? (
          <button
            onClick={() => markChapterCompleted()}
            className="bg-purple-600 text-white mt-4 py-2 w-1/2 rounded"
          >
            Selesaikan
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PlayVideo;
