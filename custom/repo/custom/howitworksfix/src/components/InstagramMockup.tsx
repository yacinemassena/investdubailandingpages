import { motion } from 'motion/react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

export const InstagramMockup = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-[280px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-gray-900 relative flex flex-col"
    >
      {/* Header */}
      <div className="p-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
            <div className="w-full h-full bg-white rounded-full p-[2px]">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-2 h-2 border border-white rounded-sm" />
              </div>
            </div>
          </div>
          <span className="font-semibold text-[13px]">investdubai</span>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-600" />
      </div>

      {/* Post Image */}
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600607687931-cebf004f560c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Villa Renovation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
          Week 4
        </div>
      </div>

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            <MessageCircle className="w-6 h-6 text-gray-800" />
            <Send className="w-6 h-6 text-gray-800" />
          </div>
          <Bookmark className="w-6 h-6 text-gray-800" />
        </div>
        
        <div className="font-semibold text-[13px] mb-1">1,248 likes</div>
        
        <div className="text-[13px] leading-snug">
          <span className="font-semibold mr-1">investdubai</span>
          Week 4 update on the Palm Villa project! 🌴 The new open-plan kitchen layout is taking shape. Swipe to see the before photos. 
          <span className="text-blue-600"> #RealEstate #Dubai #Renovation</span>
        </div>
        
        <div className="text-[11px] text-gray-500 mt-2 uppercase tracking-wide">
          2 hours ago
        </div>
      </div>
    </motion.div>
  );
};
