import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const VideoBackground = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
      
      return () => {
        video.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true);
        });
      };
    }
  }, []);

  // Video fallback image
  const fallbackImageUrl = 'https://images.unsplash.com/photo-1677945451878-de79f98149c9';

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Fallback image while video loads or if video can't be played */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${fallbackImageUrl})`,
          opacity: isVideoLoaded ? 0 : 1
        }}
        animate={{ opacity: isVideoLoaded ? 0 : 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute object-cover w-full h-full"
        autoPlay
        muted
        loop
        playsInline
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
      >
        <source 
          src="https://static.videezy.com/system/resources/previews/000/042/994/original/rain-on-roof-slow-motion.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 z-10"></div>
    </div>
  );
};

export default VideoBackground;