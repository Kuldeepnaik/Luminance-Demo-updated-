'use client';

import { motion } from 'motion/react';
import { Phone, Star } from 'lucide-react';
import Image from 'next/image';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury Salon Interior"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/60 to-zinc-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-zinc-300 text-sm font-medium tracking-wide uppercase">
              Trusted by 100+ Happy Customers
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Top Unisex Salon & Spa in <span className="text-amber-500 italic">Electronic City</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Professional Hair, Skin & Spa Services – Experience luxury grooming and relaxation. Book Your Appointment Today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+919606224455"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-sm transition-all transform hover:scale-105"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919606224455?text=Hi,%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-zinc-950 font-bold rounded-sm transition-all transform hover:scale-105"
            >
              <WhatsAppIcon size={20} />
              <span>Book on WhatsApp</span>
            </a>
          </div>
          
          <p className="text-sm text-zinc-400 italic">
            Get quick response within minutes on WhatsApp
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-zinc-800 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-amber-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
