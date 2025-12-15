import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingGuidePage from './pages/PricingGuidePage';
import ApplyPage from './pages/ApplyPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/service-detail" element={<ServiceDetailPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing-guide" element={<PricingGuidePage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </Router>
  );
};

export default App;