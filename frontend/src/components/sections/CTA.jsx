import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiCheckCircle } from 'react-icons/fi';

const CTA = () => {
  const benefits = [
    "Licensed & Insured Technicians",
    "Budget-Friendly Rates", 
    "Eco-Friendly Cleaning Solutions",
    "10+ Years Experience"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Certified Excellence, <br />
              <span className="text-secondary-300">Guaranteed Quality!</span>
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a FREE consultation and discover how we can help protect your home 
              with our professional gutter and roof cleaning services.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center bg-white/10 backdrop-blur-sm py-3 px-4 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <FiCheckCircle className="text-secondary-300 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium text-center">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="btn bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Get Free Quote
            </motion.button>
            <motion.a
              href="tel:+18458793864"
              className="btn bg-white text-primary-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg flex items-center justify-center gap-3 border-2 border-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone className="text-xl" />
              Call Now: (845) 879-3864
            </motion.a>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-primary-200 mb-2">
              <strong>Service Area:</strong> Mahopac NY to Westport CT
            </p>
            <p className="text-primary-200">
              <strong>Business Hours:</strong> Monday-Saturday 8 AM to 6 PM
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;