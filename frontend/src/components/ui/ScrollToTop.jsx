import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  // Show button only while scrolling and past 300px
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Hide button after 1.5 seconds of no scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
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
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
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