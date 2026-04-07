import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Instagram } from 'lucide-react';

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Contact: React.FC = () => {
  const location = useLocation();
  const fromPage = location.state?.from || 'general';

  const getWhatsAppMessage = () => {
    switch (fromPage) {
      case 'erp':
        return encodeURIComponent("Hello! I'm interested in learning more about your ERP Solutions.");
      case 'financial':
        return encodeURIComponent("Hello! I'd like to inquire about your Financial Advisory services.");
      default:
        return encodeURIComponent("Hello! I'd like to connect with MaxMatrix.");
    }
  };

  const whatsappUrl = `https://wa.me/7349169925?text=${getWhatsAppMessage()}`;

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
              Let's connect. Choose your preferred way to reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <a 
              href="https://www.instagram.com/maxmatrix.in?igsh=MTdpOGlnZG5vMmZqNA==" 
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

            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="card flex flex-col items-center text-center group hover:border-brand-teal/50 transition-all"
            >
              <div className="w-16 h-16 bg-bg-card border border-white/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform">
                <WhatsAppIcon size={32} />
              </div>
              <h4 className="mb-4 text-text-primary">WhatsApp</h4>
              <span className="text-lg sm:text-xl text-brand-teal group-hover:underline transition-all">
                Chat with Us
              </span>
            </a>

            <div className="card flex flex-col items-center text-center group border-text-primary/10">
              <div className="w-16 h-16 bg-text-primary/5 border border-text-primary/10 rounded-2xl flex items-center justify-center text-brand-teal mb-6">
                <Mail size={32} />
              </div>
              <h4 className="mb-4 text-text-primary">Email</h4>
              <span className="text-base sm:text-lg text-text-muted break-all">
                max0matrixx@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
