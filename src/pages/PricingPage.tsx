import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const individualEmployees = [
    {
      name: 'Sarah',
      role: 'Sales Development Partner',
      price: { monthly: 397, annual: 318 },
      features: ['Lead qualification', 'Email automation', 'CRM integration', 'Meeting scheduling']
    },
    {
      name: 'Alex', 
      role: 'Customer Success Champion',
      price: { monthly: 297, annual: 238 },
      features: ['24/7 support', 'Issue resolution', 'Customer onboarding', 'Satisfaction tracking']
    },
    {
      name: 'Marcus',
      role: 'Operations Manager', 
      price: { monthly: 497, annual: 398 },
      features: ['Process automation', 'Quality assurance', 'Performance tracking', 'Workflow optimization']
    },
    {
      name: 'Rachel',
      role: 'HR Assistant',
      price: { monthly: 397, annual: 318 },
      features: ['Resume screening', 'Interview scheduling', 'Candidate communication', 'Onboarding automation']
    },
    {
      name: 'David',
      role: 'Finance Assistant',
      price: { monthly: 597, annual: 478 },
      features: ['Invoice processing', 'Expense tracking', 'Financial reporting', 'Compliance monitoring']
    },
    {
      name: 'Maya',
      role: 'Marketing Coordinator',
      price: { monthly: 397, annual: 318 },
      features: ['Content creation', 'Campaign management', 'Analytics tracking', 'Social media automation']
    }
  ];

  const teamPackages = [
    {
      name: 'Starter Team',
      price: { monthly: 897, annual: 718 },
      employees: 3,
      description: 'Perfect for small businesses getting started with AI',
      features: [
        '3 AI Employees of your choice',
        'Basic integrations',
        'Email support',
        'Monthly performance reports',
        'Standard onboarding'
      ],
      popular: false
    },
    {
      name: 'Growth Team',
      price: { monthly: 1397, annual: 1118 },
      employees: 5,
      description: 'Ideal for growing companies ready to scale',
      features: [
        '5 AI Employees of your choice',
        'Advanced integrations',
        'Priority support',
        'Weekly performance reports',
        'Custom workflow setup',
        'Dedicated success manager'
      ],
      popular: true
    },
    {
      name: 'Scale Team',
      price: { monthly: 2497, annual: 1998 },
      employees: 10,
      description: 'For established businesses seeking maximum efficiency',
      features: [
        '10 AI Employees of your choice',
        'Enterprise integrations',
        '24/7 phone support',
        'Daily performance reports',
        'Custom AI training',
        'Dedicated success manager',
        'Priority feature requests'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', annual: 'Custom' },
      employees: 'Unlimited',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited AI Employees',
        'Custom integrations',
        'White-glove support',
        'Real-time analytics',
        'Custom AI development',
        'Dedicated account team',
        'SLA guarantees',
        'Custom contract terms'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-dark-500 mb-6">
              Transparent Pricing, <span className="gradient-text">Incredible Value</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Hire individual AI employees or build a complete team. No hidden fees, no surprises.
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`font-medium ${!isAnnual ? 'text-dark-500' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                  isAnnual ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    isAnnual ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`font-medium ${isAnnual ? 'text-dark-500' : 'text-gray-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Individual AI Employees */}
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
              Individual AI Employees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build your perfect team by selecting the AI employees you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualEmployees.map((employee, index) => (
              <motion.div
                key={employee.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-dark-500 mb-2">{employee.name}</h3>
                  <p className="text-gray-600 font-medium mb-4">{employee.role}</p>
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    ${isAnnual ? employee.price.annual : employee.price.monthly}
                    <span className="text-lg text-gray-500 font-normal">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-secondary-600 font-medium">
                      Billed annually (${employee.price.annual * 12})
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {employee.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-primary">
                  Add {employee.name} to the Team
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Packages */}
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
              Team Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pre-configured teams designed for different business sizes and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamPackages.map((package_, index) => (
              <motion.div
                key={package_.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${
                  package_.popular
                    ? 'border-2 border-primary-500 shadow-xl scale-105'
                    : 'border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg'
                }`}
              >
                {package_.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-dark-500 mb-2">{package_.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{package_.description}</p>
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {typeof package_.price.monthly === 'string' ? (
                      package_.price.monthly
                    ) : (
                      <>
                        ${isAnnual ? package_.price.annual : package_.price.monthly}
                        <span className="text-lg text-gray-500 font-normal">/month</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {typeof package_.employees === 'string' 
                      ? package_.employees + ' AI Employees'
                      : package_.employees + ' AI Employees'
                    }
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {package_.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  package_.popular
                    ? 'btn-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}>
                  {package_.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
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
              What's Included
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Unlimited task automation',
              '200+ tool integrations',
              'Real-time performance analytics',
              '24/7 AI availability',
              'Custom workflow setup',
              'Dedicated onboarding',
              'Regular performance reports',
              'Continuous AI training',
              'Data security & compliance'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-secondary-100 rounded-lg">
                  <Zap className="w-5 h-5 text-secondary-600" />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;