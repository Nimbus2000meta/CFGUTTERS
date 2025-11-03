import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 pb-10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Top Contact Bar */}
        <motion.div 
          className="max-w-6xl mx-auto mb-8 flex flex-wrap justify-center gap-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold">📞 +1 (845) 879-3864</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️ cfgutters02@gmail.com</span>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.p
            className="text-primary-400 font-semibold mb-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Mahopac NY to Westport CT
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-white">Professional</span>{' '}
            <span className="text-primary-400">Gutter & Roof</span>{' '}
            <span className="text-white">Cleaning Services –</span>{' '}
            <span className="text-primary-400">CF Gutters</span>
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
            <a 
              href="#contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>

        {/* Business Hours */}
        <motion.div
          className="max-w-2xl mx-auto text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <p className="text-lg font-semibold mb-2">Business Hours:</p>
          <p className="text-gray-300">Monday-Saturday 8 AM to 6 PM</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;