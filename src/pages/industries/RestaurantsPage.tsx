import React from 'react';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  Clock, 
  Users, 
  Phone, 
  Calendar,
  ShoppingCart,
  Star,
  CheckCircle,
  TrendingUp,
  DollarSign
} from 'lucide-react';

const RestaurantsPage = () => {
  const benefits = [
    {
      icon: Phone,
      title: 'Order Management',
      description: 'Handle phone orders, online reservations, and delivery coordination seamlessly.',
      stat: '50% faster order processing'
    },
    {
      icon: Calendar,
      title: 'Reservation System',
      description: 'Manage table bookings, waitlists, and customer preferences automatically.',
      stat: '85% reduction in no-shows'
    },
    {
      icon: Users,
      title: 'Customer Service',
      description: 'Answer questions, handle complaints, and manage customer feedback 24/7.',
      stat: '90% customer satisfaction'
    },
    {
      icon: ShoppingCart,
      title: 'Inventory Tracking',
      description: 'Monitor stock levels, automate reordering, and manage supplier communications.',
      stat: '30% reduction in waste'
    }
  ];

  const useCases = [
    {
      title: 'Order Processing & Delivery',
      description: 'Streamline order taking and delivery coordination',
      features: [
        'Phone order processing and confirmation',
        'Online order management and tracking',
        'Delivery coordination and updates',
        'Payment processing and receipts'
      ]
    },
    {
      title: 'Reservation Management',
      description: 'Optimize table bookings and customer flow',
      features: [
        'Real-time table availability updates',
        'Automated reservation confirmations',
        'Waitlist management and notifications',
        'Special event and party bookings'
      ]
    },
    {
      title: 'Customer Communication',
      description: 'Maintain excellent customer relationships',
      features: [
        'Menu inquiries and recommendations',
        'Dietary restriction accommodations',
        'Feedback collection and response',
        'Loyalty program management'
      ]
    },
    {
      title: 'Operations Support',
      description: 'Streamline back-of-house operations',
      features: [
        'Staff scheduling and coordination',
        'Supplier order management',
        'Inventory tracking and alerts',
        'Health compliance monitoring'
      ]
    }
  ];

  const integrations = [
    { name: 'OpenTable', logo: '🍽️' },
    { name: 'Resy', logo: '📅' },
    { name: 'DoorDash', logo: '🚗' },
    { name: 'Uber Eats', logo: '🛵' },
    { name: 'Grubhub', logo: '🥡' },
    { name: 'Toast POS', logo: '💳' },
    { name: 'Square', logo: '⬜' },
    { name: 'Yelp', logo: '⭐' }
  ];

  const testimonial = {
    quote: "Our AI assistant handles 80% of our phone orders and reservations, allowing our staff to focus on food quality and customer experience. We've seen a 40% increase in order accuracy and customer satisfaction.",
    author: "Maria Gonzalez",
    title: "Restaurant Owner",
    company: "Bella Vista Italian Kitchen",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  };

  const roi = {
    orderAccuracy: '40% better accuracy',
    responseTime: '30sec average response',
    customerSatisfaction: '90% satisfaction rate',
    costSavings: '$2,800 monthly savings'
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Utensils className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark-500 mb-6">
              AI Employees for <span className="gradient-text">Restaurants</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Enhance customer service, streamline operations, and boost efficiency with 
              AI employees that handle orders, reservations, and customer communications 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Restaurant Demo
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">40%</div>
              <div className="text-gray-600">Better Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">85%</div>
              <div className="text-gray-600">Fewer No-Shows</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600">Order Taking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">15hrs</div>
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
              Serve More Customers with <span className="gradient-text">AI Efficiency</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI employees designed specifically for restaurant operations and customer service.
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
                className="bg-yellow-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="text-yellow-600 font-semibold">
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
              Integrates with Your <span className="gradient-text">Restaurant Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly connect with popular restaurant management and delivery platforms.
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
              Restaurant <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From order taking to customer service, AI employees handle every aspect of restaurant operations.
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
                      <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
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
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Utensils className="w-8 h-8 text-yellow-600" />
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
                  <div className="text-yellow-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-gradient-to-br from-yellow-600 to-orange-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Restaurant ROI
            </h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              Measurable improvements in efficiency, customer satisfaction, and profitability.
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
                  {key === 'orderAccuracy' && <CheckCircle className="w-8 h-8 text-yellow-200" />}
                  {key === 'responseTime' && <Clock className="w-8 h-8 text-yellow-200" />}
                  {key === 'customerSatisfaction' && <Star className="w-8 h-8 text-yellow-200" />}
                  {key === 'costSavings' && <DollarSign className="w-8 h-8 text-yellow-200" />}
                </div>
                <div className="text-3xl font-bold text-yellow-200 mb-2">
                  {value}
                </div>
                <div className="text-yellow-100 capitalize">
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
              Ready to Enhance Your Restaurant Operations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join restaurants who are already improving customer service and operational efficiency with AI employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start 14-Day Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Restaurant Demo
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

export default RestaurantsPage;