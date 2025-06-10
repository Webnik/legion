import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Zap, 
  Globe,
  Coffee,
  Laptop,
  GraduationCap,
  ArrowRight,
  Star
} from 'lucide-react';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Positions', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 6 },
    { id: 'product', name: 'Product', count: 2 },
    { id: 'sales', name: 'Sales & Marketing', count: 3 },
    { id: 'operations', name: 'Operations', count: 1 }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness stipend'
    },
    {
      icon: Laptop,
      title: 'Remote-First',
      description: 'Work from anywhere with flexible hours and home office setup budget'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: '$2,000 annual learning budget and conference attendance support'
    },
    {
      icon: Coffee,
      title: 'Time Off',
      description: 'Unlimited PTO, sabbatical options, and company-wide mental health days'
    },
    {
      icon: DollarSign,
      title: 'Equity & Compensation',
      description: 'Competitive salary, equity package, and performance bonuses'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Quarterly team retreats, regular social events, and inclusive environment'
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$150k - $200k',
      description: 'Build and optimize AI models that power our AI employees. Work with cutting-edge ML technologies.',
      requirements: ['5+ years ML/AI experience', 'Python, TensorFlow/PyTorch', 'Production ML systems'],
      featured: true
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Develop our platform frontend and backend. Work with React, Node.js, and cloud infrastructure.',
      requirements: ['3+ years full-stack experience', 'React, Node.js', 'Cloud platforms (AWS/Azure)'],
      featured: false
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'product',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Drive product strategy and roadmap for AI employee features. Work closely with engineering and customers.',
      requirements: ['3+ years product management', 'B2B SaaS experience', 'Data-driven approach'],
      featured: true
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130k - $170k',
      description: 'Scale our infrastructure to support millions of AI employee tasks. Focus on reliability and performance.',
      requirements: ['4+ years DevOps experience', 'Kubernetes, Docker', 'CI/CD, monitoring'],
      featured: false
    },
    {
      id: 5,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'Remote',
      type: 'Full-time',
      salary: '$60k - $80k + commission',
      description: 'Generate qualified leads and build relationships with potential customers. High growth opportunity.',
      requirements: ['1+ years sales experience', 'B2B sales background', 'Excellent communication'],
      featured: false
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      department: 'operations',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $120k',
      description: 'Ensure customer success and drive expansion revenue. Work directly with enterprise clients.',
      requirements: ['3+ years customer success', 'SaaS experience', 'Account management'],
      featured: false
    }
  ];

  const filteredPositions = openPositions.filter(position => 
    selectedDepartment === 'all' || position.department === selectedDepartment
  );

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and automation.'
    },
    {
      title: 'Customer Obsession',
      description: 'Every decision we make is driven by creating value for our customers.'
    },
    {
      title: 'Transparency',
      description: 'We communicate openly, share knowledge, and build trust through honesty.'
    },
    {
      title: 'Continuous Learning',
      description: 'We embrace curiosity, learn from failures, and constantly improve.'
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
              Build the <span className="gradient-text">Future of Work</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Join our mission to democratize AI and help businesses build unstoppable teams. 
              We're looking for passionate people who want to shape the future of work.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">12</div>
                <div className="text-gray-600">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Remote-First</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">15+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide how we work, make decisions, and treat each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-dark-500 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why You'll <span className="gradient-text">Love Working Here</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team so they can do their best work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
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

      {/* Open Positions */}
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
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next opportunity to make an impact in the AI revolution.
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white border-2 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  position.featured 
                    ? 'border-primary-300 bg-primary-50/30' 
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-dark-500">
                        {position.title}
                      </h3>
                      {position.featured && (
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4">
                      {position.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <span
                          key={reqIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:flex-shrink-0">
                    <button className="btn-primary flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="btn-secondary">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No positions found
              </h3>
              <p className="text-gray-500">
                Try selecting a different department
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-dark-500 mb-6">
                Life at <span className="gradient-text">Legion</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're building something special—not just our product, but our culture. 
                We believe the best work happens when people feel supported, challenged, and valued.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Remote-First Culture',
                    description: 'Work from anywhere with flexible hours and async communication'
                  },
                  {
                    title: 'Growth Mindset',
                    description: 'Continuous learning opportunities and career development support'
                  },
                  {
                    title: 'Inclusive Environment',
                    description: 'Diverse team with equal opportunities for everyone to succeed'
                  },
                  {
                    title: 'Work-Life Balance',
                    description: 'Unlimited PTO and respect for personal time and boundaries'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-dark-500 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Globe className="w-8 h-8 text-primary-600 mb-4" />
                  <h3 className="font-semibold text-dark-500 mb-2">Global Team</h3>
                  <p className="text-gray-600 text-sm">Team members across 15+ countries</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Zap className="w-8 h-8 text-secondary-600 mb-4" />
                  <h3 className="font-semibold text-dark-500 mb-2">Fast Growth</h3>
                  <p className="text-gray-600 text-sm">Rapid career advancement opportunities</p>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Heart className="w-8 h-8 text-pink-600 mb-4" />
                  <h3 className="font-semibold text-dark-500 mb-2">Great Benefits</h3>
                  <p className="text-gray-600 text-sm">Comprehensive health and wellness package</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Users className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-dark-500 mb-2">Amazing People</h3>
                  <p className="text-gray-600 text-sm">Work with brilliant, passionate colleagues</p>
                </div>
              </div>
            </motion.div>
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
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
                Send General Application
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                Join Our Talent Network
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;