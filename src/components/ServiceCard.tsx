import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // @ts-ignore
  const Icon = Icons[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl border border-brand-navy/5 shadow-sm hover:shadow-xl transition-all group"
    >
      <div className="w-14 h-14 bg-brand-gray rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
        {Icon && <Icon size={28} />}
      </div>
      <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
      <p className="text-brand-navy/60 text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      <ul className="space-y-3">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center text-xs font-medium text-brand-navy/80">
            <Icons.Check size={14} className="text-brand-gold mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
