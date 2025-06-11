import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, DollarSign, Clock, AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  const statistics = [
    {
      icon: TrendingDown,
      percentage: '68%',
      description: 'of employee time wasted on tasks AI could handle',
      color: 'text-red-500'
    },
    {
      icon: DollarSign,
      percentage: '$4,700',
      description: 'average monthly cost per employee on low-value work',
      color: 'text-orange-500'
    },
    {
      icon: Clock,
      percentage: '3 hours',
      description: 'daily spent on email and admin tasks',
      color: 'text-yellow-500'
    },
    {
      icon: AlertTriangle,
      percentage: '40%',
      description: 'of leads lost to slow response times',
      color: 'text-red-500'
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
            Your Team is Drowning in Cost and Repetitive Work. Let's Fix That
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
              </div>
              <div className="text-4xl font-bold text-dark-500 mb-2">
                {stat.percentage}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            What if your team could focus only on work that{' '}
            <span className="gradient-text font-semibold">matters?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;