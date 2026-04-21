import React from 'react';

export const EfficiencyCard: React.FC = () => {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 flex items-start gap-4 h-full">
      <div className="bg-primary rounded-2xl w-12 h-12 flex items-center justify-center text-on-primary flex-shrink-0 shadow-sm">
        <span className="material-symbols-outlined text-2xl animate-pulse">tips_and_updates</span>
      </div>
      <div>
        <h4 className="font-bold text-on-primary-fixed-variant mb-2 font-headline">Dica de Eficiência Clínica</h4>
        <p className="text-secondary text-sm leading-relaxed">
          Pacientes que recebem pequenos ajustes semanais via App apresentam uma <strong>taxa de adesão 30% maior</strong>. 
          Use o diário de bem-estar como termômetro!
        </p>
      </div>
    </div>
  );
};
