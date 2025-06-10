import React from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const trustBadges = [
    '500+ Companies Empowered',
    '2M+ Tasks Automated',
    '24-Hour Setup',
    'No Credit Card Required'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-background">
      {/* AI Particles Animation */}
      <div className="ai-particles">
        <div className="ai-particle" style={{ top: '20%', left: '10%' }} />
        <div className="ai-particle" style={{ top: '60%', left: '80%' }} />
        <div className="ai-particle" style={{ top: '40%', left: '60%' }} />
        <div className="ai-particle" style={{ top: '80%', left: '20%' }} />
        <div className="ai-particle" style={{ top: '30%', left: '90%' }} />
        <div className="ai-particle" style={{ top: '70%', left: '40%' }} />
      </div>

      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pre-headline */}
          <motion.p 
            className="text-secondary-400 text-sm md:text-base font-medium tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Build Your Unstoppable Team
          </motion.p>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block">HIRE AI EMPLOYEES</span>
            <span className="block gradient-text">FOR YOUR BUSINESS</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            AI staff that work 24/7, take no breaks, and drive superhuman results
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/demo" className="btn-primary text-lg px-10 py-5">
              Start Your 14-Day Free Trial
            </Link>
            <button className="flex items-center gap-2 text-white hover:text-secondary-400 transition-colors duration-300 font-medium">
              <Play className="w-5 h-5" />
              Watch 2-Min Demo
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-300">
                <CheckCircle className="w-4 h-4 text-secondary-400 flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;