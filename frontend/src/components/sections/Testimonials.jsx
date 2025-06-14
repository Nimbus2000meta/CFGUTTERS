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

        {/* Write a Review Section */}
        <motion.div
          className="mt-16 text-center bg-primary-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Love Our Service?</h3>
            <p className="text-gray-600 mb-6">
              Help others discover our quality gutter cleaning services by sharing your experience on Google.
            </p>
          </div>
          
          <motion.a
            href="https://www.google.com/maps/place/CF+Gutters/@41.5548985,-73.6713995,10z/data=!4m8!3m7!1s0x259e937372cb8d5d:0xa6ccfbd39f0eeed2!8m2!3d41.5548985!4d-73.6713995!9m1!1b1!16s%2Fg%2F11lth2v_g9?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Click Here to Write a Review
          </motion.a>
          
          <div className="mt-4 text-sm text-gray-500">
            Your feedback helps us improve and helps others find quality service!
          </div>
        </motion.div>

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