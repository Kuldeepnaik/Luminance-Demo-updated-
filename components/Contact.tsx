'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-4">Visit Us</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Location & Contact</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <MapPin className="text-amber-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Address</h4>
                  <p className="text-zinc-400 font-light">Electronic City, Bommasandra<br/>Bangalore, Karnataka</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-amber-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <a href="tel:+919606224455" className="text-zinc-400 font-light hover:text-amber-500 transition-colors">
                    +91 96062 24455
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-amber-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold mb-1">Hours</h4>
                  <p className="text-zinc-400 font-light">Mon - Sun: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder (Using an iframe for a generic map of Electronic City) */}
            <div className="w-full h-64 bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.923180290947!2d77.6625!3d12.815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a77b4b14b%3A0x884615e478714074!2sBommasandra%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900 p-8 border border-zinc-800 rounded-sm"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Send an Enquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="I would like to know more about..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold py-4 rounded-sm transition-colors uppercase tracking-wider text-sm"
              >
                Submit Enquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
