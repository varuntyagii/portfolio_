import React, { useState } from 'react';

const Video = () => {
const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    
      <div className="h-full w-full">

         {!videoLoaded && (
      <img
        // src="/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        alt=""
        
      />
    )}

      <video
        className="h-full w-full object-cover"
        src='https://res.cloudinary.com/dgxnwlg0w/video/upload/v1783316322/video_fe5448853889_nws4oq.mp4'
        // src="https://res.cloudinary.com/dgxnwlg0w/video/upload/v1783924001/e5608a1f_k4rvk2.mp4"
        autoPlay
        muted
        loop
        playsInline
        // preload="auto"
        preload="metadata"
       onCanPlay={() => setVideoLoaded(true)}
      />
    </div>
   
  );
};

export default Video;