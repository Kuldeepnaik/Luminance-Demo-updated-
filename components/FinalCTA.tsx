'use client';

import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-amber-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-950 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-zinc-950 mb-8">
            Book Your Appointment Today
          </h2>
          <p className="text-zinc-800 text-lg mb-10 max-w-2xl mx-auto">
            Step into elegance and let our experts pamper you. Your journey to radiance begins here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919606224455"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-bold rounded-sm transition-all shadow-xl"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919606224455?text=Hi,%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-sm transition-all shadow-xl"
            >
              <WhatsAppIcon size={20} />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
