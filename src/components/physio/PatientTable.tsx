import React from 'react';
import type { PatientListItem } from '../../types/patient';

interface PatientTableProps {
  patients: PatientListItem[];
}

export const PatientTable: React.FC<PatientTableProps> = ({ patients }) => {
  const getStatusBadge = (status: 'active' | 'alert' | 'ready') => {
    switch (status) {
      case 'active':
        return <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-bold w-fit">Em Progresso</span>;
      case 'alert':
        return <span className="px-3 py-1 bg-error-container text-on-error-container rounded-full text-xs font-bold w-fit">Atenção</span>;
      case 'ready':
        return <span className="px-3 py-1 bg-primary text-on-primary rounded-full text-xs font-bold w-fit">Alta Próxima</span>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-stone-900 rounded-[2rem] shadow-sm border border-outline-variant/30 overflow-hidden">
      {/* Table Header for Desktop */}
      <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-5 border-b border-outline-variant/20 bg-surface-container-lowest/50 text-secondary font-semibold text-xs tracking-wider uppercase">
        <div className="col-span-4">Paciente</div>
        <div className="col-span-3">Patologia</div>
        <div className="col-span-2 text-center">Adesão</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-1 text-right">Ação</div>
      </div>

      {/* Table Body */}
      <div className="flex flex-col">
        {patients.map((patient, idx) => (
          <div 
            key={patient.id} 
            className={`flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-4 px-6 md:px-8 py-5 items-center hover:bg-surface-container-low/50 transition-colors ${idx !== patients.length - 1 ? 'border-b border-outline-variant/10' : ''}`}
          >
            {/* Patient Info */}
            <div className="col-span-4 flex items-center gap-4 w-full">
              <img 
                src={patient.avatarUrl || 'https://images.unsplash.com/placeholder-avatar'} 
                alt={patient.name} 
                className="w-12 h-12 rounded-full object-cover shadow-sm bg-surface-variant flex-shrink-0"
              />
              <div className="flex flex-col items-start w-full md:w-auto">
                <span className="font-bold text-on-surface text-base">{patient.name}</span>
                <span className="text-secondary text-xs md:text-sm font-medium">Visto: {patient.lastActive}</span>
              </div>
            </div>

            {/* Pathologies */}
            <div className="col-span-3 w-full md:w-auto flex flex-col md:block">
              <span className="md:hidden text-xs text-secondary font-bold uppercase mb-1">Patologia</span>
              <span className="text-on-surface-variant font-medium text-sm">{patient.condition}</span>
            </div>

            {/* Adherence */}
            <div className="col-span-2 flex flex-col justify-center items-center w-full mt-2 md:mt-0">
              <div className="flex items-center justify-between w-full mb-1 px-1">
                <span className="md:hidden text-xs text-secondary font-bold uppercase">Adesão</span>
                <span className="text-xs font-bold text-primary">{patient.adherencePercentage}%</span>
              </div>
              <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    patient.adherencePercentage >= 80 ? 'bg-primary' : patient.adherencePercentage > 50 ? 'bg-tertiary' : 'bg-error'
                  }`}
                  style={{ width: `${patient.adherencePercentage}%` }}
                />
              </div>
            </div>

            {/* Status */}
            <div className="col-span-2 w-full md:w-auto flex items-center mt-3 md:mt-0">
              {getStatusBadge(patient.status)}
            </div>

            {/* Action */}
            <div className="col-span-1 w-full md:w-auto flex justify-end mt-3 md:mt-0">
              <button className="bg-surface-container hover:bg-surface-container-high text-on-surface w-full md:w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
