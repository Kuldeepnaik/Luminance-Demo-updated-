'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'Excellent service and very friendly staff! The facial treatment gave my skin an amazing glow. Will definitely visit again.',
  },
  {
    name: 'Rahul Verma',
    text: 'Best salon experience in Electronic City. The haircut was exactly what I wanted, and the hygiene standards are top-notch.',
  },
  {
    name: 'Sneha Reddy',
    text: 'Highly recommended for bridal makeup. They made my special day even more beautiful. The team is very professional and patient.',
  },
  {
    name: 'Amit Kumar',
    text: 'The spa session was incredibly relaxing. A perfect escape from the busy city life. Premium products and great ambiance.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-4">Client Stories</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">What They Say</h3>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950 p-8 border border-zinc-800 rounded-sm relative"
            >
              <Quote className="absolute top-6 right-8 text-zinc-800 w-12 h-12" />
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-300 font-light italic mb-6 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-amber-500 font-serif font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="text-white font-medium">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
