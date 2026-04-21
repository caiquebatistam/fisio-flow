import React from 'react';

interface PainScaleProps {
  value: number | null;
  onChange: (value: number) => void;
}

const painIcons = [
  { level: 0, label: 'Sem dor', icon: 'sentiment_very_satisfied', color: 'text-primary' },
  { level: 2, label: 'Leve', icon: 'sentiment_satisfied', color: 'text-tertiary' },
  { level: 5, label: 'Moderada', icon: 'sentiment_neutral', color: 'text-secondary' },
  { level: 8, label: 'Forte', icon: 'sentiment_dissatisfied', color: 'text-error/70' },
  { level: 10, label: 'Intensa', icon: 'sentiment_very_dissatisfied', color: 'text-error' },
];

export const PainScale: React.FC<PainScaleProps> = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-3xl gap-2">
        {painIcons.map((item) => {
          const isSelected = value === item.level;
          return (
            <button
              key={item.level}
              type="button"
              onClick={() => onChange(item.level)}
              className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl flex-1 transition-all duration-300 active:scale-95 ${
                isSelected 
                  ? 'bg-primary text-on-primary shadow-md scale-105' 
                  : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant'
              }`}
              aria-label={`Dor ${item.label} (Nível ${item.level})`}
              aria-pressed={isSelected}
            >
              <span 
                className={`material-symbols-outlined text-3xl sm:text-4xl mb-2 transition-colors ${
                  isSelected ? 'text-on-primary' : item.color
                }`}
              >
                {item.icon}
              </span>
              <span className={`text-[10px] sm:text-xs font-bold text-center ${isSelected ? 'text-on-primary' : 'text-on-surface-variant'}`}>
                {item.level}
              </span>
            </button>
          );
        })}
      </div>
      <div className="flex justify-between px-2 mt-3 opacity-60 text-xs font-medium">
        <span>Nenhuma</span>
        <span>Máxima</span>
      </div>
    </div>
  );
};
