import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCheckCircle } from 'react-icons/fi';

const ServiceArea = () => {
  const services = [
    'Gutter Cleaning',
    'Gutter Guard Installations', 
    'Gutter & Downspout Repairs',
    'Basic Roof Cleaning & Moss Treatment',
    'Complete Soft Wash Roof Cleaning'
  ];

  const serviceAreas = [
    'Mahopac NY',
    'Kent CT', 
    'Warren CT',
    'Westport CT'
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Services Grid */}
        <div className="grid gap-4 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-blue-700 text-white text-center py-4 px-6 rounded-lg font-semibold text-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {service}
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          className="bg-white rounded-lg overflow-hidden shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-80 bg-gray-200 flex items-center justify-center">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-73.7562317089551!3d41.39340829834621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2a0fb8efc8a19%3A0x1234567890abcdef!2sMahopac%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>

        {/* Service Area Text */}
        <motion.div
          className="bg-blue-700 text-white text-center py-8 px-6 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-4">
            <FiMapPin className="text-3xl mr-3" />
            <h3 className="text-2xl font-bold">Our Service Area</h3>
          </div>
          
          <p className="text-xl mb-6">
            Serving homes and businesses throughout <br />
            <strong>Mahopac NY, Kent CT, Warren CT, Westport CT,</strong> <br />
            and everywhere in between!
          </p>

          {/* Service Areas List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <FiCheckCircle className="text-green-400" />
                <span className="font-semibold">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-blue-200">
              Professional gutter cleaning and roof maintenance services for residential and commercial properties
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceArea;