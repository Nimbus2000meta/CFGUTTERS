import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = ({ className = '' }) => {
  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    },
  };

  const dropVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10,
        delay: 0.3
      }
    },
  };

  // Custom SVG raindrop
  const Raindrop = () => (
    <motion.svg
      variants={dropVariants}
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -top-3 -right-2"
    >
      <path
        d="M8 0C8 0 0 7.5 0 12.5C0 16.825 3.582 20 8 20C12.418 20 16 16.825 16 12.5C16 7.5 8 0 8 0Z"
        fill="currentColor"
      />
    </motion.svg>
  );

  return (
    <motion.div 
      className={`relative ${className}`}
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-baseline relative">
        <motion.span 
          className="text-xl md:text-2xl font-bold"
          variants={letterVariants}
        >
          C
        </motion.span>
        <motion.span 
          className="text-xl md:text-2xl font-bold"
          variants={letterVariants}
        >
          F
        </motion.span>
        <motion.span 
          className="text-xl md:text-2xl font-bold"
          variants={letterVariants}
        >
          G
        </motion.span>
        <motion.span 
          className="text-xl md:text-2xl font-bold text-accent-orange relative"
          variants={letterVariants}
        >
          Gutters
          <Raindrop />
        </motion.span>
      </div>
    </motion.div>
  );
};

export default AnimatedLogo;