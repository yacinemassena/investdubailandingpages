import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-blue/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto"
        >
          You’re invited to join a members-only community to learn, network, and invest in the art market.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl bg-white rounded-full p-1 shadow-2xl">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 px-6 py-3 text-black outline-none rounded-full"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue-hover transition-colors">
              Get Started
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-3 bg-white rounded-full shadow-lg hover:scale-105 transition-transform">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white rounded-full shadow-lg hover:scale-105 transition-transform">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Featured Logos */}
        <div className="mt-24">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">Featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-serif font-bold italic">Forbes</span>
            <span className="text-2xl font-bold tracking-tighter">CNBC</span>
            <span className="text-2xl font-bold">CNN</span>
            <span className="text-xl font-serif">The New York Times</span>
            <span className="text-xl font-bold">FT</span>
            <span className="text-2xl font-bold tracking-tighter">TC</span>
          </div>
        </div>
      </div>
    </section>
  );
};
