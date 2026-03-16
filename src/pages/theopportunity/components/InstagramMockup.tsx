import { useState, useEffect } from 'react';
import { Heart, Send, MoreHorizontal, X, Pause, Play as PlayIcon } from 'lucide-react';

const stories = [
  { id: 1, image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-25.jpg', text: '', time: '2h' },
  { id: 2, image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-30.jpg', text: '', time: '5h' },
  { id: 3, image: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/flip-1.jpg', text: '', time: '1d' }
];

export const InstagramMockup = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (currentStory < stories.length - 1) {
              setCurrentStory(s => s + 1);
              return 0;
            } else {
              setIsPlaying(false);
              return 100;
            }
          }
          return prev + 1;
        });
      }, 50);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentStory]);

  const startStory = () => {
    setIsPlaying(true);
    if (progress >= 100 && currentStory === stories.length - 1) {
      setCurrentStory(0);
      setProgress(0);
    }
  };

  const nextStory = () => {
    if (currentStory < stories.length - 1) {
      setCurrentStory(s => s + 1);
      setProgress(0);
    }
  };

  const prevStory = () => {
    if (currentStory > 0) {
      setCurrentStory(s => s - 1);
      setProgress(0);
    }
  };

  return (
    <div className="relative rounded-3xl overflow-hidden bg-black border-4 border-gray-800 shadow-2xl aspect-[9/16] md:h-[500px] max-w-sm mx-auto flex flex-col font-sans group">
      
      {/* Play Button Overlay (when not playing) */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 z-[40] flex items-center justify-center bg-black/40 cursor-pointer backdrop-blur-sm transition-all"
          onClick={startStory}
        >
          <div className="bg-brand-accent text-white p-4 rounded-full shadow-xl flex items-center gap-2 transform group-hover:scale-110 transition-transform">
            <PlayIcon className="w-6 h-6 fill-current" />
            <span className="font-bold pr-2">See Progress</span>
          </div>
        </div>
      )}

      {/* Story View */}
      <div className="relative flex-1 bg-gray-900">
        <img 
          src={stories[currentStory].image} 
          alt="Story" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Navigation Overlays */}
        <div className="absolute inset-y-0 left-0 w-1/3 z-20" onClick={prevStory} />
        <div className="absolute inset-y-0 right-0 w-1/3 z-20" onClick={nextStory} />

        {/* Gradient overlays for text readability */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />

        {/* Header */}
        <div className="absolute top-0 inset-x-0 p-4 z-30">
          {/* Progress Bars */}
          <div className="flex gap-1 mb-4">
            {stories.map((story, i) => (
              <div key={story.id} className="h-0.5 flex-1 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-75 ease-linear"
                  style={{ 
                    width: i === currentStory ? `${progress}%` : (i < currentStory ? '100%' : '0%') 
                  }}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white p-0.5">
                <img src="https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/images/investdubai-logo.jpg" alt="InvestDubai Logo" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <span className="text-white font-semibold text-sm shadow-sm">investdubai</span>
                <span className="text-white/80 text-xs ml-2">{stories[currentStory].time}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setIsPlaying(!isPlaying)} className="text-white relative z-40">
                {isPlaying ? <Pause className="w-5 h-5" /> : <PlayIcon className="w-5 h-5 fill-current" />}
              </button>
              <MoreHorizontal className="w-5 h-5 text-white" />
              <X className="w-6 h-6 text-white" onClick={() => setIsPlaying(false)} />
            </div>
          </div>
        </div>

        {/* Story Content/Text */}
        {stories[currentStory].text && stories[currentStory].text.trim() !== '' && (
          <div className="absolute bottom-20 inset-x-0 p-4 z-20 text-center">
            <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-medium">
              {stories[currentStory].text}
            </span>
          </div>
        )}

        {/* Footer Actions */}
        <div className="absolute bottom-0 inset-x-0 p-4 flex items-center gap-4 z-30">
          <div className="flex-1 bg-transparent border border-white/40 rounded-full px-4 py-2.5 text-white/80 text-sm">
            Send message
          </div>
          <Heart className="w-6 h-6 text-white" />
          <Send className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};
