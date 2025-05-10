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
    e.stopPropagation();
    
    // Using requestAnimationFrame for smoother scrolling
    const scrollToTopAnimated = () => {
      const position = window.pageYOffset;
      if (position > 0) {
        window.scrollTo(0, position - Math.max(position / 8, 20));
        window.requestAnimationFrame(scrollToTopAnimated);
      }
    };
    
    window.requestAnimationFrame(scrollToTopAnimated);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
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
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 bg-primary-500 text-white p-4 rounded-full shadow-lg z-[9999]"
          onClick={scrollToTop}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          whileTap="tap"
          aria-label="Scroll to top"
          style={{ pointerEvents: 'auto' }}
          data-testid="scroll-to-top-button"
        >
          <FiArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;