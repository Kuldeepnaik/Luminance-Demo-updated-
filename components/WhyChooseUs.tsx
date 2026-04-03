'use client';

import { motion } from 'motion/react';
import { Award, ShieldCheck, Gem, Users } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Award,
    title: 'Experienced Professionals',
    description: 'Our team consists of highly trained and certified stylists and therapists.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Environment',
    description: 'We maintain the highest standards of cleanliness and sanitation.',
  },
  {
    icon: Gem,
    title: 'Premium Products',
    description: 'We use only top-tier, authentic international brands for all services.',
  },
  {
    icon: Users,
    title: 'Personalized Care',
    description: 'Every treatment is customized to match your unique needs and preferences.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-4">The Luminance Standard</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Why Choose Us</h3>
            <p className="text-zinc-400 font-light leading-relaxed mb-10">
              At Luminance Unisex Salon and Spa, we believe in delivering more than just a service; we deliver an experience. Step into a world of luxury where your beauty and wellness are our top priorities.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-zinc-950 border border-amber-500/30 rounded-full flex items-center justify-center text-amber-500">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-zinc-400 text-sm font-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-sm overflow-hidden"
          >
            <Image
              src="https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Salon Experience"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-2 border-amber-500/20 m-4 rounded-sm pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
