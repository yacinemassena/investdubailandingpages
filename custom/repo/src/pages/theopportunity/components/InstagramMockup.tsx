import { useState, useEffect, useRef, useCallback } from 'react';
import { Heart, Send, MoreHorizontal } from 'lucide-react';

const stories = [
  { id: 1, video: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/stories/S1.mp4', time: '2h' },
  { id: 2, video: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/stories/S2.mp4', time: '3h' },
  { id: 3, video: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/stories/S3.mp4', time: '5h' },
  { id: 4, video: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/stories/S4.mp4', time: '6h' },
  { id: 5, video: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/stories/S5.mp4', time: '8h' },
  { id: 6, video: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/stories/S6.mp4', time: '10h' },
  { id: 7, video: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/stories/S7.mp4', time: '12h' },
  { id: 8, video: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/stories/S8.mp4', time: '14h' },
  { id: 9, video: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/stories/S9.mp4', time: '16h' },
  { id: 10, video: 'https://pub-46bf43f4e0fb4daab5a13e7a41223da4.r2.dev/stories/S10.mp4', time: '1d' },
];

export const InstagramMockup = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Track video progress for the progress bar
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const onEnded = () => {
      setCurrentStory(s => (s + 1) % stories.length);
      setProgress(0);
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, [currentStory]);

  // Play/pause based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    if (isVisible) {
      video.play().catch(() => {});
    }
  }, [currentStory, isVisible]);

  // IntersectionObserver to auto-play when visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        const video = videoRef.current;
        if (!video) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const nextStory = useCallback(() => {
    setCurrentStory(s => (s + 1) % stories.length);
    setProgress(0);
  }, []);

  const prevStory = useCallback(() => {
    setCurrentStory(s => (s - 1 + stories.length) % stories.length);
    setProgress(0);
  }, []);

  return (
    <div ref={containerRef} className="relative rounded-3xl overflow-hidden bg-black border-4 border-gray-800 shadow-2xl aspect-[9/16] md:h-[500px] max-w-sm mx-auto flex flex-col font-sans group">
      

      {/* Story View */}
      <div className="relative flex-1 bg-gray-900">
        <video
          ref={videoRef}
          src={stories[currentStory].video}
          muted
          playsInline
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
              <MoreHorizontal className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

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
