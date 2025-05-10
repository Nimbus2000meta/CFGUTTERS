import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiX } from 'react-icons/fi';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1464146072230-91cabc968266',
      title: 'Modern Home Gutters',
      category: 'Installation'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1722619734320-9daad59bac19',
      title: 'Commercial Project',
      category: 'Installation'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1574359411659-15573a27fd0c',
      title: 'Repair Project',
      category: 'Repair'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1556137805-b67cc1d7d328',
      title: 'Cleaning Service',
      category: 'Cleaning'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09',
      title: 'Residential Home',
      category: 'Installation'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1677945451878-de79f98149c9',
      title: 'Custom Design',
      category: 'Installation'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="gallery" className="section-padding bg-neutral-50">
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
            Our Work
          </motion.p>
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Project <span className="headline-gradient">Gallery</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Browse through our collection of completed projects. Each image showcases our commitment
            to quality craftsmanship and attention to detail.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative group overflow-hidden rounded-2xl shadow-soft h-64 cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setActiveImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold">{image.title}</h3>
                <p className="text-neutral-200 text-sm">{image.category}</p>
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiPlus className="text-primary-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/90 p-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setActiveImage(null)}
          >
            <motion.button 
              className="absolute top-6 right-6 bg-white rounded-full p-2 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveImage(null)}
            >
              <FiX className="text-neutral-800 text-xl" />
            </motion.button>
            <motion.div 
              className="relative max-w-6xl max-h-[80vh] overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeImage.src} 
                alt={activeImage.title} 
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/50 backdrop-blur-sm p-4">
                <h3 className="text-white font-semibold">{activeImage.title}</h3>
                <p className="text-neutral-200 text-sm">{activeImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;