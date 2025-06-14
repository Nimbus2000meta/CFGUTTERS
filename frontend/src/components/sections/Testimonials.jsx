import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Lisa Ferriello",
      rating: 5,
      date: "September 7, 2024",
      text: "I recently had my gutters cleaned... Highly recommend.",
      title: "Highly Recommend"
    },
    {
      id: 2,
      name: "Maria Waltz",
      rating: 5,
      date: "September 4, 2024",
      text: "Connor did a fantastic job cleaning my gutters!!",
      title: "Best Gutter Man!"
    },
    {
      id: 3,
      name: "Ann Smith",
      rating: 5,
      date: "September 3, 2024",
      text: "All around good experience. Appreciated the good customer service.",
      title: "Satisfied Customer"
    },
    {
      id: 4,
      name: "Jessie Oakley",
      rating: 5,
      date: "September 2, 2024",
      text: "Great prices and amazing work done will definitely use again!",
      title: "Amazing Work"
    },
    {
      id: 5,
      name: "Ben Amos",
      rating: 5,
      date: "September 2, 2024",
      text: "Con gave us a quick quote which was very reasonable.",
      title: "Great Price and Great Work"
    },
    {
      id: 6,
      name: "St. Ives",
      rating: 5,
      date: "September 2, 2024",
      text: "Very pleased with the work carried out by Gutter Clean.",
      title: "Peterborough"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <FiStar
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
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
            Testimonials
          </motion.p>
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our <span className="headline-gradient">Customers Say</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Read what our satisfied customers have to say about our services.
          </motion.p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 shadow-soft rounded-2xl text-center"
              >
                <StarRating rating={testimonials[currentIndex].rating} />
                <h3 className="text-xl font-semibold text-primary-700 mb-4">
                  {testimonials[currentIndex].title}
                </h3>
                <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex flex-col items-center">
                  <p className="font-semibold text-neutral-850">
                    - {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {testimonials[currentIndex].date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-primary-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-neutral-600 mb-6">
            Ready to experience the CF Gutters difference?
          </p>
          <motion.a
            href="tel:+18458793864"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Now: (845) 879-3864
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;