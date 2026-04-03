'use client';

import { motion } from 'motion/react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919606224455?text=Hi,%20I%20want%20to%20book%20an%20appointment"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-zinc-900 text-white text-sm px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-zinc-800">
        Book an Appointment
      </span>
      
      {/* Ping Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
    </motion.a>
  );
}
