import React, { useEffect, useRef } from 'react';
import './video.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Video({ activeVideo, playPause }) {
  const videoRefs = useRef([]);

  useEffect(() => {
    activeVideo.forEach((videoData, index) => {
      const videoElement = videoRefs.current[index];
      if (videoElement) {
        if (playPause) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      }
    });
  }, [activeVideo, playPause]);

  return (
    <>
      <div className="bg-video-list">
        {activeVideo.map((videoData, index) => (
          <video
            key={videoData.id}
            ref={el => videoRefs.current[index] = el}
            className={`bg-video ${videoData.file} ${videoData.active ? 'active' : undefined}`}
            src={require(`../videos/${videoData.file}`)}           
            loop
            muted
          />
          ))}
      </div>
      <div className="bg-img-list">
        {activeVideo.map((videoData, index) => (
          <img 
          src={require(`../images/cars/${videoData.image}`)}
          className={`bg-img ${videoData.file} ${videoData.active ? 'active' : undefined}`}           
          />    
          ))}
      </div>
    </>
  );
}

export default Video;
