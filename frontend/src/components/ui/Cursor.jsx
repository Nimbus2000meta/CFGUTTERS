import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Initialize cursor after component mounts to avoid SSR issues
  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => {
      setIsActive(true);
    };
    
    const handleMouseUp = () => {
      setIsActive(false);
    };
    
    const handleMouseOver = (e) => {
      // Check if element or its parent has cursor:pointer
      const target = e.target;
      const isPointerElement = window.getComputedStyle(target).cursor === 'pointer';
      const parentElement = target.closest('a, button, [role="button"], [class*="cursor-pointer"]');
      setIsPointer(isPointerElement || parentElement !== null);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isActive ? 0.8 : 1,
          opacity: 1,
          backgroundColor: isPointer ? '#fff' : 'transparent',
          border: isPointer ? 'none' : '2px solid white'
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      
      {/* Secondary cursor (dot) */}
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-white pointer-events-none z-[9999]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isActive ? 1.5 : 1,
          opacity: isPointer ? 0 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 40,
          mass: 0.2
        }}
      />
    </>
  );
};

export default Cursor;