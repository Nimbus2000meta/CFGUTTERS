import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiThumbsUp, FiClock, FiAward } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiShield />,
      title: 'Insured & Licensed',
      description: 'Fully licensed and insured for your complete peace of mind.'
    },
    {
      icon: <FiThumbsUp />,
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind our work with a 100% satisfaction guarantee.'
    },
    {
      icon: <FiClock />,
      title: 'Prompt Service',
      description: 'On-time arrivals and efficient completion of projects.'
    },
    {
      icon: <FiAward />,
      title: 'Expert Craftsmen',
      description: 'Our team consists of skilled professionals with years of experience.'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1726589004565-bedfba94d3a2" 
                alt="CFGutters professional installation team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-soft max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-500 rounded-full p-3 text-white">
                  <FiAward className="text-xl" />
                </div>
                <div>
                  <p className="text-primary-500 font-semibold">15+ Years</p>
                  <p className="text-sm text-neutral-600">Trusted Service</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.p 
              className="text-primary-500 font-semibold uppercase tracking-wider mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About CFGutters
            </motion.p>
            <motion.h2 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Protecting Homes Since <span className="headline-gradient">2005</span>
            </motion.h2>
            <motion.p 
              className="text-neutral-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              CFGutters is a family-owned business dedicated to providing homeowners with premium gutter solutions. 
              We specialize in the installation, repair, and maintenance of residential and commercial gutter systems.
              With over 15 years of experience, we've built a reputation for quality workmanship, attention to detail, 
              and exceptional customer service.
            </motion.p>

            {/* Features List */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex space-x-4"
                  variants={itemVariants}
                >
                  <div className="bg-primary-50 rounded-full p-3 text-primary-500 flex-shrink-0 h-12 w-12 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-neutral-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;