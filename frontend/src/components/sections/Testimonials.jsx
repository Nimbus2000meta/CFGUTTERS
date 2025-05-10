import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Thompson',
      location: 'Cityville, ST',
      content: 'The team at CFGutters did an exceptional job replacing our old gutters. They were professional, efficient, and the quality of workmanship exceeded my expectations.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Jennifer Wilson',
      location: 'Townsburg, ST',
      content: 'I highly recommend CFGutters for their excellent service. They arrived on time, completed the job quickly, and left my property clean. The new gutters look great and function perfectly.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Robert Davis',
      location: 'Villageton, ST',
      content: 'After a bad storm damaged our gutters, CFGutters came out quickly to assess and repair the damage. Their pricing was fair and the repairs have held up well through several storms since.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/men/62.jpg'
    },
    {
      id: 4,
      name: 'Sarah Martinez',
      location: 'Hamletville, ST',
      content: 'The CFGutters team installed gutter guards on my home and I couldn\'t be happier. No more climbing ladders to clean out leaves and debris! Their team was courteous and professional.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/28.jpg'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <FiStar 
        key={index} 
        className={`${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
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
            Client Testimonials
          </motion.p>
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our <span className="headline-gradient">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Hear what our satisfied customers have to say about our gutter services.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary-100"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-neutral-500 text-sm">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-neutral-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-primary-50 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-primary-600 mb-2">1000+</h3>
            <p className="text-neutral-600">Projects Completed</p>
          </div>
          <div className="bg-primary-50 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-primary-600 mb-2">15+</h3>
            <p className="text-neutral-600">Years Experience</p>
          </div>
          <div className="bg-primary-50 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-primary-600 mb-2">98%</h3>
            <p className="text-neutral-600">Satisfaction Rate</p>
          </div>
          <div className="bg-primary-50 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-primary-600 mb-2">24/7</h3>
            <p className="text-neutral-600">Customer Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;