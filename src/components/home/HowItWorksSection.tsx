import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Plug, Brain, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Choose Your AI Team',
      description: 'Select the AI employees that match your business needs and goals.',
      step: '01'
    },
    {
      icon: Plug,
      title: 'Quick Integration',
      description: 'Connect your existing tools and systems in minutes, not weeks.',
      step: '02'
    },
    {
      icon: Brain,
      title: 'Train Your Team',
      description: 'Our AI learns your processes, preferences, and business rules.',
      step: '03'
    },
    {
      icon: Rocket,
      title: 'Launch & Scale',
      description: 'Watch your productivity soar as AI handles the repetitive work.',
      step: '04'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-dark-500 mb-6">
            From Setup to Success in{' '}
            <span className="gradient-text">24 Hours</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Card */}
                <div className="text-center group">
                  {/* Step Number */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6 mx-auto">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                    
                    {/* Connector Dot */}
                    <div className="hidden lg:block absolute inset-0 bg-white rounded-full scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-75 transition-all duration-300" />
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-dark-500 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;