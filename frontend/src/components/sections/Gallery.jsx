import React from 'react';

const Gallery = () => {
  // Gallery images - using placeholders, replace with actual images
  const galleryImages = [
    { id: 1, before: '/images2/house-ladder.png', after: '/images2/house-ladder.png', alt: 'Gutter cleaning before and after' },
    { id: 2, before: '/images2/house-ladder.png', after: '/images2/house-ladder.png', alt: 'Roof cleaning before and after' },
    { id: 3, before: '/images2/house-ladder.png', after: '/images2/house-ladder.png', alt: 'Moss treatment before and after' },
    { id: 4, before: '/images2/house-ladder.png', after: '/images2/house-ladder.png', alt: 'Gutter guard installation' },
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
                  src={image.before}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img 
                  src={image.after}
                  alt={`${image.alt} - after`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-semibold">Hover to see transformation</p>
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

