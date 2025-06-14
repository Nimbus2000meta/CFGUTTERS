import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiChevronRight } from 'react-icons/fi';
import TextReveal from '../ui/TextReveal';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white rounded-full opacity-30"></div>
      </div>
      
      {/* Content Container */}
      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <TextReveal 
              type="headline" 
              className="text-white mb-4 drop-shadow-lg"
            >
              Professional <span className="text-secondary-300">Gutter & Roof</span> Cleaning Services
            </TextReveal>
            
            <TextReveal 
              className="text-white/90 text-lg md:text-xl mb-8 drop-shadow-md"
              delay={0.2}
            >
              Protect Your Home with Expert Gutter Cleaning. Your roof and gutters are essential in protecting your home from water damage and structural issues. At CF Gutters we specialize in professional cleaning and maintenance services.
            </TextReveal>
            
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
                  className="btn btn-secondary w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="hero-cta-button"
                >
                  Request a Quote
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
                  className="btn w-full sm:w-auto glass-effect text-white hover:bg-white/30 flex items-center justify-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="hero-services-button"
                >
                  Our Services <FiChevronRight />
                </motion.button>
              </Link>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div 
              className="mt-12 flex flex-wrap items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg flex items-center">
                <svg className="w-6 h-6 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-sm">Licensed & Insured</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg flex items-center">
                <svg className="w-6 h-6 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm">10+ Years Experience</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm">Budget-Friendly Rates</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Featured Logo */}
          <div className="hidden lg:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <img
                src="/cf-gutters-logo.png"
                alt="CF Gutters Logo"
                className="w-80 h-80 object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
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