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
      className="card group"
    >
      <div className="w-14 h-14 bg-text-primary/5 border border-text-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 text-brand-purple">
        {Icon && <Icon size={28} />}
      </div>
      <h3 className="text-2xl font-serif font-bold mb-4 text-text-primary group-hover:accent-text transition-all duration-300">{service.title}</h3>
      <p className="text-text-muted text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      <ul className="space-y-3">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center text-xs font-medium text-text-muted">
            <Icons.Check size={14} className="text-brand-teal mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
