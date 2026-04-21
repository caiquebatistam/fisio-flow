import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePatientDashboard } from '../../hooks/usePatient';
import { ProgressCard } from '../../components/patient/ProgressCard';

export const PatientDashboard: React.FC = () => {
  const { data, isLoading, error, fetchDashboard } = usePatientDashboard();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-secondary font-medium">Carregando o seu painel...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-error-container p-6 rounded-3xl text-center">
        <p className="text-on-error-container font-medium">{error || 'Erro inesperado'}</p>
        <button 
          onClick={fetchDashboard}
          className="mt-4 px-6 py-2 bg-primary text-on-primary rounded-full font-bold shadow-md"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  const { profile, exerciseOfTheDay } = data;

  return (
    <div className="flex flex-col gap-8 pb-24 w-full">
      {/* Header / Greeting */}
      <div className="flex items-center gap-4 animate-fade-in text-on-background">
        <img 
          src={profile.avatarUrl} 
          alt="Sua foto de perfil" 
          className="w-16 h-16 rounded-full object-cover shadow-sm ring-2 ring-surface-variant"
        />
        <div>
          <h1 className="text-2xl font-bold font-headline leading-tight">
            {profile.greetingMessage},<br/>
            <span className="text-primary">{profile.name}</span>
          </h1>
        </div>
      </div>

      {/* Primary CTA: Register Feeling - Big and centralized */}
      <button 
        onClick={() => navigate('/patient/diary')}
        className="w-full bg-tertiary-container hover:bg-tertiary-fixed text-on-tertiary-container font-bold text-lg py-5 px-6 rounded-[2rem] shadow-sm transform transition-transform active:scale-[0.98] flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl">mood</span>
          <span>Como você está hoje?</span>
        </div>
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>

      {/* Progress */}
      <ProgressCard progressPercentage={profile.weekProgress} />

      {/* Exercise of the Day */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold font-headline text-on-background">Exercício do Dia</h2>
        <div 
          onClick={() => navigate('/patient/exercise')}
          className="bg-surface-container-low rounded-[2rem] overflow-hidden shadow-sm relative group cursor-pointer transform transition-transform active:scale-[0.98]"
        >
          <div className="h-48 w-full relative">
            <img 
              src={exerciseOfTheDay.thumbnailUrl} 
              alt={exerciseOfTheDay.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            
            {/* Status badge */}
            {exerciseOfTheDay.completed && (
              <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                <span className="material-symbols-outlined text-[1rem]">check_circle</span>
                Concluído
              </div>
            )}

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium opacity-90 flex items-center gap-1 mb-1">
                <span className="material-symbols-outlined text-[1rem]">schedule</span>
                {exerciseOfTheDay.durationMinutes} minutos
              </p>
              <h3 className="text-xl font-bold">{exerciseOfTheDay.title}</h3>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
