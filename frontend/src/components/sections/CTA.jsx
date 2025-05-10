import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiPhoneCall, FiArrowRight } from 'react-icons/fi';

const CTA = () => {
  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Protect Your Home with <span className="text-accent-orange">Premium Gutters</span>?
          </motion.h2>
          
          <motion.p 
            className="text-white/90 text-lg mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact CFGutters today for a free consultation and quote. Our team of professionals is ready 
            to help you protect your most valuable investment from water damage.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="tel:+15551234567" 
              className="btn bg-white text-primary-600 hover:bg-neutral-50 flex items-center justify-center gap-2"
            >
              <FiPhoneCall /> Call (555) 123-4567
            </a>
            
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500}
            >
              <motion.button 
                className="btn btn-accent flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Estimate <FiArrowRight />
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.p 
            className="text-white/70 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Serving Cityville and surrounding areas since 2005
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTA;