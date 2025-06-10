import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  HeadphonesIcon, 
  Settings, 
  Users, 
  Calculator, 
  Megaphone,
  CheckCircle
} from 'lucide-react';
import BookingModal from '../BookingModal';

const SolutionSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');

  const handleBooking = (employeeName: string) => {
    setSelectedEmployee(employeeName);
    setIsBookingOpen(true);
  };

  const aiEmployees = [
    {
      name: 'Sarah',
      role: 'Sales Development Partner',
      avatar: UserCheck,
      tagline: 'Your tireless SDR who turns cold leads into warm conversations',
      features: [
        'Responds in 60 seconds',
        'Qualifies intelligently', 
        'Books meetings automatically',
        'Nurtures persistently'
      ],
      stats: {
        availability: '24/7 Available',
        performance: '35% More Leads',
        cost: '$397/month'
      },
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Alex',
      role: 'Customer Success Champion',
      avatar: HeadphonesIcon,
      tagline: 'Delivers exceptional support that keeps customers coming back',
      features: [
        'Instant issue resolution',
        'Proactive check-ins',
        'Escalation management',
        'Satisfaction tracking'
      ],
      stats: {
        availability: '2min Response',
        performance: '89% Resolution',
        cost: '$297/month'
      },
      gradient: 'from-green-500 to-teal-600'
    },
    {
      name: 'Marcus',
      role: 'Operations Manager',
      avatar: Settings,
      tagline: 'Streamlines workflows and eliminates operational bottlenecks',
      features: [
        'Process automation',
        'Quality assurance',
        'Performance tracking',
        'Workflow optimization'
      ],
      stats: {
        availability: '65% Time Saved',
        performance: '99.8% Accuracy',
        cost: '$497/month'
      },
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'Rachel',
      role: 'HR Assistant',
      avatar: Users,
      tagline: 'Revolutionizes hiring with intelligent candidate screening',
      features: [
        'Resume screening',
        'Interview scheduling',
        'Candidate communication',
        'Onboarding automation'
      ],
      stats: {
        availability: '500+ Resumes/Day',
        performance: '75% Faster Hiring',
        cost: '$397/month'
      },
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      name: 'David',
      role: 'Finance Assistant',
      avatar: Calculator,
      tagline: 'Ensures financial accuracy with zero-error processing',
      features: [
        'Invoice processing',
        'Expense tracking',
        'Financial reporting',
        'Compliance monitoring'
      ],
      stats: {
        availability: '1000s Transactions',
        performance: '0 Errors',
        cost: '$597/month'
      },
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      name: 'Maya',
      role: 'Marketing Coordinator',
      avatar: Megaphone,
      tagline: 'Amplifies your brand with data-driven marketing excellence',
      features: [
        'Content creation',
        'Campaign management',
        'Analytics tracking',
        'Social media automation'
      ],
      stats: {
        availability: '10x Content Output',
        performance: '45% Better ROI',
        cost: '$397/month'
      },
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <>
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark-500 mb-6">
              Meet Your New AI Team: They're Not Human,{' '}
              <span className="gradient-text">They're an Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Not replacements, but force multipliers. Our AI employees handle the repetitive work 
              so your human team can focus on strategy, creativity, and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiEmployees.map((employee, index) => (
              <motion.div
                key={employee.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover group"
              >
                {/* Avatar and Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${employee.gradient}`}>
                    <employee.avatar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500">{employee.name}</h3>
                    <p className="text-gray-600 font-medium">{employee.role}</p>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {employee.tagline}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {employee.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="border-t pt-6 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Availability</span>
                    <span className="font-semibold text-dark-500">{employee.stats.availability}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Performance</span>
                    <span className="font-semibold text-secondary-600">{employee.stats.performance}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cost</span>
                    <span className="font-bold text-primary-600 text-lg">{employee.stats.cost}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleBooking(employee.name)}
                  className="w-full mt-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
                >
                  Add {employee.name} to the Team
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        employeeName={selectedEmployee}
      />
    </>
  );
};

export default SolutionSection;