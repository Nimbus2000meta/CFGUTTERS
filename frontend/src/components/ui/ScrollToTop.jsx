import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top of the page by scrolling to Y position 0
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Always scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check initial visibility
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: { 
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.9 }
  };

  return (
    <>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 bg-primary-500 text-white p-4 rounded-full shadow-lg"
          onClick={scrollToTop}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          aria-label="Scroll to top"
          style={{ 
            zIndex: 9999,
            position: 'fixed',
            pointerEvents: 'auto'
          }}
          data-testid="scroll-to-top-button"
        >
          <FiArrowUp className="text-xl" />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;