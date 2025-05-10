import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const VideoBackground = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Handle video loaded event
      const handleLoaded = () => {
        setIsVideoLoaded(true);
        
        // For some browsers, need to explicitly start the video
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsVideoPlaying(true);
            })
            .catch(error => {
              console.log("Auto-play prevented:", error);
              // Video autoplay was prevented, use the fallback image instead
              setIsVideoLoaded(false);
            });
        }
      };
      
      video.addEventListener('loadeddata', handleLoaded);

      // Handle playing event
      const handlePlaying = () => {
        setIsVideoPlaying(true);
      };
      
      video.addEventListener('playing', handlePlaying);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoaded);
        video.removeEventListener('playing', handlePlaying);
      };
    }
  }, []);

  // Fallback image URL - use a high-quality image that matches the video content
  const fallbackImageUrl = 'https://images.unsplash.com/photo-1677945451878-de79f98149c9';

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Fallback image - always visible but opacity controlled */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${fallbackImageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: isVideoPlaying ? 0 : 1
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: isVideoPlaying ? 0 : 1 }}
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
        preload="auto"
        style={{ opacity: isVideoPlaying ? 1 : 0 }}
      >
        {/* Fall back to a locally hosted video file instead of external URL */}
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-rain-falling-on-the-water-4891-large.mp4" 
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