import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  HeadphonesIcon, 
  Settings, 
  Users, 
  Calculator, 
  Megaphone,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import BookingModal from '../components/BookingModal';

const AIEmployeesPage = () => {
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
      description: 'Sarah specializes in lead qualification, outbound prospecting, and nurturing potential customers through the sales funnel. She works 24/7 to ensure no lead goes unnoticed.',
      features: [
        'Responds to leads in under 60 seconds',
        'Qualifies prospects using custom criteria', 
        'Books meetings automatically',
        'Nurtures leads with personalized sequences',
        'Integrates with all major CRMs',
        'Tracks and reports on all activities'
      ],
      stats: {
        availability: '24/7 Available',
        performance: '35% More Qualified Leads',
        cost: '$397/month'
      },
      gradient: 'from-blue-500 to-purple-600',
      industries: ['Real Estate', 'Technology', 'Professional Services'],
      roi: '300% faster lead response time'
    },
    {
      name: 'Alex',
      role: 'Customer Success Champion',
      avatar: HeadphonesIcon,
      tagline: 'Delivers exceptional support that keeps customers coming back',
      description: 'Alex handles customer inquiries, resolves issues, and ensures customer satisfaction around the clock. Perfect for businesses that want to provide world-class support.',
      features: [
        'Instant issue resolution and escalation',
        'Proactive customer check-ins',
        'Onboarding new customers',
        'Satisfaction surveys and feedback',
        'Knowledge base management',
        'Multi-channel support (email, chat, phone)'
      ],
      stats: {
        availability: '2min Response Time',
        performance: '89% First-Contact Resolution',
        cost: '$297/month'
      },
      gradient: 'from-green-500 to-teal-600',
      industries: ['E-commerce', 'Healthcare', 'Technology'],
      roi: '60% reduction in support costs'
    },
    {
      name: 'Marcus',
      role: 'Operations Manager',
      avatar: Settings,
      tagline: 'Streamlines workflows and eliminates operational bottlenecks',
      description: 'Marcus automates routine operations, manages workflows, and ensures everything runs smoothly. He\'s perfect for businesses looking to optimize their processes.',
      features: [
        'Process automation and optimization',
        'Quality assurance and monitoring',
        'Performance tracking and reporting',
        'Workflow coordination',
        'Resource allocation',
        'Compliance monitoring'
      ],
      stats: {
        availability: '65% Time Saved',
        performance: '99.8% Accuracy Rate',
        cost: '$497/month'
      },
      gradient: 'from-orange-500 to-red-600',
      industries: ['Manufacturing', 'Construction', 'Professional Services'],
      roi: '55% reduction in operational overhead'
    },
    {
      name: 'Rachel',
      role: 'HR Assistant',
      avatar: Users,
      tagline: 'Revolutionizes hiring with intelligent candidate screening',
      description: 'Rachel streamlines your hiring process by screening candidates, scheduling interviews, and managing onboarding. She helps you find the best talent faster.',
      features: [
        'Resume screening and ranking',
        'Interview scheduling coordination',
        'Candidate communication',
        'Onboarding automation',
        'Employee data management',
        'Compliance tracking'
      ],
      stats: {
        availability: '500+ Resumes/Day',
        performance: '75% Faster Hiring',
        cost: '$397/month'
      },
      gradient: 'from-pink-500 to-rose-600',
      industries: ['Technology', 'Healthcare', 'Professional Services'],
      roi: '40% reduction in time-to-hire'
    },
    {
      name: 'David',
      role: 'Finance Assistant',
      avatar: Calculator,
      tagline: 'Ensures financial accuracy with zero-error processing',
      description: 'David handles invoicing, expense tracking, and financial reporting with perfect accuracy. He keeps your books clean and your cash flow healthy.',
      features: [
        'Automated invoice processing',
        'Expense tracking and categorization',
        'Financial reporting and analytics',
        'Compliance monitoring',
        'Payment processing',
        'Budget tracking and alerts'
      ],
      stats: {
        availability: '1000s Transactions/Day',
        performance: '0 Processing Errors',
        cost: '$597/month'
      },
      gradient: 'from-indigo-500 to-blue-600',
      industries: ['Professional Services', 'E-commerce', 'Real Estate'],
      roi: '70% faster invoice processing'
    },
    {
      name: 'Maya',
      role: 'Marketing Coordinator',
      avatar: Megaphone,
      tagline: 'Amplifies your brand with data-driven marketing excellence',
      description: 'Maya creates content, manages campaigns, and analyzes performance to grow your brand. She ensures your marketing efforts are always optimized.',
      features: [
        'Content creation and curation',
        'Campaign management and optimization',
        'Social media automation',
        'Analytics tracking and reporting',
        'Lead nurturing sequences',
        'A/B testing and optimization'
      ],
      stats: {
        availability: '10x Content Output',
        performance: '45% Better ROI',
        cost: '$397/month'
      },
      gradient: 'from-purple-500 to-pink-600',
      industries: ['Creative Agencies', 'E-commerce', 'Technology'],
      roi: '200% increase in marketing efficiency'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'AI employees never sleep, take breaks, or call in sick'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Save 60-80% compared to hiring human employees'
    },
    {
      icon: TrendingUp,
      title: 'Instant Scaling',
      description: 'Add or remove AI employees instantly as needs change'
    },
    {
      icon: CheckCircle,
      title: 'Perfect Accuracy',
      description: 'Consistent performance with zero human error'
    }
  ];

  return (
    <>
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
                Meet Your New <span className="gradient-text">AI Employees</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                Hire specialized AI employees that work 24/7, never take breaks, and deliver 
                superhuman results. Each AI employee is trained for specific roles and ready to start immediately.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
                  <div className="text-gray-600">AI Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">24/7</div>
                  <div className="text-gray-600">Always Working</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">60%</div>
                  <div className="text-gray-600">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">24hrs</div>
                  <div className="text-gray-600">Setup Time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
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
                Why Choose <span className="gradient-text">AI Employees?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-500 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Employees Grid */}
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
                Choose Your <span className="gradient-text">AI Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each AI employee is specialized for specific roles and trained to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiEmployees.map((employee, index) => (
                <motion.div
                  key={employee.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg card-hover group"
                >
                  {/* Header */}
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
                  <p className="text-lg text-gray-700 mb-4 font-medium">
                    {employee.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {employee.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark-500 mb-4">Key Capabilities:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {employee.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="border-t pt-6 mb-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="font-semibold text-dark-500 text-sm">{employee.stats.availability}</div>
                        <div className="text-xs text-gray-500">Availability</div>
                      </div>
                      <div>
                        <div className="font-semibold text-secondary-600 text-sm">{employee.stats.performance}</div>
                        <div className="text-xs text-gray-500">Performance</div>
                      </div>
                      <div>
                        <div className="font-bold text-primary-600">{employee.stats.cost}</div>
                        <div className="text-xs text-gray-500">Monthly Cost</div>
                      </div>
                    </div>
                  </div>

                  {/* Industries & ROI */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {employee.industries.map((industry, industryIndex) => (
                        <span
                          key={industryIndex}
                          className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-secondary-600 font-medium">
                      ROI: {employee.roi}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleBooking(employee.name)}
                    className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Hire {employee.name}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Build Your AI Team?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
                Start with one AI employee or build a complete team. No contracts, no setup fees, cancel anytime.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="btn-primary bg-white text-primary-600 hover:bg-gray-50"
                >
                  Start 14-Day Free Trial
                </button>
                <button className="btn-secondary border-white text-white hover:bg-white/10">
                  Schedule Demo
                </button>
              </div>

              <p className="text-blue-200 mt-6">
                No credit card required • Setup in 24 hours • Cancel anytime
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        employeeName={selectedEmployee}
      />
    </>
  );
};

export default AIEmployeesPage;