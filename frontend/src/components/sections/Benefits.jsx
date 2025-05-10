import React from 'react';
import { motion } from 'framer-motion';
import { FiDroplet, FiHome, FiDollarSign, FiShield } from 'react-icons/fi';

const Benefits = () => {
  const benefits = [
    {
      icon: <FiHome className="text-5xl text-primary-500" />,
      title: "Protect Your Investment",
      description: "Properly functioning gutters protect your home's foundation, siding, and landscaping from water damage, potentially saving you thousands in repairs."
    },
    {
      icon: <FiDroplet className="text-5xl text-primary-500" />,
      title: "Prevent Water Damage",
      description: "Our gutters efficiently direct rainwater away from your property, preventing basement flooding, soil erosion, and damage to your home's exterior."
    },
    {
      icon: <FiDollarSign className="text-5xl text-primary-500" />,
      title: "Increase Property Value",
      description: "Quality gutter systems not only enhance your home's curb appeal but also demonstrate proper maintenance, increasing your property's market value."
    },
    {
      icon: <FiShield className="text-5xl text-primary-500" />,
      title: "Low Maintenance Solutions",
      description: "Our gutter protection systems reduce cleaning frequency, eliminate blockages, and extend the lifespan of your gutters for years of worry-free performance."
    }
  ];

  // SVG Wave Pattern
  const WavePattern = () => (
    <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
      <svg className="absolute top-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="currentColor" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );

  // Custom Raindrop SVG
  const RaindropSVG = ({ className }) => (
    <svg
      className={className}
      width="60"
      height="80"
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 0C30 0 0 30 0 50C0 67.3 13.4 80 30 80C46.6 80 60 67.3 60 50C60 30 30 0 30 0Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </svg>
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 }
    },
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      <div className="absolute inset-0 text-primary-500">
        <WavePattern />
      </div>
      
      {/* Decorative Raindrops */}
      <RaindropSVG className="absolute top-20 left-[5%] text-primary-500 animate-float" />
      <RaindropSVG className="absolute top-40 right-[10%] text-secondary-500 animate-float" style={{ animationDelay: '1s' }} />
      <RaindropSVG className="absolute bottom-20 left-[15%] text-accent-blue animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            className="text-primary-500 font-semibold uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.p>
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The <span className="headline-gradient">Benefits</span> of Professional Gutters
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Investing in quality gutters is one of the most cost-effective ways to protect your home.
            Discover how our professional gutter solutions can benefit you.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-soft p-8 relative overflow-hidden hover:shadow-hover transition-shadow"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex flex-col">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-50 rounded-full opacity-20"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stat Counter */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl shadow-soft p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <StatCounter number={1500} label="Projects Completed" />
            <StatCounter number={98} label="Satisfaction Rate" suffix="%" />
            <StatCounter number={15} label="Years of Experience" suffix="+" />
            <StatCounter number={10} label="Year Warranty" />
          </div>
          <div className="absolute inset-0 bg-primary-500 opacity-[0.03]"></div>
        </motion.div>
      </div>
    </section>
  );
};

// Stat Counter Component
const StatCounter = ({ number, label, suffix = '' }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl md:text-5xl font-bold text-primary-600 mb-2 flex items-center">
        <CountUp end={number} /> 
        <span>{suffix}</span>
      </h3>
      <p className="text-neutral-600">{label}</p>
    </div>
  );
};

// Simple animated counter
const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return <>{count}</>;
};

export default Benefits;