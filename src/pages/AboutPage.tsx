import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Heart, Award, Globe, TrendingUp, Zap } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Augmentation, Not Replacement',
      description: 'We believe AI should enhance human capabilities, not replace them. Our mission is to free people from repetitive tasks so they can focus on creativity, strategy, and meaningful work.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Users,
      title: 'Human-Centered Design',
      
      description: 'Every AI employee is designed with human collaboration in mind. We prioritize intuitive interfaces, clear communication, and seamless handoffs between AI and human team members.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Innovation',
      description: 'We\'re constantly pushing the boundaries of what\'s possible with AI. Our team is dedicated to staying at the forefront of technology while maintaining reliability and trust.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Customer Success First',
      description: 'Your success is our success. We measure our impact by the time you save, the costs you reduce, and the growth you achieve with our AI employees.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'Legion AI was founded with a vision to democratize AI for businesses of all sizes.'
    },
    {
      year: '2023',
      title: 'First AI Employee Launched',
      description: 'Sarah, our first AI Sales Development Partner, helped 100+ companies improve their lead generation.'
    },
    {
      year: '2023',
      title: 'Series A Funding',
      description: 'Raised $15M to expand our AI employee capabilities and serve more industries.'
    },
    {
      year: '2024',
      title: '500+ Companies Served',
      description: 'Reached the milestone of serving over 500 companies across 12 different industries.'
    },
    {
      year: '2024',
      title: 'Enterprise Platform Launch',
      description: 'Launched our enterprise-grade platform with advanced security and compliance features.'
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Companies Served' },
    { icon: Globe, number: '12', label: 'Industries' },
    { icon: TrendingUp, number: '2M+', label: 'Tasks Automated' },
    { icon: Zap, number: '65%', label: 'Average Cost Savings' }
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
              We're Building the <span className="gradient-text">Future of Work</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              At Legion AI, we believe the future of work isn't about replacing humans with machines—it's about 
              empowering people to do their best work by handling the tasks that drain their time and energy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary-100 rounded-xl">
                      <stat.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-dark-500 mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Legion AI was born from a simple observation: talented people were spending too much time 
                  on repetitive tasks that could be automated, while struggling to find time for the creative, 
                  strategic work that truly drives business growth.
                </p>
                <p>
                  Our founders, having experienced this frustration firsthand in their previous companies, 
                  set out to create AI employees that could handle the mundane while empowering humans to 
                  focus on what they do best.
                </p>
                <p>
                  Today, we're proud to serve over 500 companies across 12 industries, helping them save 
                  time, reduce costs, and unlock their team's full potential. But we're just getting started.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-500 mb-4">Our Mission</h3>
                  <p className="text-gray-600 max-w-md">
                    To democratize AI and help every business build their unstoppable team
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 bg-gradient-to-r ${value.color} rounded-xl flex-shrink-0`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to industry leader, here are the key milestones in our growth.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className={`bg-light-100 rounded-xl p-6 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      <div className="text-3xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-dark-500 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex-shrink-0 relative z-10" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Built by <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines deep expertise in AI, enterprise software, and business operations 
              to deliver solutions that truly understand your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI & Machine Learning',
                description: 'PhD-level researchers from top universities with experience at Google, OpenAI, and Microsoft.',
                icon: Lightbulb
              },
              {
                title: 'Enterprise Software',
                description: 'Former executives and engineers from Salesforce, ServiceNow, and other enterprise leaders.',
                icon: Award
              },
              {
                title: 'Business Operations',
                description: 'Operators who have scaled companies from startup to IPO across multiple industries.',
                icon: TrendingUp
              }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 text-center shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary-100 rounded-xl">
                    <expertise.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark-500 mb-4">
                  {expertise.title}
                </h3>
                <p className="text-gray-600">
                  {expertise.description}
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
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Ready to build your unstoppable team? Let's transform how your business works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
                Start Your Free Trial
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;