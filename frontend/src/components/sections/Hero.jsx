import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiChevronRight } from 'react-icons/fi';
import TextReveal from '../ui/TextReveal';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-20 pb-10"
    >
      
      {/* Content Container */}
      <div className="container-custom relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 px-4 lg:px-0">
            <TextReveal 
              type="headline" 
              className="text-white mb-4 drop-shadow-lg text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight"
            >
              Professional Gutter & Roof Cleaning Services
            </TextReveal>
            
            <TextReveal 
              className="text-white/90 text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 drop-shadow-md leading-relaxed"
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
              className="mt-12 grid grid-cols-2 md:flex md:flex-wrap items-center gap-4 md:gap-6"
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
              <div className="bg-white/10 backdrop-blur-sm py-2 px-4 rounded-lg flex items-center">
                <svg className="w-6 h-6 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-sm">Free Estimates</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right Content - Professional Gutter Cleaning Image */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-4 lg:mx-0">
              <img 
                src="/images/house-ladder.jpg" 
                alt="Professional gutter cleaning and maintenance services"
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 text-white">
                <h3 className="text-lg lg:text-xl font-bold mb-2">Professional Service</h3>
                <p className="text-white/90 text-sm lg:text-base">Expert gutter cleaning & maintenance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;