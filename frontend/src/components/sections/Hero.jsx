import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiChevronRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1677945451878-de79f98149c9')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/70"></div>
      
      {/* Content Container */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-white mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Protect Your Home With <span className="text-accent-orange">Professional</span> Gutter Solutions
          </motion.h1>
          
          <motion.p 
            className="text-white/90 text-lg md:text-xl mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            CFGutters provides expert gutter installation, repair, and maintenance services. 
            Safeguard your property from water damage with our premium solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500}
            >
              <motion.button 
                className="btn btn-accent w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Quote
              </motion.button>
            </Link>
            
            <Link 
              to="services" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500}
            >
              <motion.button 
                className="btn w-full sm:w-auto bg-white bg-opacity-20 backdrop-blur-sm text-white hover:bg-opacity-30 flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services <FiChevronRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center items-start p-1">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;