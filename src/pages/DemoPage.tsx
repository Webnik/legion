import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, Users, Zap, TrendingUp } from 'lucide-react';

const DemoPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    employees: '',
    industry: '',
    interests: [],
    challenges: '',
    preferredTime: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const industries = [
    'Real Estate', 'Healthcare', 'E-commerce', 'Professional Services',
    'Education', 'Automotive', 'Restaurants', 'Construction',
    'Creative Agencies', 'Manufacturing', 'Legal', 'Technology', 'Other'
  ];

  const aiEmployees = [
    'Sarah - Sales Development',
    'Alex - Customer Success',
    'Marcus - Operations',
    'Rachel - HR Assistant',
    'David - Finance',
    'Maya - Marketing'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(item => item !== value)
        : [...prev.interests, value]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
              See Your <span className="gradient-text">AI Team</span> in Action
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Get a personalized demo tailored to your industry and business needs. 
              See exactly how AI employees can transform your operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <Calendar className="w-6 h-6 text-primary-600" />
                <span className="text-gray-700 font-medium">30-minute demo</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Users className="w-6 h-6 text-secondary-600" />
                <span className="text-gray-700 font-medium">Personalized for your industry</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Zap className="w-6 h-6 text-purple-600" />
                <span className="text-gray-700 font-medium">Live AI interaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-light-100 rounded-2xl p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">
                      Step {currentStep} of {totalSteps}
                    </span>
                    <span className="text-sm font-medium text-primary-600">
                      {Math.round((currentStep / totalSteps) * 100)}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Contact Information */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold text-dark-500 mb-6">
                        Contact Information
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Title *
                          </label>
                          <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Company Details */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold text-dark-500 mb-6">
                        Company Details
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Size
                          </label>
                          <select
                            name="employees"
                            value={formData.employees}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-1000">201-1000 employees</option>
                            <option value="1000+">1000+ employees</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Industry
                          </label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select industry</option>
                            {industries.map(industry => (
                              <option key={industry} value={industry}>{industry}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-4">
                          Which AI employees interest you most? (Select all that apply)
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {aiEmployees.map(employee => (
                            <label key={employee} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={formData.interests.includes(employee)}
                                onChange={() => handleCheckboxChange(employee)}
                                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                              />
                              <span className="ml-3 text-gray-700">{employee}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What are your biggest operational challenges?
                        </label>
                        <textarea
                          name="challenges"
                          value={formData.challenges}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Tell us about the repetitive tasks or bottlenecks your team faces..."
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Schedule Demo */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-bold text-dark-500 mb-6">
                        Schedule Your Demo
                      </h2>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Demo Time
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select preferred time</option>
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                          <option value="evening">Evening (5 PM - 7 PM)</option>
                          <option value="flexible">I'm flexible</option>
                        </select>
                      </div>

                      <div className="bg-primary-50 rounded-lg p-6 mb-6">
                        <h3 className="font-semibold text-dark-500 mb-4">What to Expect in Your Demo:</h3>
                        <ul className="space-y-2">
                          {[
                            'Personalized walkthrough of AI employees for your industry',
                            'Live demonstration of key features and capabilities',
                            'ROI calculation specific to your business',
                            'Q&A session with our AI experts',
                            'Custom implementation roadmap'
                          ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      >
                        Previous
                      </button>
                    )}
                    
                    {currentStep < totalSteps ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary ml-auto"
                      >
                        Next Step
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn-primary ml-auto"
                      >
                        Schedule Demo
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>

            {/* What to Expect */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-dark-500 mb-6">
                  Why Schedule a Demo?
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Every business is unique. Our personalized demo shows you exactly how 
                  AI employees can solve your specific challenges and drive measurable results.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: 'Industry-Specific Solutions',
                    description: 'See AI employees trained for your specific industry and use cases.'
                  },
                  {
                    icon: TrendingUp,
                    title: 'ROI Calculation',
                    description: 'Get a detailed breakdown of potential time and cost savings.'
                  },
                  {
                    icon: Zap,
                    title: 'Live AI Interaction',
                    description: 'Watch AI employees handle real tasks in real-time.'
                  },
                  {
                    icon: Clock,
                    title: 'Implementation Timeline',
                    description: 'Learn how quickly you can get started and see results.'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-dark-500 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-xl p-6">
                <h3 className="font-semibold text-dark-500 mb-3">
                  🎯 Demo Success Rate
                </h3>
                <p className="text-gray-600 mb-4">
                  95% of companies that see our demo move forward with implementation within 30 days.
                </p>
                <div className="text-2xl font-bold text-primary-600">
                  Average ROI: 340%
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;