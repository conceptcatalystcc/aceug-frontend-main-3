import React from "react";

const Video = ({ video }) => {
  return (
    <div>
      <video src={video.url} controls />
      <p>{video.alt_text}</p>
    </div>
  );
};

export default Video;
