import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import TypeformEmbed from '../ui/TypeformEmbed';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-neutral-50">
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
            Request a <span className="headline-gradient">Free Quote</span> Today!
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fill out our online contact form or give us a call to request a free, no-obligation 
            estimate for any of our services. We'll respond promptly to discuss your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold text-primary-700 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FiPhone className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Call Now</p>
                    <a 
                      href="tel:+18458793864" 
                      className="text-lg font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                    >
                      (845) 879-3864
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FiMail className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Email Us</p>
                    <a 
                      href="mailto:cfgutters02@gmail.com" 
                      className="text-lg font-semibold text-primary-700 hover:text-primary-800 transition-colors"
                    >
                      cfgutters02@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FiMapPin className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Service Area</p>
                    <p className="text-lg font-semibold text-primary-700">
                      Mahopac NY to Westport CT
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FiClock className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">Business Hours</p>
                    <p className="text-lg font-semibold text-primary-700">
                      Monday-Saturday 8 AM to 6 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <motion.div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 rounded-xl text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-semibold mb-2">Need Urgent Service?</h4>
              <p className="text-sm mb-4">
                We offer emergency gutter cleaning and repair services for urgent situations.
              </p>
              <a 
                href="tel:+18458793864"
                className="inline-flex items-center space-x-2 bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <FiPhone />
                <span>Call Now</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form - Typeform Integration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold text-primary-700 mb-6">Request Your Quote</h3>
              
              {/* Typeform Embedded Form */}
              <TypeformEmbed />

              {/* Alternative Contact Methods */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-neutral-600 mb-4">
                  Prefer to contact us directly?
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+18458793864"
                    className="btn btn-primary flex items-center justify-center gap-2"
                  >
                    <FiPhone />
                    Call (845) 879-3864
                  </a>
                  <a 
                    href="mailto:cfgutters02@gmail.com"
                    className="btn bg-white text-primary-600 hover:bg-gray-100 border-2 border-white flex items-center justify-center gap-2"
                  >
                    <FiMail />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;