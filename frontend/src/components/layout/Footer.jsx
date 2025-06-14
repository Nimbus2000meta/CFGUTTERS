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
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info - Logo and Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="mb-4">
              <svg
                width="80"
                height="80"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-3"
              >
                <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="8" fill="#1e40af"/>
                <circle cx="100" cy="100" r="85" stroke="white" strokeWidth="2" fill="#1e40af"/>
                <path d="M30 110 L60 75 L90 75 L140 75 L170 110 L165 120 L35 120 Z" fill="white"/>
                <path d="M70 75 L100 45 L130 75 L125 72 L100 52 L75 72 Z" fill="white"/>
                <path d="M80 75 L100 58 L120 75 L115 73 L100 63 L85 73 Z" fill="#93c5fd"/>
                <rect x="30" y="110" width="140" height="8" fill="white"/>
                <path d="M35 125 L50 125" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M55 128 L70 128" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M75 131 L90 131" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M110 128 L125 128" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M130 131 L145 131" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M150 125 L165 125" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <rect x="167" y="110" width="6" height="25" fill="white"/>
                <rect x="165" y="133" width="10" height="4" fill="white"/>
                <text x="100" y="155" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">CF GUTTERS</text>
              </svg>
            </div>
            
            {/* Social Media Links - Horizontal */}
            <div className="flex items-center space-x-6 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61567485513010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-200 hover:text-white transition-colors"
              >
                <FiFacebook className="text-lg" />
                <span className="text-sm">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/cfgutters"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-200 hover:text-white transition-colors"
              >
                <FaInstagram className="text-lg" />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@cfgutters"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-200 hover:text-white transition-colors"
              >
                <FaTiktok className="text-lg" />
                <span className="text-sm">TikTok</span>
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
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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
            <h4 className="text-xl font-bold mb-4">Get Started</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  href="mailto:cfgutters02@gmail.com"
                  className="text-primary-200 hover:text-white transition-colors text-sm"
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
            <h4 className="text-xl font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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
            <h4 className="text-xl font-bold mb-4">Our Policy</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-200 hover:text-white transition-colors text-sm">
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
                  className="text-primary-200 hover:text-white transition-colors cursor-pointer text-sm"
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