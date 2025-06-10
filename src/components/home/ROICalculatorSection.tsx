import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp } from 'lucide-react';

const ROICalculatorSection = () => {
  const [employees, setEmployees] = useState(10);
  const [avgSalary, setAvgSalary] = useState(50000);
  const [tasksPerDay, setTasksPerDay] = useState(5);
  const [results, setResults] = useState({
    monthlySavings: 0,
    yearlyROI: 0,
    timeReclaimedHours: 0
  });

  useEffect(() => {
    // Calculate ROI based on inputs
    const hourlyWage = avgSalary / (52 * 40); // Annual salary to hourly
    const dailyTaskTime = tasksPerDay * 0.5; // Assume 30 minutes per task
    const monthlyTaskHours = dailyTaskTime * 22 * employees; // 22 working days
    const monthlySavings = monthlyTaskHours * hourlyWage;
    const aiCost = employees * 400; // Average AI employee cost
    const netSavings = monthlySavings - aiCost;
    const yearlyROI = (netSavings * 12 / aiCost) * 100;
    
    setResults({
      monthlySavings: Math.round(netSavings),
      yearlyROI: Math.round(yearlyROI),
      timeReclaimedHours: Math.round(monthlyTaskHours)
    });
  }, [employees, avgSalary, tasksPerDay]);

  return (
    <section className="section-padding bg-gradient-to-br from-dark-500 to-primary-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Math is <span className="gradient-text">Simple</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See exactly how much time and money you'll save with AI employees
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-8 h-8 text-secondary-400" />
              <h3 className="text-2xl font-bold">ROI Calculator</h3>
            </div>

            <div className="space-y-8">
              {/* Number of Employees */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Number of Employees: {employees}
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              {/* Average Salary */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Average Annual Salary
                </label>
                <input
                  type="number"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  placeholder="50000"
                />
              </div>

              {/* Tasks Per Day */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Repetitive Tasks Per Day: {tasksPerDay}
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={tasksPerDay}
                  onChange={(e) => setTasksPerDay(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-secondary-400" />
              <h3 className="text-2xl font-bold">Your Savings</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-secondary-500/20 to-secondary-600/20 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-secondary-400 mb-2">
                  ${results.monthlySavings.toLocaleString()}
                </div>
                <div className="text-gray-300">Monthly Net Savings</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  {results.yearlyROI}%
                </div>
                <div className="text-gray-300">Annual ROI</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 text-center sm:col-span-2 lg:col-span-1"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {results.timeReclaimedHours}
                </div>
                <div className="text-gray-300">Hours Reclaimed Monthly</div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center mt-8"
            >
              <button className="btn-primary text-lg px-8 py-4">
                Get My Custom ROI Report
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00D4AA;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00D4AA;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
};

export default ROICalculatorSection;