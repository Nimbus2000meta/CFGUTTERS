import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone, FiChevronDown, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
    setCloseTimeout(timeout);
  };

  const services = [
    { name: 'Professional Gutter Cleaning', href: '/Gutter-Cleaning' },
    { name: 'Gutter Installation', href: '/Gutter-Installation' },
    { name: 'Gutter Guard Installation', href: '/Gutter-Guard-Installation' },
    { name: 'Gutter and Downspout Repairs', href: '/Gutter-Downspout-Repairs' },
    { name: 'Roof Cleaning & Moss Treatment', href: '/Roof-Cleaning-Moss-Treatment' },
    { name: 'Soft Wash Roof Cleaning', href: '/Soft-Wash-Roof-Cleaning' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Combined White Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          {/* Top Info Bar - Desktop */}
          <div className="hidden lg:flex justify-between items-center py-2 border-b border-gray-200 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+18458793864" className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors">
                <FiPhone className="text-primary-600" size={16} />
                <span className="font-semibold">+1 (845) 879-3864</span>
              </a>
              <a href="mailto:cfgutters02@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors">
                <FiMail className="text-primary-600" size={16} />
                <span>cfgutters02@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="/#service-area" className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors">
                <FiMapPin className="text-primary-600" size={16} />
                <span>Mahopac NY to Westport CT</span>
              </a>
              <div className="flex items-center gap-2 text-gray-700">
                <FiClock className="text-primary-600" size={16} />
                <span>Mon-Sat 8 AM - 6 PM</span>
              </div>
            </div>
          </div>

          {/* Top Info Bar - Mobile */}
          <div className="lg:hidden flex justify-center items-center py-1.5 border-b border-gray-200 text-[10px] gap-2">
            <a href="tel:+18458793864" className="text-gray-600 hover:text-primary-600">
              (845) 879-3864
            </a>
            <span className="text-gray-300">|</span>
            <a href="mailto:cfgutters02@gmail.com" className="text-gray-600 hover:text-primary-600 truncate max-w-[130px]">
              cfgutters02@gmail.com
            </a>
            <span className="text-gray-300">|</span>
            <a href="/#service-area" className="text-gray-600 hover:text-primary-600">
              Mahopac - Westport
            </a>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="/images3/cf-gutters-logo.jpg" 
                alt="CF Gutters Logo"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-gray-200 shadow-lg"
              />
              <div className="text-gray-900">
                <div className="font-bold text-lg md:text-xl">CF GUTTERS</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Home
              </Link>
              <a href="/#about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                About
              </a>
              <Link 
                to="/contact-us" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Contact
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-gray-700 hover:text-primary-600 transition-colors font-medium flex items-center gap-1">
                  Services
                  <FiChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/gallery" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Gallery
              </Link>
              <a href="/#faq" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                FAQs
              </a>
              <a href="/#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                Testimonials
              </a>
            </nav>

            {/* CTA Button - Desktop */}
            <a 
              href="tel:+18458793864" 
              className="hidden lg:flex bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-semibold transition-colors text-sm"
            >
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 p-2"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 py-4">
              <div className="space-y-1">
                <Link 
                  to="/" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Home
                </Link>
                <a 
                  href="/#about" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <Link 
                  to="/contact-us" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors flex items-center justify-between"
                  >
                    Services
                    <FiChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  to="/gallery" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
                <a 
                  href="/#faq" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  FAQs
                </a>
                <a 
                  href="/#testimonials" 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonials
                </a>
                
                {/* Mobile Contact Info */}
                <div className="px-4 py-3 border-t border-gray-200 mt-2 pt-4 space-y-2">
                  <a href="tel:+18458793864" className="flex items-center gap-2 text-gray-700">
                    <FiPhone className="text-primary-600" size={16} />
                    <span>+1 (845) 879-3864</span>
                  </a>
                  <a href="mailto:cfgutters02@gmail.com" className="flex items-center gap-2 text-gray-700">
                    <FiMail className="text-primary-600" size={16} />
                    <span>cfgutters02@gmail.com</span>
                  </a>
                  <a href="/#service-area" className="flex items-center gap-2 text-gray-700" onClick={() => setIsOpen(false)}>
                    <FiMapPin className="text-primary-600" size={16} />
                    <span>Mahopac NY to Westport CT</span>
                  </a>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiClock className="text-primary-600" size={16} />
                    <span>Mon-Sat 8 AM - 6 PM</span>
                  </div>
                </div>
                
                {/* Mobile Phone Button */}
                <a 
                  href="tel:+18458793864" 
                  className="block mx-4 mt-4 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-full font-semibold text-center transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
