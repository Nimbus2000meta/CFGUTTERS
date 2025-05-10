import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({ isSubmitting: false, isSubmitted: false, error: "An error occurred. Please try again." });
    }
  };

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
            <h3 className="text-2xl font-semibold mb-6">Get a Free Quote</h3>
            
            {formStatus.isSubmitted ? (
              <motion.div 
                className="bg-green-50 text-green-700 p-6 rounded-xl flex items-center space-x-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FiCheck className="text-2xl" />
                <span>Thank you! Your message has been sent. We'll get back to you shortly.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-neutral-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-neutral-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-neutral-700 mb-2">Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="installation">Gutter Installation</option>
                      <option value="repair">Gutter Repair</option>
                      <option value="cleaning">Gutter Cleaning</option>
                      <option value="guards">Gutter Guards</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-neutral-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="Please tell us about your project..."
                  ></textarea>
                </div>
                <motion.button 
                  type="submit"
                  className="btn btn-primary w-full flex justify-center items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>Submit Request <FiSend /></>
                  )}
                </motion.button>
                {formStatus.error && (
                  <p className="mt-4 text-red-500">{formStatus.error}</p>
                )}
              </form>
            )}
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