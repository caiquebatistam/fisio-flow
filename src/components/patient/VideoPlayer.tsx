import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, thumbnailUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full rounded-[2rem] overflow-hidden bg-black aspect-video group shadow-md shadow-black/10">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={thumbnailUrl}
        src={videoUrl}
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
        playsInline
      />
      
      {/* Big Play/Pause Button Overlay - Good for Accessibility */}
      <button
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}
        aria-label={isPlaying ? 'Pausar vídeo' : 'Tocar vídeo'}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/90 text-on-primary rounded-full flex items-center justify-center transform transition-transform hover:scale-105 active:scale-95 shadow-lg">
          <span className="material-symbols-outlined text-4xl sm:text-5xl ml-1">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </div>
      </button>
    </div>
  );
};
