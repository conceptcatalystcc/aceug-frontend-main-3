import React from "react";

const Video = () => {
  return (
    <div>
      <div>
        <iframe
          src="https://player.vimeo.com/video/784071232?h=9ed1213940&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="persentage  par 1.mp4"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default Video;
