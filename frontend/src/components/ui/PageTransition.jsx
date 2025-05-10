import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './Preloader';
import Cursor from './Cursor';

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle completion of preloader
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Cursor />
      <Preloader onLoadingComplete={handleLoadingComplete} />
      
      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;