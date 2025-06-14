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
    <div className={`flex items-center ${className}`}>
      {/* CF Gutters Logo SVG - Smaller size to fit header */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3 flex-shrink-0"
      >
        {/* Outer circle border - Blue */}
        <circle 
          cx="100" 
          cy="100" 
          r="90" 
          stroke="#1e40af" 
          strokeWidth="6" 
          fill="white"
        />
        
        {/* Inner circle border - Blue */}
        <circle 
          cx="100" 
          cy="100" 
          r="82" 
          stroke="#1e40af" 
          strokeWidth="1" 
          fill="white"
        />
        
        {/* Main house/roof structure - Blue */}
        <path 
          d="M35 115 L65 80 L90 80 L140 80 L165 115 L160 125 L40 125 Z" 
          fill="#1e40af"
        />
        
        {/* Roof peak triangle - Blue */}
        <path 
          d="M75 80 L100 50 L125 80 L120 77 L100 58 L80 77 Z" 
          fill="#1e40af"
        />
        
        {/* Inner roof detail - Light Blue */}
        <path 
          d="M85 80 L100 65 L115 80 L110 78 L100 70 L90 78 Z" 
          fill="#93c5fd"
        />
        
        {/* Gutter system - Blue */}
        <rect x="35" y="115" width="130" height="6" fill="#1e40af"/>
        
        {/* Water flow lines - Blue */}
        <path d="M40 130 L50 130" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        <path d="M55 132 L65 132" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        <path d="M70 134 L80 134" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        <path d="M120 132 L130 132" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        <path d="M135 134 L145 134" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        <path d="M150 130 L160 130" stroke="#1e40af" strokeWidth="2" strokeLinecap="round"/>
        
        {/* Downspout - Blue */}
        <rect x="162" y="115" width="4" height="20" fill="#1e40af"/>
        <rect x="160" y="133" width="8" height="3" fill="#1e40af"/>
        
        {/* CF text inside circle */}
        <text x="100" y="155" textAnchor="middle" fill="#1e40af" fontSize="18" fontWeight="bold">CF</text>
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
        scrolled ? 'bg-primary-900 shadow-soft py-2' : 'bg-primary-900/95 backdrop-blur-sm py-3'
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