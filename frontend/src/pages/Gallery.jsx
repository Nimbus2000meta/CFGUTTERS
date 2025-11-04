import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiX } from 'react-icons/fi';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images from your actual work
  const galleryImages = [
    { id: 1, src: '/images/gallery1.jpg', alt: 'Professional gutter cleaning work' },
    { id: 2, src: '/images/gallery2.jpg', alt: 'Gutter maintenance service' },
    { id: 3, src: '/images/gallery3.png', alt: 'Roof and gutter cleaning' },
    { id: 4, src: '/images/gallery4.png', alt: 'Gutter guard installation' },
    { id: 5, src: '/images/gallery5.png', alt: 'Complete gutter service' },
    { id: 6, src: '/images/gallery6.png', alt: 'Gutter repair work' },
    { id: 7, src: '/images/gallery10.jpg', alt: 'Professional roof cleaning' },
    { id: 8, src: '/images/gallery13.jpg', alt: 'Gutter and roof maintenance' },
    { id: 9, src: '/images/gallery101.png', alt: 'Detailed gutter work' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Take a look at our professional work and see the quality we bring to every project
          </p>
        </div>

        {/* Introduction Text */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>CF Gutters</strong>, we believe every home deserves <strong>quality care</strong> and reliable service—without breaking the bank. With over <strong>10 years</strong> of experience, we provide top-notch <strong>gutter cleaning</strong>, repairs, and <strong>installations</strong> that protect your home year-round.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to See Similar Results?</h2>
          <p className="text-xl mb-8">Contact us today for a free quote on our professional services</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+18458793864" 
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call (845) 879-3864
            </a>
            <Link 
              to="/contact-us" 
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FiX className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full">
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
