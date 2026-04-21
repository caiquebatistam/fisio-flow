import React from 'react';

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: string;
  trend?: 'up' | 'down' | 'neutral';
}

export const KPICard: React.FC<KPICardProps> = ({ title, value, subtitle, icon, trend }) => {
  return (
    <div className="bg-surface-container-low p-6 rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col justify-between h-full bg-white dark:bg-stone-900 transition-transform hover:-translate-y-1 duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-secondary font-medium text-sm w-3/4 leading-tight">{title}</h3>
        <div className="bg-primary-container/30 text-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
      <div>
        <p className="text-3xl font-bold font-headline text-on-surface mb-1 flex items-baseline gap-2">
          {value}
          {trend === 'up' && <span className="material-symbols-outlined text-primary text-base">trending_up</span>}
          {trend === 'down' && <span className="material-symbols-outlined text-error text-base">trending_down</span>}
        </p>
        {subtitle && <p className="text-xs text-on-surface-variant font-medium">{subtitle}</p>}
      </div>
    </div>
  );
};
