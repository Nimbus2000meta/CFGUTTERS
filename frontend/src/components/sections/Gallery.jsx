import React from 'react';

const Gallery = () => {
  // Gallery images - using actual images from repository
  const galleryImages = [
    { id: 1, src: '/images/gallery1.jpg', alt: 'Gutter cleaning work 1' },
    { id: 2, src: '/images/gallery2.jpg', alt: 'Gutter cleaning work 2' },
    { id: 3, src: '/images/gallery3.png', alt: 'Gutter cleaning work 3' },
    { id: 4, src: '/images/gallery4.png', alt: 'Gutter cleaning work 4' },
    { id: 5, src: '/images/gallery5.png', alt: 'Gutter cleaning work 5' },
    { id: 6, src: '/images/gallery6.png', alt: 'Gutter cleaning work 6' },
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
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-semibold">CF Gutters Work</p>
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

