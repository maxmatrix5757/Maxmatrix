import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Let's Start a <span className="text-brand-gold italic">Conversation</span></h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Whether you have a specific project in mind or just want to explore how we can help, our team is ready to listen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8">Get in Touch</h2>
            <p className="text-brand-navy/60 mb-12 text-lg">
              Fill out the form and our specialist will get back to you within 24 business hours to schedule a confidential consultation.
            </p>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-gray rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-1">Email Us</h4>
                  <p className="text-brand-navy/60">contact@maxmatrix.com</p>
                  <p className="text-brand-navy/60">support@maxmatrix.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-gray rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-brand-navy/60">+1 (555) 123-4567</p>
                  <p className="text-brand-navy/60">Mon-Fri: 9am - 6pm EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-brand-gray rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-1">Visit Us</h4>
                  <p className="text-brand-navy/60">123 Business Avenue, Suite 500</p>
                  <p className="text-brand-navy/60">Financial District, NY 10004</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-brand-navy/5 relative overflow-hidden">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">Message Received</h3>
                <p className="text-brand-navy/60 mb-8">Thank you for reaching out. One of our experts will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-brand-gold font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/50">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-brand-gray border border-transparent rounded-lg focus:border-brand-gold focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/50">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-brand-gray border border-transparent rounded-lg focus:border-brand-gold focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/50">Service Interest</label>
                  <select className="w-full px-4 py-3 bg-brand-gray border border-transparent rounded-lg focus:border-brand-gold focus:bg-white outline-none transition-all">
                    <option>IT Consulting</option>
                    <option>Software Development</option>
                    <option>Financial Consulting</option>
                    <option>Tax Planning</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/50">Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 bg-brand-gray border border-transparent rounded-lg focus:border-brand-gold focus:bg-white outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center py-4">
                  Send Message <Send size={18} className="ml-2" />
                </button>
                <p className="text-[10px] text-center text-brand-navy/40">
                  By submitting this form, you agree to our Privacy Policy and consent to being contacted regarding your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
