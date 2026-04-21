import React, { useEffect, useState } from 'react';
import { usePhysioDashboard } from '../../hooks/usePhysio';
import { PatientTable } from '../../components/physio/PatientTable';

export const PatientList: React.FC = () => {
  const { data, isLoading, error, fetchDashboard } = usePhysioDashboard();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAlert, setFilterAlert] = useState(false);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  if (isLoading || !data) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] w-full">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
      </div>
    );
  }

  // Frontend filtering
  let filteredPatients = data.patients.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  if (filterAlert) {
    filteredPatients = filteredPatients.filter(p => p.status === 'alert');
  }

  return (
    <div className="w-full flex flex-col gap-6 animate-fade-in pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline text-on-background mb-1">
            Gestão de Pacientes
          </h1>
          <p className="text-secondary font-medium">
            Acompanhe a aderência e gerencie a carteira completa.
          </p>
        </div>
        <button className="bg-primary hover:bg-primary-fixed text-on-primary font-bold px-6 py-3 rounded-full shadow-md active:scale-95 transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined mb-[1px]">add</span>
          Adicionar Novo Paciente
        </button>
      </div>

      {/* Quick Actions (Search and Filters) */}
      <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary">search</span>
          <input 
            type="text" 
            placeholder="Buscar paciente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface-container-low text-on-surface border-none rounded-full pl-12 pr-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-shadow placeholder:text-outline shadow-sm"
          />
        </div>
        
        <button 
          onClick={() => setFilterAlert(!filterAlert)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-sm transition-colors border ${
            filterAlert 
              ? 'bg-error-container text-on-error-container border-error-container' 
              : 'bg-surface-container-lowest text-secondary border-outline-variant hover:bg-surface-container-low hover:text-on-surface'
          }`}
        >
          <span className="material-symbols-outlined text-[1.2rem]">warning</span>
          Filtrar por Alerta
        </button>
      </div>

      {/* Table section matching stitch */}
      <div className="mt-2">
        <PatientTable patients={filteredPatients} />
        {filteredPatients.length === 0 && (
          <div className="p-10 text-center text-secondary font-medium bg-surface-container-low rounded-3xl mt-4">
            Nenhum paciente encontrado.
          </div>
        )}
      </div>

    </div>
  );
};
