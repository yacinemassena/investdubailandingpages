import React from 'react';
import { Wallet, Landmark } from 'lucide-react';

export const IRASection = () => {
  return (
    <section className="py-24 bg-[#F0F2F5] text-black overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-8 leading-tight">Use IRA Funds To Invest In Blue-Chip Art</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-lg">
              Add art to your portfolio directly, or even through a Traditional or Roth IRA.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl bg-white rounded-full p-1 shadow-2xl mb-8">
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
              <button className="p-2 bg-white rounded-full shadow-md">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/pool-art/1000/1000" 
                alt="Art" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute top-10 -right-10 md:-right-20 bg-white rounded-2xl p-6 shadow-2xl w-72 border border-gray-100">
              <div className="mb-4">
                <p className="text-xs text-gray-500 font-medium">Net Account Value</p>
                <p className="text-2xl font-bold">$178,410</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase">Net Contribution</p>
                  <p className="text-sm font-bold">$130,000</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase">Net Return</p>
                  <p className="text-sm font-bold text-emerald-500">$48,410</p>
                </div>
              </div>
              <div className="h-20 w-full bg-brand-blue/5 rounded-lg flex items-end p-2 gap-1">
                {[40, 45, 42, 50, 55, 52, 60, 65, 70, 75].map((h, i) => (
                  <div key={i} className="flex-1 bg-brand-blue/20 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            {/* Floating IRA Options */}
            <div className="absolute bottom-10 -left-10 md:-left-20 space-y-3">
              <div className="bg-white rounded-xl p-4 shadow-xl w-64 flex items-center justify-between border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-950 rounded-lg flex items-center justify-center text-white">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <span className="font-bold">Traditional IRA</span>
                </div>
                <span className="font-medium">$75,000</span>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-xl w-64 flex items-center justify-between border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center text-white">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <span className="font-bold">Roth IRA</span>
                </div>
                <span className="font-medium">$103,410</span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-24 text-center text-[10px] text-gray-400 max-w-4xl mx-auto leading-relaxed">
          For illustrative purposes only. IRA contributions subject to limits established by the IRS, who could take the position that investments in Masterworks Offerings are taxable distributions. Neither Masterworks nor affiliates provide tax advice and do not claim any particular tax consequence. Inspira charges a $125 annual IRA account maintenance fee. More information here.
        </p>
      </div>
    </section>
  );
};
