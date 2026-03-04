import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import ERPSolutions from './pages/ERPSolutions';
import FinancialAdvisory from './pages/FinancialAdvisory';
import WhyMaxMatrix from './pages/WhyMaxMatrix';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/erp-solutions" element={<ERPSolutions />} />
            <Route path="/financial-advisory" element={<FinancialAdvisory />} />
            <Route path="/why-maxmatrix" element={<WhyMaxMatrix />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
