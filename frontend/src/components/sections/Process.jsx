import React from 'react';
import { motion } from 'framer-motion';
import { FiPhoneCall, FiClipboard, FiTool, FiCheckCircle } from 'react-icons/fi';

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: <FiPhoneCall className="text-3xl text-white" />,
      title: "Consultation",
      description: "Schedule a free consultation and receive expert advice on the best gutter solution for your home."
    },
    {
      id: 2,
      icon: <FiClipboard className="text-3xl text-white" />,
      title: "Proposal",
      description: "Receive a detailed, no-obligation quote that outlines all work, materials, and costs."
    },
    {
      id: 3,
      icon: <FiTool className="text-3xl text-white" />,
      title: "Installation",
      description: "Our professional team installs your new gutters with precision and attention to detail."
    },
    {
      id: 4,
      icon: <FiCheckCircle className="text-3xl text-white" />,
      title: "Final Inspection",
      description: "We conduct a thorough inspection and walkthrough to ensure your complete satisfaction."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 50,
        damping: 15
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            className="text-primary-500 font-semibold uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How We Work
          </motion.p>
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our <span className="headline-gradient">Process</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We've streamlined our process to ensure a seamless experience from consultation to completion.
            Here's what you can expect when you choose CFGutters.
          </motion.p>
        </div>

        {/* Process Steps */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Process Timeline */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 h-[calc(100%-120px)] w-1 bg-primary-100 hidden md:block">
            <motion.div 
              className="h-full w-full bg-primary-500 origin-top"
              variants={lineVariants}
              style={{ scaleY: 1, transformOrigin: "top" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                className={`relative ${index % 2 === 1 ? 'md:mt-40' : ''}`}
                variants={itemVariants}
              >
                {/* Step Number - Desktop */}
                <div className="absolute top-0 md:-left-6 lg:-left-10 hidden md:flex items-center -translate-y-1/2">
                  <div className="bg-primary-500 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10">
                    {step.id}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                  {/* Step Icon Box */}
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 flex justify-center">
                    <div className="bg-primary-700/40 rounded-full w-16 h-16 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="p-6">
                    {/* Step Number - Mobile */}
                    <div className="inline-block bg-primary-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mb-4 md:hidden">
                      {step.id}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-neutral-600 mb-6">
            Ready to experience our seamless process? Get started today.
          </p>
          <a 
            href="tel:+15551234567" 
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <FiPhoneCall /> Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;