import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { year: '1997', value: 20 },
  { year: '1999', value: -30 },
  { year: '2001', value: 80 },
  { year: '2003', value: 150 },
  { year: '2005', value: 250 },
  { year: '2007', value: 850 },
  { year: '2009', value: -40 },
  { year: '2011', value: 120 },
  { year: '2013', value: 180 },
  { year: '2015', value: 220 },
  { year: '2017', value: 280 },
  { year: '2019', value: 320 },
  { year: '2021', value: 380 },
  { year: '2023', value: -20 },
];

export const MarketOpportunity = () => {
  return (
    <section className="py-24 bg-[#F8F9FA] text-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Investing in Art Could Be the Best Opportunity Since the Financial Crisis</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Historically, periods of Post-War and Contemporary Art market softness are followed by multi-year bull runs with 14% annual median returns. Current market conditions suggest this may be a compelling moment to <span className="font-bold">“buy the dip.”</span>
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="mb-8 flex justify-between items-center">
            <h3 className="text-lg font-bold">Post-War and Contemporary Art and Historical Downturns <span className="text-gray-400 font-normal">(1997-)</span></h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#2D6A4F] rounded-sm" />
              <span className="text-xs text-gray-500">Cumulative Performance Following Down Periods</span>
            </div>
          </div>

          <div className="h-[400px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#999', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#999', fontSize: 12 }}
                  orientation="right"
                  tickFormatter={(val) => `${val}%`}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.value > 0 ? '#2D6A4F' : '#FF6B6B'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Callout Box */}
            <div className="absolute top-1/4 right-1/4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[240px]">
              <p className="text-sm font-medium leading-tight">
                The Post-War and Contemporary Art Market has rebounded following periods of decline
              </p>
              <div className="mt-2 flex items-center text-emerald-600 font-bold">
                <div className="w-8 h-0.5 bg-emerald-600 mr-2" />
                <span className="text-lg">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
