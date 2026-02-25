import { useState } from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { GlobalNavbar } from '../../../components/GlobalNavbar';
import { GlobalFooter } from '../../../components/GlobalFooter';

const neighborhoodCategories = [
  {
    category: 'Ultra-Luxury Villas',
    description: 'Exclusive villa communities with premium amenities',
    neighborhoods: [
      { id: 'palm-jumeirah', name: 'Palm Jumeirah', active: false, description: 'Iconic man-made island with beachfront villas' },
      { id: 'emirates-hills', name: 'Emirates Hills', active: false, description: 'Dubai\'s Beverly Hills with golf course views' },
      { id: 'jumeirah-islands', name: 'Jumeirah Islands', active: true, description: 'Gated community with 46 islands and lakes' },
      { id: 'al-barari', name: 'Al Barari', active: false, description: 'Botanical luxury living with lush greenery' },
      { id: 'arabian-ranches', name: 'Arabian Ranches', active: false, description: 'Desert-themed golf community' },
      { id: 'dubai-hills-estate', name: 'Dubai Hills Estate', active: false, description: 'Modern master-planned community' },
    ]
  },
  {
    category: 'Premium Apartments',
    description: 'High-rise luxury living in prime locations',
    neighborhoods: [
      { id: 'downtown-dubai', name: 'Downtown Dubai', active: false, description: 'Home to Burj Khalifa and Dubai Mall' },
      { id: 'dubai-marina', name: 'Dubai Marina', active: false, description: 'Waterfront living with marina views' },
      { id: 'business-bay', name: 'Business Bay', active: false, description: 'Central business district with canal views' },
      { id: 'jbr', name: 'Jumeirah Beach Residence (JBR)', active: false, description: 'Beachfront towers with resort lifestyle' },
      { id: 'city-walk', name: 'City Walk', active: false, description: 'Urban living with retail and dining' },
    ]
  },
  {
    category: 'Family Communities',
    description: 'Established neighborhoods perfect for families',
    neighborhoods: [
      { id: 'springs', name: 'The Springs', active: false, description: 'Lakeside villas with community parks' },
      { id: 'meadows', name: 'The Meadows', active: false, description: 'Spacious villas with landscaped gardens' },
      { id: 'victory-heights', name: 'Victory Heights', active: false, description: 'Sports-themed community' },
      { id: 'jumeirah-park', name: 'Jumeirah Park', active: false, description: 'Green community with parks' },
      { id: 'mira', name: 'Mira', active: false, description: 'Modern townhouses and villas' },
    ]
  },
  {
    category: 'Emerging Areas',
    description: 'High-growth neighborhoods with strong appreciation potential',
    neighborhoods: [
      { id: 'damac-hills', name: 'DAMAC Hills', active: false, description: 'Golf community with Trump International' },
      { id: 'dubai-south', name: 'Dubai South', active: false, description: 'Near Expo 2020 and Al Maktoum Airport' },
      { id: 'tilal-al-ghaf', name: 'Tilal Al Ghaf', active: false, description: 'Lagoon community by Majid Al Futtaim' },
      { id: 'town-square', name: 'Town Square', active: false, description: 'Affordable family community' },
    ]
  }
];

// Flatten for search and selection
const neighborhoods = neighborhoodCategories.flatMap(cat => 
  cat.neighborhoods.map(n => ({ ...n, category: cat.category }))
);

