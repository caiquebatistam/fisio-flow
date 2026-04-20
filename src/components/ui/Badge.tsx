import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({ children, active, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${onClick ? 'cursor-pointer' : ''} ${
        active 
          ? 'bg-primary-dark text-white' 
          : 'bg-white text-secondary hover:bg-gray-100 border border-gray-200'
      }`}
    >
      {children}
    </span>
  );
};
