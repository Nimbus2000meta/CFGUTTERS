import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery1.jpg",
      alt: 'Professional gutter repair',
      category: 'Repairs',
      description: 'Expert gutter repair and restoration services'
    },
    {
      id: 2,
      src: "/images/gallery2.jpg",
      alt: 'Gutter maintenance service',
      category: 'Maintenance',
      description: 'Expert gutter maintenance and repair work'
    },
    {
      id: 3,
      src: "/images/gallery3.png",
      alt: 'Professional roof cleaning',
      category: 'Roof Cleaning',
      description: 'Professional roof cleaning and moss treatment'
    },
    {
      id: 4,
      src: "/images/gallery4.png",
      alt: 'Gutter guard installation',
      category: 'Gutter Guards',
      description: 'High-quality gutter guard installation service'
    },
    {
      id: 5,
      src: "/images/gallery5.png",
      alt: 'Complete gutter system cleaning',
      category: 'Complete Service',
      description: 'Comprehensive gutter system cleaning and maintenance'
    },
    {
      id: 6,
      src: "/images/gallery6.png",
      alt: 'Professional gutter cleaning',
      category: 'Gutter Cleaning',
      description: 'Professional gutter cleaning and Debris removal'
    }
  ];

  // Gallery images are loaded from your custom images folder

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

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
            From Clogged Gutters & Mossy Roofs to <span className="headline-gradient">Clean & Spotless</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See the difference our professional gutter cleaning and roof maintenance services make. 
            Browse our gallery to see examples of our quality workmanship.
          </motion.p>
        </div>

        {/* Gallery Grid - Dynamic Version */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="bg-white rounded-xl shadow-soft overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(image, index)}
            >
              <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={`${image.src}?v=${Date.now()}`}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                  {image.category}
                </div>
                <p className="text-sm text-gray-600">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-soft">
            <h3 className="text-2xl font-bold text-primary-700 mb-4">
              Ready to Transform Your Home?
            </h3>
            <p className="text-neutral-600 mb-6">
              Let us help you achieve the same professional results. Contact us today for your free estimate!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18458793864"
                className="btn btn-primary"
              >
                Get Free Quote
              </a>
              <a
                href="mailto:cfgutters02@gmail.com"
                className="btn bg-white text-primary-600 hover:bg-gray-100 border-2 border-white"
              >
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`${selectedImage.src}?v=${Date.now()}`}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close lightbox"
              >
                <FiX />
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <FiChevronRight />
              </button>
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-4 text-white">
                <div className="inline-block bg-primary-500 text-xs px-2 py-1 rounded-full mb-2">
                  {selectedImage.category}
                </div>
                <p className="text-sm">{selectedImage.description}</p>
                <div className="text-xs text-white/70 mt-2">
                  {currentIndex + 1} of {galleryImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;