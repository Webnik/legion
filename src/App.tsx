import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AIEmployeesPage from './pages/AIEmployeesPage';
import PricingPage from './pages/PricingPage';
import PlatformPage from './pages/PlatformPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import DemoPage from './pages/DemoPage';
import ResourcesPage from './pages/ResourcesPage';
import IntegrationsPage from './pages/IntegrationsPage';
import APIPage from './pages/APIPage';
import SecurityPage from './pages/SecurityPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import RealEstatePage from './pages/industries/RealEstatePage';
import HealthcarePage from './pages/industries/HealthcarePage';
import EcommercePage from './pages/industries/EcommercePage';
import ProfessionalServicesPage from './pages/industries/ProfessionalServicesPage';
import RestaurantsPage from './pages/industries/RestaurantsPage';
import ConstructionPage from './pages/industries/ConstructionPage';
import CreativeAgenciesPage from './pages/industries/CreativeAgenciesPage';
import ManufacturingPage from './pages/industries/ManufacturingPage';
import LegalPage from './pages/industries/LegalPage';
import TechnologyPage from './pages/industries/TechnologyPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-employees" element={<AIEmployeesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/real-estate" element={<RealEstatePage />} />
          <Route path="/industries/healthcare" element={<HealthcarePage />} />
          <Route path="/industries/ecommerce" element={<EcommercePage />} />
          <Route path="/industries/professional-services" element={<ProfessionalServicesPage />} />
          <Route path="/industries/restaurants" element={<RestaurantsPage />} />
          <Route path="/industries/construction" element={<ConstructionPage />} />
          <Route path="/industries/creative-agencies" element={<CreativeAgenciesPage />} />
          <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
          <Route path="/industries/legal" element={<LegalPage />} />
          <Route path="/industries/technology" element={<TechnologyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/api" element={<APIPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;