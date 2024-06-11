import React from "react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="border border-2 rounded p-2 mb-2">
      <h2 className="text-gray-400 mb-3`">Course Preview</h2>
      <video
        width="1000"
        height="250"
        controls
        controlsList="nodownload"
        src={videoUrl}
      ></video>
    </div>
  );
};

export default VideoPlayer;
