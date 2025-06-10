import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import SolutionSection from '../components/home/SolutionSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import ROICalculatorSection from '../components/home/ROICalculatorSection';
import IndustriesShowcase from '../components/home/IndustriesShowcase';
import SocialProofSection from '../components/home/SocialProofSection';
import FAQSection from '../components/home/FAQSection';
import FinalCTASection from '../components/home/FinalCTASection';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ROICalculatorSection />
      <IndustriesShowcase />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default HomePage;