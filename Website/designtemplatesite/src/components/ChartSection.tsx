import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { year: '2000', art: 100, sp500: 100 },
  { year: '2002', art: 120, sp500: 80 },
  { year: '2004', art: 150, sp500: 110 },
  { year: '2006', art: 220, sp500: 130 },
  { year: '2008', art: 350, sp500: 90 },
  { year: '2010', art: 280, sp500: 120 },
  { year: '2012', art: 380, sp500: 150 },
  { year: '2014', art: 480, sp500: 210 },
  { year: '2016', art: 420, sp500: 230 },
  { year: '2018', art: 520, sp500: 280 },
  { year: '2020', art: 550, sp500: 350 },
  { year: '2022', art: 720, sp500: 420 },
  { year: '2024', art: 700, sp500: 510 },
];

export const ChartSection = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Art’s Historical Appreciation Speaks For Itself</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Artprice100 has achieved impressive annual appreciation rates from 2000 to 2024, outperforming the S&P 500’s return over the same period.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Artprice100© vs. S&P 500 <span className="text-gray-400 font-normal">(2000 - 2024)</span></h3>
              <p className="text-sm text-gray-500">Base 100 in January 2000</p>
            </div>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#999', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#999', fontSize: 12 }}
                  orientation="right"
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                />
                <Legend verticalAlign="top" align="right" iconType="rect" />
                <Line 
                  name="Artprice 100 ©" 
                  type="monotone" 
                  dataKey="art" 
                  stroke="#4F46E5" 
                  strokeWidth={3} 
                  dot={false} 
                  activeDot={{ r: 8 }} 
                />
                <Line 
                  name="S&P 500" 
                  type="monotone" 
                  dataKey="sp500" 
                  stroke="#EF4444" 
                  strokeWidth={3} 
                  dot={false} 
                  activeDot={{ r: 8 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-gray-400 max-w-4xl mx-auto leading-relaxed">
          The Artprice100©, by Arprice, is comprised of the art market's 100 most successful artists, without any other aesthetic or preferential consideration, based on their auction revenue over the previous five years (in this case, 1 January 2018 to 31 December 2024). The exact breakdown of the portfolio as of 1 January 2024 can be accessed here and see more disclosures below.
        </p>
      </div>
    </section>
  );
};
