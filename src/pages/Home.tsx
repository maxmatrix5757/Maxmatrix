import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden section-padding">
        {/* Animated Background Elements (No Photos) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-8">
              Smart <span className="accent-text">ERP Solutions</span> & Practical <span className="accent-text">Financial Advice</span>
            </h1>
            <p className="text-text-muted mb-12 leading-relaxed max-w-2xl">
              MaxMatrix helps businesses run efficiently through ERP systems and helps individuals make smarter decisions about investing, insurance, and personal money management.
            </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="btn-primary flex items-center justify-center group">
                  Book a Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link to="/financial-advisory" className="btn-secondary flex items-center justify-center">
                  Talk to an Advisor
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-bg-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="mb-6">What We <span className="accent-text">Do</span></h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Integrated solutions for business efficiency and personal financial growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* ERP Solutions Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="card group border-text-primary/10"
            >
              <div className="w-16 h-16 bg-text-primary/5 rounded-2xl flex items-center justify-center mb-8 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all duration-500 border border-text-primary/10">
                <Zap size={32} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-6">ERP Solutions</h3>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
                We design, implement, and support ERP systems that help businesses manage operations, reporting, and internal processes efficiently.
              </p>
              <Link to="/erp-solutions" className="inline-flex items-center text-brand-purple font-bold hover:underline">
                Learn More <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>

            {/* Financial Advisory Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="card group border-text-primary/10"
            >
              <div className="w-16 h-16 bg-text-primary/5 rounded-2xl flex items-center justify-center mb-8 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-500 border border-text-primary/10">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-6">Financial Advisory</h3>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
                We provide independent advice on investments, insurance, and personal financial planning, focused on long-term stability and informed decision-making.
              </p>
              <Link to="/financial-advisory" className="inline-flex items-center text-brand-teal font-bold hover:underline">
                Learn More <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="mb-8">Built on <span className="accent-text">Trust</span> & <span className="accent-text">Independence</span></h2>
              <p className="text-text-muted mb-10 leading-relaxed">
                At MaxMatrix, we operate with a client-first mindset. Our financial advice is independent and unbiased—we do not sell products or receive commissions. Our ERP solutions are practical, avoiding overengineering to focus on long-term value.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="text-brand-teal" size={24} />
                  <span className="text-base sm:text-xl font-serif">Independent, Unbiased Advice</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="text-brand-purple" size={24} />
                  <span className="text-base sm:text-xl font-serif">No Product Commissions</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="text-brand-purple" size={24} />
                  <span className="text-base sm:text-xl font-serif">Practical, Scalable ERP Systems</span>
                </div>
              </div>
            </div>
            <div className="bg-bg-card border border-white/10 p-12 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-brand-purple mb-6">
                  <Shield size={48} />
                </div>
                <h3 className="mb-6 text-text-primary">Our Commitment</h3>
                <p className="text-text-muted leading-relaxed mb-8 italic">
                  "We believe in simplicity, reliability, and long-term usability. Whether it's your business operations or your personal wealth, we treat your goals with the same care as our own."
                </p>
                <div className="h-1 w-20 bg-brand-purple rounded-full" />
              </div>
              {/* Decorative background circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="bg-bg-secondary rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center border border-white/10 backdrop-blur-sm">
            <h2 className="mb-8">Ready to <span className="accent-text">Transform</span> Your Future?</h2>
            <p className="text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed text-base sm:text-xl">
              Schedule a consultation today and discover how our integrated approach can benefit your business and personal life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="btn-primary">
                Book a Consultation
              </Link>
              <Link to="/why-maxmatrix" className="btn-secondary">
                Why Choose Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
