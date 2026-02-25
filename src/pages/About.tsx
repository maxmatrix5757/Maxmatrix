import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Our Story & <span className="text-brand-gold italic">Vision</span></h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Founded on the principles of integrity and innovation, Max Matrix was built to provide businesses with a single, reliable source for their most critical needs: technology and finance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owner's Mindset */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/leader/800/1000" 
                alt="Leadership" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-gold p-10 rounded-2xl text-white max-w-xs shadow-xl">
              <p className="text-2xl font-serif font-bold mb-2">"We don't just consult; we partner."</p>
              <p className="text-sm opacity-80">— Founder's Philosophy</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">The Leadership Mindset</h2>
            <p className="text-brand-navy/70 text-lg mb-8 leading-relaxed">
              At Max Matrix, we believe that true success comes from an "Owner's Mindset." This means we treat every client's business as if it were our own—prioritizing long-term stability over short-term gains.
            </p>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-gray rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-2">Uncompromising Integrity</h4>
                  <p className="text-brand-navy/60">We operate with radical transparency, ensuring you always have the full picture of your IT and financial health.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-gray rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-2">Excellence as Standard</h4>
                  <p className="text-brand-navy/60">"Good enough" is never enough. We strive for excellence in every line of code and every financial projection.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-gray rounded-xl flex items-center justify-center text-brand-gold shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-2">People-First Approach</h4>
                  <p className="text-brand-navy/60">Technology and finance are tools to empower people. We never lose sight of the human impact of our work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-brand-gray">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-3xl shadow-sm"
          >
            <div className="w-14 h-14 bg-brand-navy text-white rounded-xl flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
            <p className="text-brand-navy/60 leading-relaxed">
              To empower businesses with secure, innovative technology and strategic financial guidance that drives sustainable growth and competitive advantage.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-3xl shadow-sm"
          >
            <div className="w-14 h-14 bg-brand-gold text-white rounded-xl flex items-center justify-center mb-6">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
            <p className="text-brand-navy/60 leading-relaxed">
              To be the global benchmark for integrated business services, where technology and finance work in perfect harmony to create a more secure and prosperous world.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-3xl shadow-sm"
          >
            <div className="w-14 h-14 bg-brand-slate text-white rounded-xl flex items-center justify-center mb-6">
              <Heart size={28} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Our Values</h3>
            <p className="text-brand-navy/60 leading-relaxed">
              Trust, Innovation, Security, and Partnership. These are not just words on a wall; they are the foundation of every decision we make.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
