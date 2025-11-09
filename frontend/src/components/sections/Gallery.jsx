import React from 'react';

const Gallery = () => {
  // Gallery images - using actual before/after images from CF Gutters
  const galleryImages = [
    { id: 1, src: '/images/before-after-1.webp', alt: 'Before: Clogged gutter with debris', label: 'Before' },
    { id: 2, src: '/images/before-after-2.webp', alt: 'After: Clean gutter system', label: 'After' },
    { id: 3, src: '/images/before-after-3.png', alt: 'Before: Roof with moss and debris', label: 'Before' },
    { id: 4, src: '/images/before-after-4.png', alt: 'After: Clean roof surface', label: 'After' },
    { id: 5, src: '/images/before-after-5.png', alt: 'Before: Roof with heavy moss growth', label: 'Before' },
    { id: 6, src: '/images/before-after-6.png', alt: 'After: Restored clean roof', label: 'After' },
    { id: 7, src: '/images/gallery10.jpg', alt: 'Gutter cleaning work 7' },
    { id: 8, src: '/images/gallery13.jpg', alt: 'Gutter cleaning work 8' },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Feature Works</span>
          </h2>
          <p className="text-xl text-gray-700">
            From <strong>Clogged Gutters</strong> & Mossy Roofs to Clean & Spotless
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative aspect-square">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {image.label && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {image.label}
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-semibold">
                  {image.label ? `${image.label} - CF Gutters Work` : 'CF Gutters Work'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Gallery Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            View more of our work on our social media channels
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

