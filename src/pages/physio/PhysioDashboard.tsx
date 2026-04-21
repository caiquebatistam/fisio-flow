import React, { useEffect } from 'react';
import { usePhysioDashboard } from '../../hooks/usePhysio';
import { KPICard } from '../../components/physio/KPICard';
import { PatientTable } from '../../components/physio/PatientTable';
import { EfficiencyCard } from '../../components/physio/EfficiencyCard';

export const PhysioDashboard: React.FC = () => {
  const { data, isLoading, error, fetchDashboard } = usePhysioDashboard();

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] w-full">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-secondary font-medium">Sincronizando painel clínico...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="w-full bg-error-container p-6 rounded-3xl text-center">
        <p className="text-on-error-container font-medium">{error || 'Erro inesperado'}</p>
        <button 
          onClick={fetchDashboard}
          className="mt-4 px-6 py-2 bg-primary text-on-primary rounded-full font-bold shadow-md hover:bg-primary-fixed"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8 pb-10 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline text-on-background mb-1">
            Olá, {data.physioName}
          </h1>
          <p className="text-secondary font-medium">
            Resumo clínico da sua carteira de pacientes hoje.
          </p>
        </div>
        <button className="bg-primary text-on-primary font-bold px-6 py-3 rounded-full shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2 w-full md:w-auto">
          <span className="material-symbols-outlined mb-[1px]">add</span>
          Novo Paciente
        </button>
      </div>

      {/* KPIs & Efficiency Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <KPICard 
            title="Adesão Clínica Média" 
            value={`${data.kpis.clinicalAdherence}%`} 
            subtitle="Na última semana"
            icon="monitoring"
            trend="up"
          />
          <KPICard 
            title="Novas Prescrições" 
            value={data.kpis.newPrescriptions}
            subtitle="Nos últimos 7 dias" 
            icon="post_add"
          />
          <KPICard 
            title="Pronto para Alta" 
            value={data.kpis.readyForDischarge} 
            subtitle="Requer avaliação"
            icon="verified_user"
          />
        </div>
        <div className="col-span-1 border-l-0 md:border-l border-outline-variant/30 pl-0 md:pl-6">
            <EfficiencyCard />
        </div>
      </div>

      {/* Patient Section */}
      <div className="flex flex-col gap-5 mt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-headline text-on-background flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">groups</span>
            Meus Pacientes
          </h2>
          <div className="flex items-center text-primary font-bold cursor-pointer hover:underline text-sm md:text-base">
            Ver Todos
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </div>
        </div>
        
        {/* Responsive Table */}
        <PatientTable patients={data.patients} />
      </div>
    </div>
  );
};
