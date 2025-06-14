import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info - Logo and Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <svg
                width="120"
                height="120"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-4"
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
                
                {/* CF GUTTERS text */}
                <text x="100" y="155" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">CF GUTTERS</text>
              </svg>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61567485513010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-200 hover:text-white transition-colors"
              >
                <FiFacebook className="text-xl" />
                <span>Facebook</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="https://www.instagram.com/cfgutters"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-200 hover:text-white transition-colors"
              >
                <FaInstagram className="text-xl" />
                <span>Instagram</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="https://www.tiktok.com/@cfgutters"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-200 hover:text-white transition-colors"
              >
                <FaTiktok className="text-xl" />
                <span>TikTok</span>
              </a>
            </div>
            
            <div className="text-sm text-primary-200">
              <p className="mb-2">Copyright {currentYear} © All rights Reserved. CF Gutters</p>
              <div className="flex items-center space-x-2">
                <FiMapPin className="text-secondary-400" />
                <span>Mahopac NY to Westport CT</span>
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
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Gutter Guard Installation
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Gutter & Downspout Repairs
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Roof Cleaning & Moss Treatment
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Soft Wash Roof Cleaning
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Get Started */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6">Get Started</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  href="mailto:cfgutters02@gmail.com"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6">About</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="service-area"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Our Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold mb-6">Our Policy</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-200 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;