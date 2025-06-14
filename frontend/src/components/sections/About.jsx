import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiStar, FiShield, FiClock } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiStar className="text-primary-500" />,
      title: "Licensed & Insured Technicians",
      description: "All our technicians are fully licensed and insured for your peace of mind."
    },
    {
      icon: <FiShield className="text-primary-500" />,
      title: "Excellent Safety Ratings",
      description: "We maintain the highest safety standards in all our operations."
    },
    {
      icon: <FiClock className="text-primary-500" />,
      title: "Worry-Free Scheduling",
      description: "Flexible scheduling that works around your busy lifestyle."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "1000+", label: "Happy Customers" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-500 font-semibold uppercase tracking-wider mb-2">
              About CF Gutters
            </p>
            <h2 className="mb-6">
              Why Choose <span className="headline-gradient">CF Gutters?</span>
            </h2>
            <p className="text-neutral-600 mb-6">
              CF Gutters began two years ago as a side business, born from the realization that many homeowners 
              were not receiving the quality of service they deserved. What started as a small venture quickly 
              grew into a full-time commitment to delivering top-notch gutter cleaning, gutter guard installations, 
              and gutter and downspout repairs to our community and the surrounding areas.
            </p>
            <p className="text-neutral-600 mb-8">
              At CF Gutters, we believe that every customer deserves exceptional service and results that exceed 
              expectations. Our dedication to quality is at the heart of everything we do, from meticulously 
              cleaning your gutters to expertly installing guards and making reliable repairs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Service Areas */}
            <motion.div
              className="bg-primary-50 p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-semibold text-primary-700 mb-2">Service Areas</h4>
              <p className="text-primary-600 font-medium">Mahopac NY to Westport CT</p>
              <p className="text-sm text-primary-600">
                Serving homes and businesses throughout the region and everywhere in between!
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-neutral-50 rounded-xl hover:bg-white hover:shadow-soft transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-xl">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-850 mb-2">{feature.title}</h4>
                  <p className="text-neutral-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Additional Features */}
            <motion.div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 rounded-xl text-white mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-semibold mb-4">Our Commitment</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <FiCheckCircle className="text-white" />
                  <span className="text-sm">Budget-Friendly Rates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCheckCircle className="text-white" />
                  <span className="text-sm">Eco-Friendly Cleaning Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCheckCircle className="text-white" />
                  <span className="text-sm">Prompt Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCheckCircle className="text-white" />
                  <span className="text-sm">Quality Workmanship</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;