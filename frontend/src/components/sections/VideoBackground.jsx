import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const VideoBackground = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  // Fallback image URL
  const fallbackImageUrl = 'https://images.unsplash.com/photo-1677945451878-de79f98149c9';

  // We'll use this in case the video background fails for any reason
  const backgroundStyle = {
    backgroundImage: `url(${fallbackImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Fallback image always visible as a background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={backgroundStyle}
        initial={{ opacity: 1 }}
      />
      
      {/* Gradient Overlay - always present regardless of video */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 z-10"></div>
    </div>
  );
};

export default VideoBackground;