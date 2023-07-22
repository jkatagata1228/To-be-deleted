"use client";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const video = document.getElementById("video");
    video.play();
  }, []);
  return (
    <div className="main-container">
      <video id="video" muted playsInline autoPlay loop>
        <source
          src="https://blz-contentstack-assets.akamaized.net/v3/assets/blt45749e0fed8aa592/bltc5b8157eb49daacd/6026220302ccfb4d0f671c37/dark-wanderer-bg-xl.webm"
          type="video/webm"
        />
      </video>
    </div>
  );
};

export default Home;
