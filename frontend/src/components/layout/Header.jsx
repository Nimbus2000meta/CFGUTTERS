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
      {/* CF Gutters Logo - Simple and compact design */}
      <div className="mr-3 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center">
        <div className="text-center">
          <div className="text-blue-600 font-bold text-xs leading-none">CF</div>
          <div className="text-blue-600 text-[8px] leading-none">GUTTERS</div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg md:text-xl font-bold">CF GUTTERS</span>
        <span className="text-xs text-current opacity-75">Professional Cleaning</span>
      </div>
    </div>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue-900 shadow-lg py-4' : 'bg-blue-900/95 backdrop-blur-sm py-6'
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