import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Clock, 
  Shield, 
  Users, 
  Calendar,
  FileText,
  Phone,
  CheckCircle,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

const HealthcarePage = () => {
  const benefits = [
    {
      icon: Calendar,
      title: 'Automated Appointment Scheduling',
      description: 'Reduce no-shows and optimize schedules with intelligent appointment management.',
      stat: '85% reduction in no-shows'
    },
    {
      icon: Phone,
      title: 'Patient Communication',
      description: 'Automated reminders, follow-ups, and health education messaging.',
      stat: '90% patient satisfaction'
    },
    {
      icon: FileText,
      title: 'Insurance Verification',
      description: 'Streamline insurance verification and prior authorization processes.',
      stat: '70% faster processing'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'All AI employees are trained on healthcare privacy and security requirements.',
      stat: '100% HIPAA compliant'
    }
  ];

  const useCases = [
    {
      title: 'Patient Intake & Registration',
      description: 'Automate patient onboarding and data collection processes',
      features: [
        'Digital intake form completion',
        'Insurance verification and eligibility',
        'Medical history collection',
        'Appointment scheduling and confirmation'
      ]
    },
    {
      title: 'Appointment Management',
      description: 'Optimize scheduling and reduce administrative burden',
      features: [
        'Automated appointment reminders',
        'Rescheduling and cancellation handling',
        'Waitlist management',
        'Provider schedule optimization'
      ]
    },
    {
      title: 'Patient Follow-up',
      description: 'Maintain continuous care with automated follow-up protocols',
      features: [
        'Post-visit satisfaction surveys',
        'Medication adherence reminders',
        'Care plan follow-up',
        'Preventive care scheduling'
      ]
    },
    {
      title: 'Administrative Support',
      description: 'Reduce administrative overhead and improve efficiency',
      features: [
        'Prior authorization requests',
        'Claims processing support',
        'Billing inquiries and payment processing',
        'Referral coordination'
      ]
    }
  ];

  const complianceFeatures = [
    {
      title: 'HIPAA Compliance',
      description: 'Full compliance with healthcare privacy regulations',
      icon: Shield
    },
    {
      title: 'Data Encryption',
      description: 'End-to-end encryption for all patient data',
      icon: FileText
    },
    {
      title: 'Audit Trails',
      description: 'Complete logging of all patient interactions',
      icon: Users
    },
    {
      title: 'Access Controls',
      description: 'Role-based access to patient information',
      icon: AlertTriangle
    }
  ];

  const testimonial = {
    quote: "Legion AI has revolutionized our patient communication. Our AI assistant handles appointment scheduling and reminders, reducing no-shows by 85% and freeing our staff to focus on patient care.",
    author: "Dr. Sarah Williams",
    title: "Practice Manager",
    company: "Wellness Medical Group",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  };

  const roi = {
    adminReduction: '70% admin overhead',
    patientSatisfaction: '90% satisfaction rate',
    timesSaved: '20 hours per week',
    costSavings: '$4,500 monthly'
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 to-pink-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark-500 mb-6">
              AI Employees for <span className="gradient-text">Healthcare</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Streamline patient communication, appointment management, and administrative tasks 
              while maintaining the highest standards of privacy and compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Healthcare Demo
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">70%</div>
              <div className="text-gray-600">Admin Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">85%</div>
              <div className="text-gray-600">Fewer No-Shows</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Patient Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">HIPAA Compliant</div>
            </div>
          </div>
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
              Improve Patient Care with <span className="gradient-text">AI Automation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI employees designed specifically for healthcare workflows and compliance requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-red-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="text-red-600 font-semibold">
                      {benefit.stat}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
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
              <span className="gradient-text">Security & Compliance</span> First
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built from the ground up with healthcare privacy and security requirements in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-500 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Healthcare <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From patient intake to follow-up care, AI employees handle administrative tasks seamlessly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-dark-500 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              
              <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-dark-500">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                  <div className="text-red-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Healthcare ROI
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Measurable improvements in efficiency, patient satisfaction, and cost savings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(roi).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {key === 'adminReduction' && <FileText className="w-8 h-8 text-red-200" />}
                  {key === 'patientSatisfaction' && <Heart className="w-8 h-8 text-red-200" />}
                  {key === 'timesSaved' && <Clock className="w-8 h-8 text-red-200" />}
                  {key === 'costSavings' && <TrendingUp className="w-8 h-8 text-red-200" />}
                </div>
                <div className="text-3xl font-bold text-red-200 mb-2">
                  {value}
                </div>
                <div className="text-red-100 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark-500 mb-6">
              Ready to Improve Patient Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join healthcare providers who are already improving efficiency and patient satisfaction with AI employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start 14-Day Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Healthcare Demo
              </button>
            </div>

            <p className="text-gray-500 mt-6">
              HIPAA compliant • Setup in 24 hours • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;