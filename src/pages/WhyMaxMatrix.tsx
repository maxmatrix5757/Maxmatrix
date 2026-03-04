import React from 'react';
import { motion } from 'motion/react';
import { WHY_MAXMATRIX } from '../constants';
import { ShieldCheck, Award, Users, Target, Eye, Heart, MessageSquare, Ban, CheckCircle, BarChart } from 'lucide-react';

const WhyMaxMatrix: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-bg-secondary text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="mb-8">Why People <span className="gradient-text italic">Choose Us</span></h1>
            <p className="text-text-muted leading-relaxed">
              We provide clear, honest advice and practical solutions focused on long-term value and client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_MAXMATRIX.map((feature, index) => {
              const IconComponent = {
                MessageSquare,
                Ban,
                CheckCircle,
                BarChart,
                Heart
              }[feature.icon as any] || CheckCircle;

              return (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="card"
                >
                  <div className="w-14 h-14 bg-bg-card border border-white/10 rounded-xl flex items-center justify-center text-brand-purple mb-6">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="mb-4 text-text-primary">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-bg-secondary border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="mb-8">The <span className="gradient-text">MaxMatrix Mindset</span></h2>
            <p className="text-text-muted mb-8 leading-relaxed">
              We believe that true success comes from a client-first approach—prioritizing long-term stability over short-term gains.
            </p>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bg-card border border-white/10 rounded-xl flex items-center justify-center text-brand-teal shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-text-primary">Clear and Honest Advice</h4>
                  <p className="text-text-muted">We operate with radical transparency, ensuring you always have the full picture.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bg-card border border-white/10 rounded-xl flex items-center justify-center text-brand-purple shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-text-primary">No Product Selling</h4>
                  <p className="text-text-muted">Our advice is independent. We do not receive commissions from any provider.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-bg-card border border-white/10 rounded-xl flex items-center justify-center text-brand-purple shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="mb-2 text-text-primary">Long-term Value</h4>
                  <p className="text-text-muted">We focus on simplicity, reliability, and long-term usability in everything we do.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-bg-card border border-white/10 p-8 sm:p-12 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="mb-6 text-white">Our Commitment</h3>
              <p className="text-text-muted leading-relaxed mb-8 italic">
                "We don't just consult; we partner. Whether it's ERP guidance for your business or financial advice for your personal goals, we're here to help you make informed decisions."
              </p>
              <div className="h-1 w-20 bg-linear-to-r from-brand-purple to-brand-teal rounded-full" />
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyMaxMatrix;
