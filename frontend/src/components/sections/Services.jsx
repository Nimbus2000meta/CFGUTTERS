import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTool, FiDroplet, FiHome } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 'installation',
      title: 'Gutter Installation',
      description: 'Premium gutter systems customized to your home\'s architecture and needs.',
      icon: <FiHome className="text-4xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1677945451878-de79f98149c9',
      features: [
        'Seamless aluminum gutters',
        'Custom colors and styles',
        'Professional installation',
        '10-year warranty'
      ]
    },
    {
      id: 'repair',
      title: 'Gutter Repair',
      description: 'Restore your gutter system\'s functionality with our expert repair services.',
      icon: <FiTool className="text-4xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1574359411659-15573a27fd0c',
      features: [
        'Leak repair',
        'Sagging correction',
        'Downspout reattachment',
        'Seamless fixes'
      ]
    },
    {
      id: 'cleaning',
      title: 'Gutter Cleaning',
      description: 'Regular maintenance to keep your gutters flowing freely and prevent damage.',
      icon: <FiDroplet className="text-4xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1556137805-b67cc1d7d328',
      features: [
        'Complete debris removal',
        'Downspout flushing',
        'Inspection report',
        'Seasonal maintenance plans'
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <section id="services" className="section-padding bg-neutral-50">
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
            Our Expertise
          </motion.p>
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Premium Gutter <span className="headline-gradient">Services</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer comprehensive gutter solutions to protect your home from water damage.
            Our professional team ensures quality workmanship on every project.
          </motion.p>
        </div>

        {/* Services Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="card card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <div 
                className="h-52 overflow-hidden"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="p-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FiCheckCircle className="text-secondary-500" />
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;