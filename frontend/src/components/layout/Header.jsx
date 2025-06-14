import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'About', to: 'about' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'FAQ', to: 'faq' },
    { name: 'Contact', to: 'contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1 
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const CFGuttersLogo = ({ className = "" }) => (
    <div className={`flex items-center ${className} py-1`}>
      {/* CF Gutters Logo SVG - Compact size for header */}
      <svg
        width="35"
        height="35"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3 flex-shrink-0"
      >
        {/* Outer circle border - Blue */}
        <circle 
          cx="100" 
          cy="100" 
          r="88" 
          stroke="#1e40af" 
          strokeWidth="5" 
          fill="white"
        />
        
        {/* Inner circle border - Blue */}
        <circle 
          cx="100" 
          cy="100" 
          r="80" 
          stroke="#1e40af" 
          strokeWidth="1" 
          fill="white"
        />
        
        {/* Main house/roof structure - Blue */}
        <path 
          d="M40 118 L68 85 L90 85 L140 85 L160 118 L155 128 L45 128 Z" 
          fill="#1e40af"
        />
        
        {/* Roof peak triangle - Blue */}
        <path 
          d="M78 85 L100 55 L122 85 L118 82 L100 63 L82 82 Z" 
          fill="#1e40af"
        />
        
        {/* Inner roof detail - Light Blue */}
        <path 
          d="M88 85 L100 70 L112 85 L108 83 L100 75 L92 83 Z" 
          fill="#93c5fd"
        />
        
        {/* Gutter system - Blue */}
        <rect x="40" y="118" width="120" height="5" fill="#1e40af"/>
        
        {/* Water flow lines - Blue */}
        <path d="M45 133 L52 133" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        <path d="M57 135 L64 135" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        <path d="M69 137 L76 137" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        <path d="M124 135 L131 135" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        <path d="M136 137 L143 137" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        <path d="M148 133 L155 133" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        
        {/* Downspout - Blue */}
        <rect x="157" y="118" width="3" height="18" fill="#1e40af"/>
        <rect x="155" y="134" width="7" height="3" fill="#1e40af"/>
        
        {/* CF text inside circle */}
        <text x="100" y="158" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="bold">CF</text>
      </svg>
      <div className="flex flex-col">
        <span className="text-lg md:text-xl font-bold">CF GUTTERS</span>
        <span className="text-xs text-current opacity-75">Professional Cleaning</span>
      </div>
    </div>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-900 shadow-soft py-4' : 'bg-primary-900/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
            <CFGuttersLogo className="text-white hover:text-secondary-300 transition-colors" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex space-x-8 items-center"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="font-medium text-sm tracking-wide cursor-pointer transition-colors hover:text-secondary-300 text-white"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.a 
            href="tel:+18458793864" 
            variants={itemVariants}
            className="btn btn-secondary flex items-center gap-2"
          >
            <FiPhone /> (845) 879-3864
          </motion.a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-2xl p-2"
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          aria-label="Toggle menu"
          data-testid="mobile-menu-button"
        >
          {isOpen ? (
            <FiX className="text-2xl text-white" />
          ) : (
            <FiMenu className="text-2xl text-white" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-800"
            data-testid="mobile-menu"
          >
            <motion.div 
              className="container-custom py-5 flex flex-col space-y-4"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-white font-medium transition-colors hover:text-secondary-300"
                    data-testid={`mobile-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a 
                href="tel:+18458793864" 
                variants={itemVariants}
                className="btn btn-secondary w-full text-center flex items-center justify-center gap-2"
                data-testid="mobile-phone-button"
              >
                <FiPhone /> (845) 879-3864
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;