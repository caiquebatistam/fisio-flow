import React from 'react';

interface ProgressCardProps {
  progressPercentage: number;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({ progressPercentage }) => {
  return (
    <div className="bg-primary-container p-6 rounded-[2rem] shadow-sm flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <h3 className="text-on-primary-container font-headline font-bold text-lg mb-1">
          O seu progresso
        </h3>
        <p className="text-on-primary-fixed-variant text-sm pr-4">
          Você completou {progressPercentage}% dos exercícios desta semana. Continue assim!
        </p>
      </div>
      
      {/* Circular Progress Indicator */}
      <div className="relative flex-shrink-0 w-16 h-16">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-primary-fixed-dim"
            stroke="currentColor"
            fill="none"
            strokeWidth="4"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-primary transition-all duration-1000 ease-out"
            stroke="currentColor"
            fill="none"
            strokeWidth="4"
            strokeDasharray={`${progressPercentage}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-on-primary-container">
            {progressPercentage}%
          </span>
        </div>
      </div>
    </div>
  );
};
