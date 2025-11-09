import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-10"
    >
      {/* Background Image with Enhanced Clarity */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/hero-roof-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'contrast(1.1) brightness(1.05)',
          imageRendering: '-webkit-optimize-contrast'
        }}
      ></div>
      
      {/* Dark Overlay for Professional Faded Look */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/65"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-white">Professional</span>{' '}
            <span className="text-cyan-300">Gutter & Roof</span>{' '}
            <span className="text-white">Cleaning Services –</span>{' '}
            <span className="text-cyan-300">CF Gutters</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="font-semibold text-white">Protect Your Home with Expert Gutter Cleaning</span>
            <br /><br />
            Your <strong>roof</strong> and <strong>gutters</strong> are essential in protecting your home from water damage and structural issues. Over time, they accumulate moss, algae, debris, and dirt which can lead to costly repairs if left unchecked. At CF Gutters we specialize in professional roof cleaning, <strong>gutter maintenance</strong>, <strong>Gutter Repair</strong>, <strong>Gutter Guard Installation</strong> and Soft washing services to keep your home in excellent condition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Link 
              to="/contact-us"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;