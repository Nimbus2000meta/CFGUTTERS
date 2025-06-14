import React from 'react';
import { FiCheckCircle, FiTool, FiDroplet, FiShield, FiWind } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 'gutter-cleaning',
      title: 'Professional Gutter Cleaning',
      description: 'Clogged gutters can cause serious damage to your home. We provide expert gutter cleaning services to keep your gutters clear and functional year-round.',
      icon: <FiDroplet className="text-4xl text-blue-600" />,
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
      icon: <FiShield className="text-4xl text-blue-600" />,
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
      description: 'Restore your gutter system functionality with our expert repair services for leaks, sagging, and damage.',
      icon: <FiTool className="text-4xl text-blue-600" />,
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
      icon: <FiWind className="text-4xl text-blue-600" />,
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
      icon: <FiDroplet className="text-4xl text-blue-600" />,
      features: [
        'Low-Pressure System',
        'Complete Restoration',
        'Specialized Solutions',
        'Long-Lasting Results'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-2">Our Expertise</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Gutter & <span className="text-blue-600">Roof Cleaning</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At CF Gutters, we believe every home deserves quality care and reliable service—without breaking the bank. 
            With over 10 years of experience, we provide top-notch services that protect your home year-round.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-3">Process:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;