// Jumeirah Islands market data from Ji marketoverview.csv
const jumeirahIslandsData = [
  { quarter: 'Q3-2020', price: 8684 },
  { quarter: 'Q4-2020', price: 10540 },
  { quarter: 'Q1-2021', price: 11971 },
  { quarter: 'Q2-2021', price: 13142 },
  { quarter: 'Q3-2021', price: 14302 },
  { quarter: 'Q4-2021', price: 14675 },
  { quarter: 'Q1-2022', price: 16142 },
  { quarter: 'Q2-2022', price: 17889 },
  { quarter: 'Q3-2022', price: 17585 },
  { quarter: 'Q4-2022', price: 16286 },
  { quarter: 'Q1-2023', price: 18922 },
  { quarter: 'Q2-2023', price: 24779 },
  { quarter: 'Q3-2023', price: 27072 },
  { quarter: 'Q4-2023', price: 31974 },
  { quarter: 'Q1-2024', price: 22210 },
  { quarter: 'Q2-2024', price: 29155 },
  { quarter: 'Q3-2024', price: 28475 },
  { quarter: 'Q4-2024', price: 33480 },
  { quarter: 'Q1-2025', price: 29974 },
  { quarter: 'Q2-2025', price: 31273 },
  { quarter: 'Q3-2025', price: 31782 },
  { quarter: 'Q4-2025', price: 38237 },
];

export const PriceDatabase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNeighborhood, setActiveNeighborhood] = useState('jumeirah-islands');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const selectedNeighborhood = neighborhoods.find(n => n.id === activeNeighborhood);
  
  // Filter neighborhoods based on search and category
  const filteredNeighborhoods = neighborhoods.filter(n => {
    const matchesSearch = n.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !activeCategory || n.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Dubai Real Estate Price Database | Villa & Apartment Prices by Neighborhood | InvestDubai</title>
        <meta name="description" content="Comprehensive Dubai real estate price database. Track villa and apartment prices across 25+ neighborhoods including Palm Jumeirah, Emirates Hills, Dubai Marina, and more. Historical data and market trends." />
        <meta name="keywords" content="Dubai real estate prices, villa prices Dubai, apartment prices Dubai, Palm Jumeirah prices, Emirates Hills prices, Dubai property market, real estate investment Dubai" />
        <link rel="canonical" href="https://investdubai.com/price-database" />
      </head>
      
      <div className="min-h-screen bg-[#0A0A0A]">
      <GlobalNavbar dark />

      {/* Hero Section with Wave Pattern */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1DB976" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#1DB976" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1DB976" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {[...Array(20)].map((_, i) => (
              <path
                key={i}
                d={`M0,${150 + i * 8} Q300,${120 + i * 8 + Math.sin(i) * 20} 600,${150 + i * 8} T1200,${150 + i * 8}`}
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="1"
                opacity={0.3 + (i / 40)}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Price Database
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            InvestDubai has created the most comprehensive database to understand villa prices and appreciation rates by neighborhood
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for a neighborhood"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-full px-6 py-4 pl-6 pr-14 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent/50 transition-colors"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                !activeCategory
                  ? 'bg-brand-accent text-white'
                  : 'bg-transparent border border-white/20 text-gray-300 hover:border-white/40 hover:text-white'
              }`}
            >
              All Areas
            </button>
            {neighborhoodCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.category
                    ? 'bg-brand-accent text-white'
                    : 'bg-transparent border border-white/20 text-gray-300 hover:border-white/40 hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
          
          {/* Neighborhood Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filteredNeighborhoods.map((neighborhood) => (
              <button
                key={neighborhood.id}
                onClick={() => setActiveNeighborhood(neighborhood.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeNeighborhood === neighborhood.id
                    ? 'bg-white text-black'
                    : 'bg-transparent border border-white/20 text-gray-300 hover:border-white/40 hover:text-white'
                }`}
              >
                {neighborhood.name}
              </button>
            ))}
          </div>
          
          {filteredNeighborhoods.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No neighborhoods found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Selected Neighborhood Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {selectedNeighborhood?.name}
          </h2>
          
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent text-sm font-bold rounded-full border border-brand-accent/20 mb-4">
              {selectedNeighborhood?.category}
            </span>
            <p className="text-gray-400 leading-relaxed max-w-3xl">
              {selectedNeighborhood?.description}
            </p>
          </div>

          {/* Price Data Visualization */}
          {selectedNeighborhood?.id === 'jumeirah-islands' ? (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-gray-400 text-sm">Latest Price (Q4-2025)</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">AED 38,237</div>
                  <div className="text-sm text-brand-accent">+20.3% YoY</div>
                </div>
                
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-gray-400 text-sm">5-Year Growth</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">+340%</div>
                  <div className="text-sm text-gray-400">Since Q3-2020</div>
                </div>
                
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-gray-400 text-sm">Peak Price</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">AED 38,237</div>
                  <div className="text-sm text-gray-400">Q4-2025</div>
                </div>
              </div>

              {/* Price Chart */}
              <div className="bg-[#111] border border-white/5 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Quarterly Price Trends (AED per sqft)</h3>
                <div className="relative h-80">
                  <svg className="w-full h-full" viewBox="0 0 1000 320" preserveAspectRatio="none">
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 80}
                        x2="1000"
                        y2={i * 80}
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                      />
                    ))}
                    
                    {/* Price line */}
                    <polyline
                      points={jumeirahIslandsData.map((d, i) => {
                        const x = (i / (jumeirahIslandsData.length - 1)) * 1000;
                        const y = 320 - ((d.price - 8000) / 30000) * 320;
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#1DB976"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Gradient fill */}
                    <defs>
                      <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1DB976" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#1DB976" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points={[
                        '0,320',
                        ...jumeirahIslandsData.map((d, i) => {
                          const x = (i / (jumeirahIslandsData.length - 1)) * 1000;
                          const y = 320 - ((d.price - 8000) / 30000) * 320;
                          return `${x},${y}`;
                        }),
                        '1000,320'
                      ].join(' ')}
                      fill="url(#priceGradient)"
                    />
                  </svg>
                  
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 -ml-12">
                    <span>38K</span>
                    <span>30K</span>
                    <span>22K</span>
                    <span>14K</span>
                    <span>8K</span>
                  </div>
                </div>
                
                {/* X-axis labels */}
                <div className="flex justify-between mt-4 text-xs text-gray-500">
                  <span>Q3 2020</span>
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                  <span>2024</span>
                  <span>Q4 2025</span>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-[#111] border border-white/5 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Historical Data</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/5">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Quarter</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Price (AED/sqft)</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">QoQ Change</th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">YoY Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jumeirahIslandsData.slice().reverse().map((data, i, arr) => {
                        const prevQuarter = arr[i + 1];
                        const yearAgo = jumeirahIslandsData.find((_, idx) => idx === jumeirahIslandsData.length - 1 - i - 4);
                        const qoqChange = prevQuarter ? ((data.price - prevQuarter.price) / prevQuarter.price * 100).toFixed(1) : null;
                        const yoyChange = yearAgo ? ((data.price - yearAgo.price) / yearAgo.price * 100).toFixed(1) : null;
                        
                        return (
                          <tr key={data.quarter} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-3 px-4 text-white font-medium">{data.quarter}</td>
                            <td className="py-3 px-4 text-right text-white">{data.price.toLocaleString()}</td>
                            <td className={`py-3 px-4 text-right font-medium ${
                              qoqChange && parseFloat(qoqChange) > 0 ? 'text-brand-accent' : 
                              qoqChange && parseFloat(qoqChange) < 0 ? 'text-red-400' : 'text-gray-400'
                            }`}>
                              {qoqChange ? `${parseFloat(qoqChange) > 0 ? '+' : ''}${qoqChange}%` : '-'}
                            </td>
                            <td className={`py-3 px-4 text-right font-medium ${
                              yoyChange && parseFloat(yoyChange) > 0 ? 'text-brand-accent' : 
                              yoyChange && parseFloat(yoyChange) < 0 ? 'text-red-400' : 'text-gray-400'
                            }`}>
                              {yoyChange ? `${parseFloat(yoyChange) > 0 ? '+' : ''}${yoyChange}%` : '-'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#111] border border-white/5 rounded-3xl p-12 text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Price Data Coming Soon</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We're compiling comprehensive price data for {selectedNeighborhood?.name}. Check back soon for detailed villa prices, historical trends, and market insights.
              </p>
            </div>
          )}
        </div>
      </section>

      <GlobalFooter />
    </div>
    </>
  );
};

export default PriceDatabase;
