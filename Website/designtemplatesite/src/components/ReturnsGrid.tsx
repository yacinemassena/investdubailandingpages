import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight } from 'lucide-react';

const artists = [
  { name: 'Banksy', return: '32.0%', held: '378 days', color: 'bg-emerald-500/20' },
  { name: 'George Condo', return: '39.3%', held: '538 days', color: 'bg-blue-500/20' },
  { name: 'Albert Oehlen', return: '36.2%', held: '333 days', color: 'bg-orange-500/20' },
  { name: 'Cecily Brown', return: '27.3%', held: '604 days', color: 'bg-purple-500/20' },
  { name: 'Claude Monet', return: '9.2%', held: '631 days', color: 'bg-yellow-500/20' },
  { name: 'Sam Gilliam', return: '33.1%', held: '791 days', color: 'bg-red-500/20' },
];

export const ReturnsGrid = () => {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">$61,357,243 Distributed Back To Investors</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We have sold 23 paintings, out of over 500, each for a profit, distributing over $61 million back to investors, including amount invested.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg ${artist.color} flex items-center justify-center`}>
                    <div className="w-8 h-8 rounded bg-white/10 blur-sm" />
                  </div>
                  <h3 className="font-bold text-lg">{artist.name}</h3>
                </div>
                <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                  <ArrowLeftRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Annualized Net Return</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-emerald-400">{artist.return}</span>
                  <span className="text-sm text-gray-500">{artist.held} held</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};
