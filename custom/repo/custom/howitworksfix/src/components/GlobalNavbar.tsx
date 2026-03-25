import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const GlobalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm" />
          </div>
          <span className="font-bold text-xl tracking-tight">InvestDubai</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Properties</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">How it Works</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">About</a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Log In</a>
          <a href="#" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Get Started
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-black/5 p-6 flex flex-col gap-4 shadow-xl"
        >
          <a href="#" className="text-base font-medium text-gray-800">Properties</a>
          <a href="#" className="text-base font-medium text-gray-800">How it Works</a>
          <a href="#" className="text-base font-medium text-gray-800">About</a>
          <a href="#" className="text-base font-medium text-gray-800">FAQ</a>
          <hr className="border-gray-100 my-2" />
          <a href="#" className="text-base font-medium text-gray-800">Log In</a>
          <a href="#" className="bg-black text-white px-5 py-3 rounded-xl text-center font-medium">
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  );
};
