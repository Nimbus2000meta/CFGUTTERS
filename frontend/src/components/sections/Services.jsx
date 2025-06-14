import React from 'react';
import { FiCheckCircle, FiTool, FiDroplet, FiShield, FiWind } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 'gutter-cleaning',
      title: 'Professional Gutter Cleaning',
      description: 'Clogged gutters can cause serious damage to your home. We provide expert gutter cleaning services to keep your gutters clear and functional year-round.',
      icon: <FiDroplet className="text-4xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1553169507-38833977274b',
      features: [
        'Debris Removal',
        'Downspout Flushing',
        'Gutter Inspection',
        'Professional Equipment'
      ]
    },
    {
      id: 'gutter-guards',
      title: 'Gutter Guard Installation',
      description: 'Protect your gutters with high-quality gutter guards that prevent debris buildup and reduce maintenance needs.',
      icon: <FiShield className="text-4xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1583839013375-67ede5f4a0c6',
      features: [
        'High-Quality Materials',
        'Custom Fitting',
        'Long-Term Protection',
        'Reduced Maintenance'
      ]
    },
    {
      id: 'gutter-repairs',
      title: 'Gutter & Downspout Repairs',
      description: 'Restore your gutter system\'s functionality with our expert repair services for leaks, sagging, and damage.',
      icon: <FiTool className="text-4xl text-primary-500" />,
      image: 'https://images.pexels.com/photos/945615/pexels-photo-945615.jpeg',
      features: [
        'Leak Repair',
        'Sagging Correction',
        'Downspout Reattachment',
        'Seamless Fixes'
      ]
    },
    {
      id: 'basic-roof-cleaning',
      title: 'Basic Roof Cleaning & Moss Treatment',
      description: 'Budget-friendly solution to remove moss and debris with preventative treatment to slow regrowth.',
      icon: <FiWind className="text-4xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1699154581577-ce92c7a86638',
      features: [
        'Moss Removal',
        'Debris Clearing',
        'Preventative Treatment',
        'Affordable Option'
      ]
    },
    {
      id: 'soft-wash-cleaning',
      title: 'Complete Soft Wash Roof Cleaning',
      description: 'Thorough clean that restores your roof to its original condition using low-pressure soft wash system.',
      icon: <FiDroplet className="text-4xl text-primary-500" />,
      image: 'https://images.unsplash.com/photo-1608747912555-466ac58ad9e8',
      features: [
        'Low-Pressure System',
        'Complete Restoration',
        'Specialized Solutions',
        'Long-Lasting Results'
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
            Expert Gutter & <span className="headline-gradient">Roof Cleaning</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At CF Gutters, we believe every home deserves quality care and reliable service—without breaking the bank. 
            With over 10 years of experience, we provide top-notch services that protect your home year-round.
          </motion.p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="h-full">
              <div className="h-full bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="h-52 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-600">{service.description}</p>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-xl p-4 shadow-soft">
                <h4 className="font-semibold mb-3 text-primary-600">Process:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FiCheckCircle className="text-secondary-500 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;