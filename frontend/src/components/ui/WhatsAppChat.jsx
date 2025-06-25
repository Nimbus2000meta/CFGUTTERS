import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  // WhatsApp phone number - CF Gutters business number
  const phoneNumber = '8458793864';
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset message input
    setMessage('');
  };
  
  // Animation variants
  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }
    },
    tap: { scale: 0.9 },
    hover: { scale: 1.1, backgroundColor: '#25D366' }
  };
  
  const chatVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };
  
  return (
    <div className="fixed bottom-24 right-6 md:right-8 z-[1000]" data-testid="whatsapp-chat-container">
      {/* WhatsApp Button */}
      <motion.button
        className="w-16 h-16 rounded-full bg-green-500 shadow-lg flex items-center justify-center text-white"
        onClick={toggleChat}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileTap="tap"
        whileHover="hover"
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        data-testid="whatsapp-button"
        style={{ pointerEvents: 'auto', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
      >
        {isOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMessageCircle className="text-2xl" />
        )}
      </motion.button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-xl overflow-hidden"
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            data-testid="whatsapp-chat-window"
            style={{ 
              boxShadow: '0 10px 35px rgba(0,0,0,0.2)',
              zIndex: 1000,
              pointerEvents: 'auto'
            }}
          >
            {/* Chat Header */}
            <div className="bg-green-500 text-white p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                    <path d="M16.1,0C7.2,0,0,7.2,0,16.1c0,3.5,1.1,6.9,3.3,9.6L1.1,31l5.6-1.8c2.6,1.7,5.6,2.6,8.7,2.6h0c8.8,0,16-7.2,16-16C31.4,7.2,24.2,0,16.1,0z M16.1,29.5c-2.4,0-4.8-0.7-6.7-2l-0.5-0.3l-5,1.6l1.6-4.7l-0.3-0.5c-1.4-2.2-2.2-4.8-2.2-7.4c0-7.4,6-13.4,13.4-13.4c7.4,0,13.4,6,13.4,13.4C29.5,23.5,23.5,29.5,16.1,29.5z M23.5,19.4c-0.4-0.2-2.4-1.2-2.8-1.3c-0.4-0.1-0.6-0.2-0.9,0.2c-0.3,0.4-1,1.3-1.3,1.6c-0.2,0.3-0.5,0.3-0.9,0.1c-2.2-1.1-3.6-2-5-4.5c-0.4-0.7,0.4-0.6,1.1-2.1c0.1-0.3,0-0.5-0.1-0.7c-0.1-0.2-0.9-2.1-1.2-2.9c-0.3-0.8-0.6-0.7-0.9-0.7c-0.2,0-0.5,0-0.7,0c-0.7,0-1.2,0.3-1.5,0.7c-1.1,1.2-1.5,2.6-1.5,4.3c0,1.7,0.9,3.9,1.1,4.3c1.4,3.7,4.4,6.5,7.5,7.2c2.8,0.6,4-0.2,5.2-1.2C22.8,24.1,23.8,21.1,23.5,19.4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">CFGutters Support</h3>
                  <p className="text-xs text-white/80">Typically replies within an hour</p>
                </div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="p-4 bg-gray-50 h-48 flex flex-col">
              <div className="bg-white p-3 rounded-lg shadow-sm inline-block max-w-[80%] mb-2">
                <p className="text-sm">👋 Hi there! How can we help you with your gutter needs today?</p>
                <p className="text-[10px] text-gray-500 text-right mt-1">10:30 AM</p>
              </div>
              
              <div className="mt-auto">
                <p className="text-center text-xs text-gray-500 mb-2">
                  Your conversation will continue on WhatsApp
                </p>
              </div>
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="border-t p-3 flex items-center">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className={`rounded-full p-3 ml-2 flex items-center justify-center ${
                  message.trim() ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
                }`}
                disabled={!message.trim()}
              >
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppChat;