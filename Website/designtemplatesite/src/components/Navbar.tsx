import React from 'react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container-custom h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-[0.2em] uppercase">
            Master<span className="border border-white px-1 ml-0.5">w</span>orks
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">How It Works</a>
          <a href="#" className="hover:text-white transition-colors">Company</a>
          <a href="#" className="hover:text-white transition-colors">Price Database</a>
          <a href="#" className="hover:text-white transition-colors">Trading</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium border border-white/20 rounded-md hover:bg-white/5 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 text-sm font-medium bg-brand-blue rounded-md hover:bg-brand-blue-hover transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
