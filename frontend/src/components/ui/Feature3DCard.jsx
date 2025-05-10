import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Feature3DCard = ({ icon, title, description, image }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to the card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Normalize rotation values (-10 to 10 degrees)
    const rotX = (mouseY / (rect.height / 2)) * -5;
    const rotY = (mouseX / (rect.width / 2)) * 5;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setScale(1.02);
  };

  const handleMouseLeave = () => {
    // Reset to initial state
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  return (
    <motion.div
      ref={cardRef}
      className="h-full bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-hover transition-all duration-300"
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="h-52 overflow-hidden relative"
        style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      
      <div className="p-6" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(40px)' }}>
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default Feature3DCard;