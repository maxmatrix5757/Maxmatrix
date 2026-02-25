import React from 'react';
import { motion } from 'motion/react';
import { IT_SERVICES } from '../constants';
import { ServiceCard } from '../components/ServiceCard';
import { Cpu, Shield, Cloud, Code } from 'lucide-react';

const ITServices: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 border border-white rounded-full animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 border border-white rounded-full opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Intelligent <span className="text-brand-gold italic">IT</span> Infrastructure</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Secure, scalable, and innovative technology solutions designed to propel your business into the digital future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {IT_SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack / Approach */}
      <section className="section-padding bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Technical Philosophy</h2>
            <p className="text-brand-navy/60 max-w-2xl mx-auto">We don't just implement tools; we build ecosystems that are resilient, efficient, and future-proof.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={24} />
              </div>
              <h4 className="font-serif font-bold mb-2">Security-First</h4>
              <p className="text-xs text-brand-navy/60">Every line of code and every server configuration is audited for maximum security.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud size={24} />
              </div>
              <h4 className="font-serif font-bold mb-2">Cloud-Native</h4>
              <p className="text-xs text-brand-navy/60">We leverage the power of the cloud to ensure your business is always available and scalable.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Code size={24} />
              </div>
              <h4 className="font-serif font-bold mb-2">Clean Code</h4>
              <p className="text-xs text-brand-navy/60">Maintainable, documented, and efficient codebases that grow with your business.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu size={24} />
              </div>
              <h4 className="font-serif font-bold mb-2">Modern Stack</h4>
              <p className="text-xs text-brand-navy/60">We use the latest industry-standard technologies to give you a competitive edge.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServices;
