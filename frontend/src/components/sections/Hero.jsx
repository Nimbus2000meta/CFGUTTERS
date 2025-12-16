import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-28 pb-10"
    >
      {/* Background Image with Maximum Clarity */}
      <div className="absolute inset-0">
        <img 
          src="/hero-roof-high-res.png" 
          alt="Roof and Gutter Background"
          className="w-full h-full object-cover"
          style={{
            imageRendering: 'high-quality',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
        />
      </div>
      
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
            <span className="text-cyan-300">Gutter Services</span>{' '}
            <span className="text-white">–</span>{' '}
            <span className="text-cyan-300">CF Gutters</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="font-semibold text-white">Protect Your Home with Expert Gutter Installation & Cleaning</span>
            <br /><br />
            Your <strong>gutters</strong> play a critical role in protecting your home from water damage, foundation issues, and exterior wear. Over time, gutters can become clogged, damaged, or inefficient—leading to costly problems if not properly maintained.
            <br /><br />
            At CF Gutters, we specialize in professional <strong>gutter installation</strong>, <strong>gutter cleaning</strong>, and <strong>gutter guard systems</strong>, ensuring your home stays protected year-round. We also provide <strong>gutter and downspout repairs</strong> to address leaks, sagging, or drainage issues.
            <br /><br />
            In addition, we offer <strong>roof soft washing</strong> as an optional service to safely remove algae and buildup without damaging your roofing materials.
            <br /><br />
            With quality workmanship, reliable service, and attention to detail, CF Gutters is your trusted choice for protecting your home.
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