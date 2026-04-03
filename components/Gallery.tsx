'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const images = [
  { src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Hair Styling' },
  { src: 'https://images.pexels.com/photos/3993315/pexels-photo-3993315.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bridal Makeup', className: 'md:row-span-2' },
  { src: 'https://images.pexels.com/photos/3993472/pexels-photo-3993472.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Spa Treatment' },
  { src: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Salon Interior' },
  { src: 'https://images.pexels.com/photos/3993325/pexels-photo-3993325.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Manicure' },
  { src: 'https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Facial Care', className: 'md:row-span-2' },
  { src: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Premium Tools' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-4">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">Our Gallery</h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-sm ${image.className || ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-lg font-medium tracking-wider border border-white/50 px-6 py-2 backdrop-blur-sm">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
