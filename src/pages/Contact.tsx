import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-bg-secondary border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="mb-8">Contact</h1>
            <p className="text-text-muted leading-relaxed">
              Let's connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <a 
              href="mailto:max0matrixx@gmail.com?subject=Inquiry to MaxMatrix"
              target="_blank"
              rel="noopener noreferrer"
              className="card flex flex-col items-center text-center group hover:border-brand-purple/50 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-bg-card border border-text-primary/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <h4 className="mb-4 text-text-primary">Email</h4>
              <span className="text-lg sm:text-xl text-brand-purple group-hover:underline transition-all">
                max0matrixx@gmail.com
              </span>
            </a>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card flex flex-col items-center text-center group hover:border-brand-purple/50 transition-all"
            >
              <div className="w-16 h-16 bg-bg-card border border-white/10 rounded-2xl flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
                <Instagram size={32} />
              </div>
              <h4 className="mb-4 text-text-primary">Instagram</h4>
              <span className="text-lg sm:text-xl text-brand-purple group-hover:underline transition-all">
                Follow Us
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
