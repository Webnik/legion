import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Clock, 
  Users, 
  FileText, 
  Calendar,
  Megaphone,
  Camera,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Star
} from 'lucide-react';

const CreativeAgenciesPage = () => {
  const benefits = [
    {
      icon: FileText,
      title: 'Content Creation',
      description: 'Generate briefs, copy, and content ideas while maintaining brand consistency.',
      stat: '300% faster content production'
    },
    {
      icon: Users,
      title: 'Client Management',
      description: 'Handle client communications, feedback, and project updates seamlessly.',
      stat: '90% client satisfaction'
    },
    {
      icon: Calendar,
      title: 'Project Coordination',
      description: 'Manage timelines, resources, and deliverables across multiple campaigns.',
      stat: '40% faster project delivery'
    },
    {
      icon: Megaphone,
      title: 'Campaign Management',
      description: 'Track performance, optimize campaigns, and generate detailed reports.',
      stat: '60% better campaign ROI'
    }
  ];

  const useCases = [
    {
      title: 'Creative Project Management',
      description: 'Streamline creative workflows and project coordination',
      features: [
        'Brief creation and approval workflows',
        'Creative asset organization and versioning',
        'Timeline management and milestone tracking',
        'Resource allocation and capacity planning'
      ]
    },
    {
      title: 'Client Communication',
      description: 'Maintain excellent client relationships and transparency',
      features: [
        'Regular project updates and status reports',
        'Feedback collection and consolidation',
        'Presentation scheduling and coordination',
        'Invoice and contract management'
      ]
    },
    {
      title: 'Content & Campaign Support',
      description: 'Enhance creative output and campaign effectiveness',
      features: [
        'Content ideation and brief development',
        'Brand guideline compliance checking',
        'Campaign performance tracking',
        'Competitive analysis and insights'
      ]
    },
    {
      title: 'Business Operations',
      description: 'Optimize agency operations and growth',
      features: [
        'Lead qualification and new business support',
        'Proposal creation and follow-up',
        'Team scheduling and coordination',
        'Performance analytics and reporting'
      ]
    }
  ];

  const integrations = [
    { name: 'Adobe Creative', logo: '🎨' },
    { name: 'Figma', logo: '🎯' },
    { name: 'Slack', logo: '💬' },
    { name: 'Asana', logo: '📋' },
    { name: 'Monday.com', logo: '📅' },
    { name: 'Google Workspace', logo: '📄' },
    { name: 'Dropbox', logo: '📦' },
    { name: 'Canva', logo: '✨' }
  ];

  const testimonial = {
    quote: "Our AI creative coordinator has transformed how we manage client projects. We're delivering campaigns 40% faster while maintaining our creative quality. It's like having a dedicated project manager for every account.",
    author: "Jessica Martinez",
    title: "Creative Director",
    company: "Spark Creative Agency",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  };

  const roi = {
    contentProduction: '300% faster production',
    projectDelivery: '40% faster delivery',
    clientSatisfaction: '90% satisfaction rate',
    campaignROI: '60% better ROI'
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-pink-50 to-purple-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Palette className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark-500 mb-6">
              AI Employees for <span className="gradient-text">Creative Agencies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Amplify your creative output, streamline client management, and optimize campaign performance 
              with AI employees that understand the creative process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Creative Demo
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">300%</div>
              <div className="text-gray-600">Faster Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">40%</div>
              <div className="text-gray-600">Faster Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600">Project Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">25hrs</div>
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
              Create More with <span className="gradient-text">AI Efficiency</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI employees designed specifically for creative agency workflows and client management.
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
                className="bg-pink-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="text-pink-600 font-semibold">
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
              Integrates with Your <span className="gradient-text">Creative Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly connect with popular design, project management, and collaboration tools.
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
              Creative Agency <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From project management to campaign optimization, AI employees enhance every aspect of agency operations.
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
                      <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
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
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Palette className="w-8 h-8 text-pink-600" />
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
                  <div className="text-pink-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-gradient-to-br from-pink-600 to-purple-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Creative Agency ROI
            </h2>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Measurable improvements in productivity, client satisfaction, and campaign performance.
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
                  {key === 'contentProduction' && <FileText className="w-8 h-8 text-pink-200" />}
                  {key === 'projectDelivery' && <Clock className="w-8 h-8 text-pink-200" />}
                  {key === 'clientSatisfaction' && <Star className="w-8 h-8 text-pink-200" />}
                  {key === 'campaignROI' && <TrendingUp className="w-8 h-8 text-pink-200" />}
                </div>
                <div className="text-3xl font-bold text-pink-200 mb-2">
                  {value}
                </div>
                <div className="text-pink-100 capitalize">
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
              Ready to Amplify Your Creative Output?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join creative agencies who are already improving productivity and client satisfaction with AI employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start 14-Day Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Creative Demo
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

export default CreativeAgenciesPage;