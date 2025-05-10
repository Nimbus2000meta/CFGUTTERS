import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiFacebook, FiInstagram, FiTwitter, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Gutter Installation', to: 'services' },
        { name: 'Gutter Repairs', to: 'services' },
        { name: 'Gutter Cleaning', to: 'services' },
        { name: 'Downspout Installation', to: 'services' },
        { name: 'Guards & Screens', to: 'services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', to: 'about' },
        { name: 'Our Team', to: 'about' },
        { name: 'Testimonials', to: 'testimonials' },
        { name: 'Gallery', to: 'gallery' },
        { name: 'FAQ', to: 'faq' },
      ],
    },
  ];

  return (
    <footer className="bg-primary-800 text-white pt-20 pb-10">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">
              CFG<span className="text-accent-orange">Gutters</span>
            </h3>
            <p className="text-primary-100 mb-6">
              Professional gutter installation, repair, and maintenance services. Protecting your home from water damage since 2005.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-700 p-3 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-700 p-3 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-700 p-3 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-primary-100 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-accent-orange mt-1" />
                <span className="text-primary-100">
                  123 Gutter Lane<br />
                  Cityville, ST 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-accent-orange" />
                <a href="tel:+15551234567" className="text-primary-100 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-accent-orange" />
                <a href="mailto:info@cfgutters.com" className="text-primary-100 hover:text-white transition-colors">
                  info@cfgutters.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-primary-700 mt-16 pt-8 text-center text-primary-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© {currentYear} CFGutters. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;