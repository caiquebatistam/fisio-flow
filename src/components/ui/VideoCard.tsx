import React from 'react';
import type { Exercise } from '../../types';

interface VideoCardProps {
  exercise: Exercise;
  onClick?: (exercise: Exercise) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ exercise, onClick }) => {
  return (
    <div 
      className="group bg-surface-container-low rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(27,29,14,0.06)] cursor-pointer"
      onClick={() => onClick && onClick(exercise)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          alt="Exercise Thumbnail" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src={exercise.thumbnail}
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">play_arrow</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start gap-4">
          <h4 className="text-lg font-bold text-on-surface leading-tight">{exercise.title}</h4>
          <span className="material-symbols-outlined text-outline hover:text-primary">more_vert</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {exercise.category === 'LOMBAR' ? (
            <>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">Mobilidade</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded">{exercise.category}</span>
            </>
          ) : (
            <>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">Força</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded">{exercise.category}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
