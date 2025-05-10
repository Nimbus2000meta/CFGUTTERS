import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight } from 'react-icons/fi';
import TextReveal from '../ui/TextReveal';

const CTAHorizontal = () => {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl shadow-xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallGrid)" />
            </svg>
          </div>
          
          {/* Animated Raindrops */}
          <motion.div
            className="absolute top-10 left-[10%] w-10 h-16 rounded-b-full bg-white/10"
            animate={{ y: [0, 20, 0] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute top-20 right-[15%] w-6 h-10 rounded-b-full bg-white/10"
            animate={{ y: [0, 15, 0] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          
          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <TextReveal type="headline" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready for Premium Gutter Solutions?
              </TextReveal>
              
              <TextReveal className="text-white/90 mb-6 md:mb-0">
                Take the next step toward protecting your home. Contact us today for a personalized quote and discover why homeowners choose CFGutters for quality and reliability.
              </TextReveal>
            </div>
            
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500}
            >
              <motion.button 
                className="btn bg-white text-primary-600 hover:text-primary-700 group flex items-center gap-2 px-8 py-4 text-lg shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get a Free Quote
                <motion.span
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FiArrowRight />
                </motion.span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAHorizontal;