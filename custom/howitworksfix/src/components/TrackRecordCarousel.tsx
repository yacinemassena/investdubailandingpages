import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const TrackRecordCarousel = ({ rows = 1, showTitle = true, showExpandButton = true }) => {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Palm Jumeirah Villa',
      roi: '18.5%',
      duration: '14 Months',
      status: 'Sold'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600607687931-cebf004f560c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Dubai Hills Estate',
      roi: '22.1%',
      duration: '11 Months',
      status: 'Sold'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Emirates Hills Mansion',
      roi: '19.8%',
      duration: '16 Months',
      status: 'Sold'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Jumeirah Golf Estates',
      roi: '24.5%',
      duration: '9 Months',
      status: 'Sold'
    }
  ];

  return (
    <div className="w-full overflow-hidden py-12">
      {showTitle && (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Track Record</h2>
            <p className="text-gray-400">Past performance of our renovated villas.</p>
          </div>
          {showExpandButton && (
            <button className="text-white flex items-center gap-2 hover:text-gray-300 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
      
      <div className="flex gap-6 px-6 lg:px-12 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
        {properties.map((prop, i) => (
          <motion.div 
            key={prop.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="min-w-[300px] md:min-w-[400px] bg-white/5 rounded-3xl overflow-hidden border border-white/10 snap-start flex-shrink-0 group"
          >
            <div className="relative h-48 md:h-64 overflow-hidden">
              <img 
                src={prop.image} 
                alt={prop.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                {prop.status}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">{prop.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Net ROI</div>
                  <div className="text-2xl font-bold text-emerald-400">{prop.roi}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Duration</div>
                  <div className="text-xl font-bold text-white">{prop.duration}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
