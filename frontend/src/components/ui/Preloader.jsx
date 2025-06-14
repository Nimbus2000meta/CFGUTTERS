import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDroplet } from 'react-icons/fi';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress in increments
    let currentProgress = 0;
    
    // Use a more controlled increment approach
    const simulateLoading = () => {
      const increment = 8 + Math.random() * 12; // Random increment between 8-20%
      
      currentProgress += increment;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        
        // Complete loading after reaching 100%
        setTimeout(() => {
          setIsComplete(true);
          
          // Call the callback after animation completes
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 800);
        }, 300);
      } else {
        setProgress(currentProgress);
        
        // Speed up loading
        const nextTimeout = currentProgress > 70 ? 200 : 100;
        setTimeout(simulateLoading, nextTimeout);
      }
    };
    
    // Start the loading simulation
    const initialDelay = setTimeout(simulateLoading, 200);
    
    return () => clearTimeout(initialDelay);
  }, [onLoadingComplete]);

  // Animation variants
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: { 
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const barVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.3,
        duration: 0.5
      }
    }
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: (customProgress) => ({ 
      width: `${customProgress}%`,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        delay: 0.5,
        duration: 0.5
      }
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-primary-600 z-[9999] flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="initial"
          exit="exit"
          data-testid="preloader"
        >
          <motion.div
            className="mb-10 text-white"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="relative flex items-center justify-center">
              <div className="text-5xl font-bold">
                CF<span className="text-secondary-300">Gutters</span>
              </div>
              <motion.div
                className="absolute -top-5 -right-4 text-secondary-300"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <FiDroplet size={24} />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-4"
            variants={barVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="h-full bg-white rounded-full"
              variants={progressVariants}
              initial="initial"
              animate="animate"
              custom={progress}
            />
          </motion.div>
          
          <motion.div
            className="text-white/70 text-sm font-medium"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            {Math.round(progress)}% Loading...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;