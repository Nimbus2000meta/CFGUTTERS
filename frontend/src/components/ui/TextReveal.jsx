import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextReveal = ({ 
  children, 
  className = '', 
  type = 'paragraph', 
  delay = 0,
  duration = 0.5, 
  once = true,
  staggerChildren = 0.05
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variants for Container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
        duration: duration,
      }
    }
  };

  // Variants for paragraph text
  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration
      }
    }
  };

  // Variants for letters (used in headlines)
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration * 0.7
      }
    }
  };

  // Helper function to process text content
  const processTextContent = (text) => {
    if (!text || typeof text !== 'string') return [];
    
    const words = text.split(' ');
    
    return words.map((word, wordIndex) => {
      const letters = word.split('');
      
      return (
        <span key={wordIndex} className="inline-block mr-2" style={{ overflow: 'visible' }}>
          {letters.map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      );
    });
  };

  // For headlines, handle text content with letter animations
  if (type === 'headline') {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {React.Children.map(children, (child, index) => {
          // If child is a string, process it for letter animation
          if (typeof child === 'string') {
            return processTextContent(child);
          }
          
          // If child is a React element (like styled spans), just return it
          return (
            <motion.span
              key={index}
              variants={paragraphVariants}
              className="inline-block"
            >
              {child}
            </motion.span>
          );
        })}
      </motion.div>
    );
  }

  // For paragraphs, just animate the whole text
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div variants={paragraphVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TextReveal;
