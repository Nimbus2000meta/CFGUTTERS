import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Professional Gutter Cleaning',
    'Gutter Guard Installation', 
    'Gutter & Downspout Repairs',
    'Basic Roof Cleaning & Moss Treatment',
    'Complete Soft Wash Roof Cleaning',
    'Emergency Gutter Service'
  ];

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Service Area', to: 'service-area' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'FAQ', to: 'faq' },
    { name: 'Contact', to: 'contact' }
  ];

  const serviceAreas = [
    'Mahopac NY',
    'Kent CT', 
    'Warren CT',
    'Westport CT',
    'Carmel NY',
    'Brewster NY'
  ];

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                {/* Outer circle border - White */}
                <circle 
                  cx="100" 
                  cy="100" 
                  r="95" 
                  stroke="white" 
                  strokeWidth="8" 
                  fill="#1e40af"
                />
                
                {/* Inner circle border - White */}
                <circle 
                  cx="100" 
                  cy="100" 
                  r="85" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="#1e40af"
                />
                
                {/* Main house/roof structure - White */}
                <path 
                  d="M30 110 L60 75 L90 75 L140 75 L170 110 L165 120 L35 120 Z" 
                  fill="white"
                />
                
                {/* Roof peak triangle - White */}
                <path 
                  d="M70 75 L100 45 L130 75 L125 72 L100 52 L75 72 Z" 
                  fill="white"
                />
                
                {/* Inner roof detail - Light Blue */}
                <path 
                  d="M80 75 L100 58 L120 75 L115 73 L100 63 L85 73 Z" 
                  fill="#93c5fd"
                />
                
                {/* Gutter system - White */}
                <rect x="30" y="110" width="140" height="8" fill="white"/>
                
                {/* Water flow lines - White */}
                <path d="M35 125 L50 125" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M55 128 L70 128" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M75 131 L90 131" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M110 128 L125 128" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M130 131 L145 131" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M150 125 L165 125" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                
                {/* Downspout - White */}
                <rect x="167" y="110" width="6" height="25" fill="white"/>
                <rect x="165" y="133" width="10" height="4" fill="white"/>
                
                {/* CF text inside circle - White */}
                <text x="100" y="155" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">CF</text>
              </svg>
              <h3 className="text-2xl font-bold">CF Gutters</h3>
            </div>
              <p className="text-primary-200 mb-4">
                Professional gutter and roof cleaning services. With over 10 years of experience, 
                we provide top-notch services that protect your home year-round.
              </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiPhone className="text-secondary-400" />
                <a href="tel:+18458793864" className="hover:text-secondary-400 transition-colors">
                  (845) 879-3864
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-secondary-400" />
                <a href="mailto:cfgutters02@gmail.com" className="hover:text-secondary-400 transition-colors">
                  cfgutters02@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="text-secondary-400" />
                <span>Mahopac NY to Westport CT</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiClock className="text-secondary-400" />
                <span>Monday-Saturday 8 AM to 6 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Get Started</h4>
            <div className="space-y-4">
              <p className="text-primary-200 text-sm mb-4">
                Ready for professional gutter cleaning? Contact us today for a free quote!
              </p>
              <a
                href="tel:+18458793864"
                className="btn btn-secondary w-full flex items-center justify-center gap-2"
              >
                <FiPhone />
                Call Now
              </a>
              <a
                href="mailto:cfgutters02@gmail.com"
                className="btn btn-outline-white w-full flex items-center justify-center gap-2"
              >
                <FiMail />
                Email Us
              </a>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <a
                href="https://www.facebook.com/profile.php?id=61567485513010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-primary-800 rounded-lg hover:bg-secondary-500 transition-colors"
              >
                <FiFacebook />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-200 text-sm">
              Copyright {currentYear} © All rights Reserved. CF Gutters
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;