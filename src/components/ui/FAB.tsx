import React from 'react';

interface FABProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export const FAB: React.FC<FABProps> = ({ icon, className = '', ...props }) => {
  return (
    <button
      className={`fixed bottom-6 right-6 z-50 bg-primary-dark text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-primary/50 flex items-center justify-center ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};
