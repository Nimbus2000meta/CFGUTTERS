import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiArrowRight } from 'react-icons/fi';

const CTAHorizontal = () => {
  return (
    <section className="py-12 bg-primary-600">
      <div className="container-custom">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Content */}
          <div className="text-center lg:text-left text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Ready for Professional Gutter Cleaning?
            </h3>
            <p className="text-primary-100 text-lg">
              Get your free quote today • Licensed & Insured • 10+ Years Experience
            </p>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="tel:+18458793864"
              className="btn bg-white text-primary-600 hover:bg-gray-100 font-semibold px-6 py-3 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone />
              Call (845) 879-3864
            </motion.a>
            <motion.a
              href="mailto:cfgutters02@gmail.com"
              className="btn bg-white text-primary-600 hover:bg-gray-100 font-semibold px-6 py-3 flex items-center gap-2 border-2 border-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Quote <FiArrowRight />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAHorizontal;