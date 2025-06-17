import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  Clock, 
  Users, 
  FileText, 
  Search,
  Calendar,
  Shield,
  CheckCircle,
  TrendingUp,
  DollarSign,
  BookOpen
} from 'lucide-react';

const LegalPage = () => {
  const benefits = [
    {
      icon: Search,
      title: 'Legal Research',
      description: 'Conduct comprehensive legal research, case law analysis, and precedent identification.',
      stat: '75% faster research'
    },
    {
      icon: FileText,
      title: 'Document Review',
      description: 'Review contracts, analyze documents, and identify key terms and potential issues.',
      stat: '60% faster document review'
    },
    {
      icon: Users,
      title: 'Client Communication',
      description: 'Manage client intake, schedule consultations, and provide case updates.',
      stat: '90% client satisfaction'
    },
    {
      icon: Calendar,
      title: 'Case Management',
      description: 'Track deadlines, manage court filings, and coordinate case activities.',
      stat: '50% better organization'
    }
  ];

  const useCases = [
    {
      title: 'Legal Research & Analysis',
      description: 'Accelerate legal research and case preparation',
      features: [
        'Case law research and analysis',
        'Statute and regulation review',
        'Precedent identification and comparison',
        'Legal brief preparation assistance'
      ]
    },
    {
      title: 'Document Management',
      description: 'Streamline document review and contract analysis',
      features: [
        'Contract review and analysis',
        'Due diligence document organization',
        'Compliance document tracking',
        'Legal document drafting assistance'
      ]
    },
    {
      title: 'Client Relations',
      description: 'Enhance client communication and case management',
      features: [
        'Client intake and onboarding',
        'Appointment scheduling and reminders',
        'Case status updates and communication',
        'Billing and invoice management'
      ]
    },
    {
      title: 'Practice Management',
      description: 'Optimize law firm operations and efficiency',
      features: [
        'Court filing and deadline tracking',
        'Time tracking and billing automation',
        'Conflict checking and case assignment',
        'Regulatory compliance monitoring'
      ]
    }
  ];

  const integrations = [
    { name: 'Westlaw', logo: '⚖️' },
    { name: 'LexisNexis', logo: '📚' },
    { name: 'Clio', logo: '💼' },
    { name: 'MyCase', logo: '📋' },
    { name: 'PracticePanther', logo: '🐾' },
    { name: 'TimeSolv', logo: '⏰' },
    { name: 'NetDocuments', logo: '📄' },
    { name: 'iManage', logo: '🗂️' }
  ];

  const testimonial = {
    quote: "Our AI legal assistant has transformed our practice. Legal research that used to take hours now takes minutes, and our document review process is 60% faster. It's like having a dedicated research associate working around the clock.",
    author: "Sarah Williams",
    title: "Partner",
    company: "Williams & Associates Law Firm",
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  };

  const roi = {
    researchSpeed: '75% faster research',
    documentReview: '60% faster review',
    clientSatisfaction: '90% satisfaction rate',
    costSavings: '$6,200 monthly savings'
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Scale className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark-500 mb-6">
              AI Employees for <span className="gradient-text">Legal Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Accelerate legal research, streamline document review, and enhance client service 
              with AI employees that understand legal workflows and compliance requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Legal Demo
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">75%</div>
              <div className="text-gray-600">Faster Research</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">60%</div>
              <div className="text-gray-600">Faster Review</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Legal Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">25hrs</div>
              <div className="text-gray-600">Saved Weekly</div>
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
              Practice Law with <span className="gradient-text">AI Precision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI employees designed specifically for legal research, document review, and case management.
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
                className="bg-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="text-indigo-600 font-semibold">
                      {benefit.stat}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
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
              Integrates with Your <span className="gradient-text">Legal Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly connect with popular legal research, case management, and document platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3">{integration.logo}</div>
                <div className="font-semibold text-dark-500 text-sm">{integration.name}</div>
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
              Legal <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From research to case management, AI employees enhance every aspect of legal practice.
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
                      <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
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
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Scale className="w-8 h-8 text-indigo-600" />
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
                  <div className="text-indigo-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Legal Services ROI
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Measurable improvements in research speed, document review efficiency, and client satisfaction.
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
                  {key === 'researchSpeed' && <Search className="w-8 h-8 text-indigo-200" />}
                  {key === 'documentReview' && <FileText className="w-8 h-8 text-indigo-200" />}
                  {key === 'clientSatisfaction' && <Users className="w-8 h-8 text-indigo-200" />}
                  {key === 'costSavings' && <DollarSign className="w-8 h-8 text-indigo-200" />}
                </div>
                <div className="text-3xl font-bold text-indigo-200 mb-2">
                  {value}
                </div>
                <div className="text-indigo-100 capitalize">
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
              Ready to Enhance Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join law firms who are already improving efficiency and client service with AI employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start 14-Day Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Legal Demo
              </button>
            </div>

            <p className="text-gray-500 mt-6">
              No credit card required • Setup in 24 hours • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;