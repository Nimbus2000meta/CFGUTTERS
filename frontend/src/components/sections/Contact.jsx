import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import ContactForm from './ContactForm';

const Contact = () => {
  const contactDetails = [
    {
      icon: <FiMapPin />,
      title: 'Address',
      details: ['123 Gutter Lane', 'Cityville, ST 12345']
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      details: ['(555) 123-4567', 'Mon-Fri, 8am-6pm']
    },
    {
      icon: <FiMail />,
      title: 'Email',
      details: ['info@cfgutters.com', 'support@cfgutters.com']
    },
    {
      icon: <FiClock />,
      title: 'Hours',
      details: ['Monday-Friday: 8am-6pm', 'Saturday: 9am-2pm']
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            className="text-primary-500 font-semibold uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.p>
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact <span className="headline-gradient">Us Today</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to protect your home with quality gutters? Reach out to us for a free consultation
            and estimate. We're here to help with all your gutter needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Details */}
          <motion.div 
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((detail, index) => (
                <motion.div 
                  key={index} 
                  className="bg-primary-50 rounded-xl p-6"
                  variants={itemVariants}
                >
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary-500 shadow-soft">
                    {detail.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{detail.title}</h3>
                  {detail.details.map((line, i) => (
                    <p key={i} className="text-neutral-600">{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-6 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-semibold text-xl mb-3">Emergency Service</h3>
              <p className="mb-4">
                Experiencing an urgent gutter issue? We offer emergency repairs to prevent water damage to your home.
              </p>
              <a 
                href="tel:+15551234567" 
                className="btn bg-white text-primary-600 hover:bg-neutral-50"
              >
                Call Now
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3 bg-white rounded-xl shadow-soft p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
      
      {/* Map */}
      <div className="mt-16 rounded-xl overflow-hidden h-96 shadow-soft max-w-6xl mx-auto">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA0JzI3LjIiTiA3NMKwMDAnMDguMSJX!5e0!3m2!1sen!2sus!4v1620160360026!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="CFGutters Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;