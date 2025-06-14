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
    <section id="service-area" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-500 font-semibold uppercase tracking-wider mb-2">
            Our Coverage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-850 mb-4">
            Service <span className="text-primary-600">Area Coverage</span>
          </h2>
          <p className="text-neutral-600 text-xl">50-Mile Radius from Mahopac, NY</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white text-center py-6 px-6 rounded-lg shadow-soft border border-primary-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-lg text-primary-700">{service}</h3>
            </motion.div>
          ))}
        </div>

        {/* Map Section with Custom 50-Mile Radius Overlay */}
        <motion.div
          className="bg-white rounded-lg overflow-hidden shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-96 bg-gray-200 relative overflow-hidden">
            {/* Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805406.5570608929!2d-73.7562317!3d41.3934083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2a0fb8efc8a19%3A0x71a40bb2f0e0beb5!2sMahopac%2C%20NY!5e0!3m2!1sen!2sus!4v1699892345678!5m2!1sen!2sus"
              width="100%"
              height="384"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
            
            {/* 50-Mile Radius Overlay - Positioned over map */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative">
                {/* Center point - Mahopac */}
                <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg relative z-20"></div>
                
                {/* 50-mile radius circle - Scaled to match map zoom */}
                <svg 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                  width="480" 
                  height="480"
                  viewBox="0 0 480 480"
                >
                  <circle
                    cx="240"
                    cy="240" 
                    r="200"
                    fill="rgba(59, 130, 246, 0.1)"
                    stroke="rgba(59, 130, 246, 0.8)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                  />
                  {/* Radius labels */}
                  <text x="240" y="50" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">
                    50 Miles
                  </text>
                  <text x="240" y="430" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">
                    Service Radius
                  </text>
                </svg>
              </div>
            </div>
            
            {/* Service Area Information Overlay */}
            <div className="absolute top-4 left-4 bg-white bg-opacity-95 px-4 py-3 rounded-lg shadow-lg max-w-xs">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-800">Service Center: Mahopac, NY</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 border-2 border-blue-500 border-dashed rounded-full bg-blue-500 bg-opacity-20"></div>
                  <span className="text-sm font-semibold text-gray-800">50-Mile Service Radius</span>
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  Covers Mahopac NY, Kent CT, Warren CT, Westport CT and surrounding areas
                </div>
              </div>
            </div>
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
          <div className="flex items-center justify-center mb-6">
            <FiMapPin className="text-3xl mr-3" />
            <h3 className="text-2xl font-bold">Coverage Area</h3>
          </div>
          
          <p className="text-xl mb-6">
            Serving homes and businesses throughout <br />
            <strong>Mahopac NY, Kent CT, Warren CT, Westport CT,</strong> <br />
            and everywhere in between!
          </p>

          {/* Service Areas List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <FiCheckCircle className="text-green-400" />
                <span className="font-semibold">{area}</span>
              </div>
            ))}
          </div>

          {/* Coverage Details */}
          <div className="bg-blue-800 p-6 rounded-lg max-w-3xl mx-auto">
            <h4 className="text-lg font-bold mb-4">Within Our 50-Mile Service Radius:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h5 className="font-semibold mb-2">✓ Residential Services</h5>
                <p className="text-blue-200 text-sm">Single-family homes, townhouses, condos</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">✓ Commercial Properties</h5>
                <p className="text-blue-200 text-sm">Office buildings, retail centers, warehouses</p>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-blue-600">
              <p className="text-blue-200">
                Professional gutter cleaning and roof maintenance services • Licensed & Insured • 10+ Years Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceArea;