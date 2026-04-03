'use client';

import { motion } from 'motion/react';
import { Scissors, Sparkles, Flower2, Heart, Droplets, Wind } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Haircut & Styling',
    description: 'Trendy and professional looks tailored to your personality.',
  },
  {
    icon: Sparkles,
    title: 'Facial & Skincare',
    description: 'Glow with expert care using premium international products.',
  },
  {
    icon: Flower2,
    title: 'Spa & Relaxation',
    description: 'Stress-free experience to rejuvenate your mind and body.',
  },
  {
    icon: Heart,
    title: 'Bridal & Party Makeup',
    description: 'Perfect, flawless looks for your most special occasions.',
  },
  {
    icon: Droplets,
    title: 'Manicure & Pedicure',
    description: 'Complete grooming and care for your hands and feet.',
  },
  {
    icon: Wind,
    title: 'Hair Treatments',
    description: 'Nourishing treatments for healthy, shiny, and strong hair.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-4">Our Offerings</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">Premium Services</h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300 rounded-sm hover:border-amber-500/50"
            >
              <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:border-amber-500 group-hover:text-amber-500 transition-colors text-zinc-400">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                {service.title}
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
