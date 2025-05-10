import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Initialize cursor after component mounts to avoid SSR issues
  useEffect(() => {
    // Only show custom cursor on non-touch devices and when not in testing mode
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isTestingEnvironment = window.navigator.userAgent.includes('TestRunner');
    
    if (isTouchDevice || isTestingEnvironment) return;
    
    // Short delay to prevent flickering during page load
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smoother cursor movement
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
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
      
      // Check for interactable elements by tag or role
      const isClickable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('a, button, [role="button"], [class*="cursor-pointer"]') !== null;
      
      setIsPointer(isClickable);
    };
    
    // Hide cursor when leaving the window
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    // Show cursor when entering the window
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    
    // Clean up event listeners
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isActive ? 0.8 : 1,
          opacity: isVisible ? 1 : 0,
          borderColor: 'white'
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          border: isPointer ? 'none' : '2px solid white',
          backgroundColor: isPointer ? 'white' : 'transparent',
          mixBlendMode: 'difference'
        }}
        data-testid="custom-cursor-large"
      />
      
      {/* Secondary cursor (dot) */}
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-white pointer-events-none z-[9999]"
        animate={{
          x: position.x - 1,
          y: position.y - 1,
          scale: isActive ? 1.5 : 1,
          opacity: isPointer ? 0 : (isVisible ? 1 : 0)
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 40,
          mass: 0.2
        }}
        style={{ mixBlendMode: 'difference' }}
        data-testid="custom-cursor-small"
      />
    </>
  );
};

export default Cursor;