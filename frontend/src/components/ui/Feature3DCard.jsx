import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Feature3DCard = ({ icon, title, description, image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="h-full bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300"
      animate={{
        scale: hovered ? 1.02 : 1,
        boxShadow: hovered 
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileTap={{ scale: 0.98 }}
      data-testid="feature-card"
    >
      <motion.div 
        className="h-52 overflow-hidden relative"
        animate={{
          y: hovered ? -5 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </motion.div>
      
      <motion.div 
        className="p-6"
        animate={{
          y: hovered ? -8 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="mb-4"
          animate={{
            scale: hovered ? 1.1 : 1,
            y: hovered ? -5 : 0
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Feature3DCard;