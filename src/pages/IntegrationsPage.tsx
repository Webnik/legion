import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Users
} from 'lucide-react';

const IntegrationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Integrations', count: 200 },
    { id: 'crm', name: 'CRM', count: 25 },
    { id: 'communication', name: 'Communication', count: 30 },
    { id: 'project-management', name: 'Project Management', count: 20 },
    { id: 'finance', name: 'Finance & Accounting', count: 18 },
    { id: 'marketing', name: 'Marketing', count: 22 },
    { id: 'ecommerce', name: 'E-commerce', count: 15 },
    { id: 'hr', name: 'HR & Recruiting', count: 12 },
    { id: 'analytics', name: 'Analytics', count: 16 },
    { id: 'productivity', name: 'Productivity', count: 25 },
    { id: 'support', name: 'Customer Support', count: 17 }
  ];

  const integrations = [
    {
      name: 'Salesforce',
      category: 'crm',
      description: 'Sync leads, contacts, and opportunities automatically',
      logo: '🏢',
      popular: true,
      features: ['Two-way sync', 'Real-time updates', 'Custom fields', 'Workflow automation'],
      setupTime: '5 minutes'
    },
    {
      name: 'HubSpot',
      category: 'crm',
      description: 'Complete CRM integration with marketing automation',
      logo: '🎯',
      popular: true,
      features: ['Lead scoring', 'Email sequences', 'Deal tracking', 'Contact management'],
      setupTime: '3 minutes'
    },
    {
      name: 'Slack',
      category: 'communication',
      description: 'Get notifications and updates directly in your channels',
      logo: '💬',
      popular: true,
      features: ['Channel notifications', 'Direct messages', 'File sharing', 'Bot commands'],
      setupTime: '2 minutes'
    },
    {
      name: 'Microsoft Teams',
      category: 'communication',
      description: 'Seamless integration with your Microsoft ecosystem',
      logo: '🔷',
      popular: false,
      features: ['Team notifications', 'Meeting scheduling', 'File collaboration', 'Chat integration'],
      setupTime: '4 minutes'
    },
    {
      name: 'Gmail',
      category: 'communication',
      description: 'Automate email responses and follow-ups',
      logo: '📧',
      popular: true,
      features: ['Auto-responses', 'Email templates', 'Follow-up sequences', 'Contact sync'],
      setupTime: '3 minutes'
    },
    {
      name: 'Asana',
      category: 'project-management',
      description: 'Create and manage tasks automatically',
      logo: '📋',
      popular: false,
      features: ['Task creation', 'Project tracking', 'Team collaboration', 'Progress updates'],
      setupTime: '5 minutes'
    },
    {
      name: 'Trello',
      category: 'project-management',
      description: 'Organize workflows with automated board management',
      logo: '📌',
      popular: false,
      features: ['Card automation', 'Board sync', 'Label management', 'Due date tracking'],
      setupTime: '3 minutes'
    },
    {
      name: 'QuickBooks',
      category: 'finance',
      description: 'Automate invoicing and expense tracking',
      logo: '💰',
      popular: true,
      features: ['Invoice automation', 'Expense tracking', 'Payment processing', 'Financial reporting'],
      setupTime: '10 minutes'
    },
    {
      name: 'Stripe',
      category: 'finance',
      description: 'Handle payments and subscription management',
      logo: '💳',
      popular: true,
      features: ['Payment processing', 'Subscription billing', 'Customer management', 'Revenue tracking'],
      setupTime: '7 minutes'
    },
    {
      name: 'Mailchimp',
      category: 'marketing',
      description: 'Automate email marketing campaigns',
      logo: '🐵',
      popular: true,
      features: ['Email campaigns', 'Audience segmentation', 'A/B testing', 'Analytics tracking'],
      setupTime: '5 minutes'
    },
    {
      name: 'Shopify',
      category: 'ecommerce',
      description: 'Manage orders, inventory, and customer service',
      logo: '🛍️',
      popular: true,
      features: ['Order management', 'Inventory sync', 'Customer support', 'Product updates'],
      setupTime: '8 minutes'
    },
    {
      name: 'Zendesk',
      category: 'support',
      description: 'Automate customer support ticket management',
      logo: '🎧',
      popular: false,
      features: ['Ticket routing', 'Auto-responses', 'Escalation rules', 'Customer history'],
      setupTime: '6 minutes'
    }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularIntegrations = integrations.filter(integration => integration.popular);

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
              Connect with <span className="gradient-text">Everything</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Seamlessly integrate Legion AI with 200+ tools and platforms. 
              No disruption to your existing workflows—just enhanced productivity.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
                <div className="text-gray-600">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">5 min</div>
                <div className="text-gray-600">Average Setup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">24/7</div>
                <div className="text-gray-600">Sync</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Integrations */}
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
              Most <span className="gradient-text">Popular</span> Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started quickly with the tools your team already uses every day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{integration.logo}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-dark-500">{integration.name}</h3>
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                    <p className="text-gray-600">{integration.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {integration.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{integration.setupTime} setup</span>
                  </div>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>

                <button className="w-full btn-primary group-hover:scale-105 transition-transform duration-300">
                  Connect {integration.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Integrations */}
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
              All Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our complete library of integrations by category.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 6).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{integration.logo}</div>
                  <div>
                    <h3 className="font-bold text-dark-500 group-hover:text-primary-600 transition-colors duration-300">
                      {integration.name}
                    </h3>
                    {integration.popular && (
                      <span className="text-xs text-yellow-600 font-medium">Popular</span>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {integration.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{integration.setupTime}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No integrations found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Our <span className="gradient-text">Integrations</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Quick Setup',
                description: 'Most integrations take less than 5 minutes to configure'
              },
              {
                icon: Shield,
                title: 'Secure & Reliable',
                description: 'Enterprise-grade security with 99.9% uptime guarantee'
              },
              {
                icon: Clock,
                title: 'Real-time Sync',
                description: 'Data syncs instantly across all your connected tools'
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: 'Our team helps you optimize your integration setup'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
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
              Don't See Your Tool?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              We're constantly adding new integrations. Request yours and we'll prioritize it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
                Request Integration
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                View API Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationsPage;