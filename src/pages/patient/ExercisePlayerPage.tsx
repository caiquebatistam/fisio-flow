import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePatientDashboard, useExerciseSession } from '../../hooks/usePatient';
import { VideoPlayer } from '../../components/patient/VideoPlayer';

export const ExercisePlayerPage: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, fetchDashboard } = usePatientDashboard();
  const { completeSession, isCompleting, completed } = useExerciseSession();

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  if (isLoading || !data) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
      </div>
    );
  }

  const { exerciseOfTheDay } = data;
  const isAlreadyDone = exerciseOfTheDay.completed || completed;

  return (
    <div className="flex flex-col max-w-lg mx-auto w-full pb-24 h-full relative">
      {/* Header back button */}
      <button 
        onClick={() => navigate('/patient')}
        className="flex items-center gap-2 text-primary font-bold mb-6 w-fit active:opacity-70 transition-opacity"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Voltar à Home
      </button>

      <h1 className="text-3xl font-bold font-headline text-on-background mb-1">
        {exerciseOfTheDay.title}
      </h1>
      <p className="text-secondary font-medium flex items-center gap-1 mb-8">
        <span className="material-symbols-outlined text-[1rem]">schedule</span>
        {exerciseOfTheDay.durationMinutes} minutos dedicados a você
      </p>

      {/* Video Player */}
      <div className="mb-8">
        <VideoPlayer 
          videoUrl={exerciseOfTheDay.videoUrl} 
          thumbnailUrl={exerciseOfTheDay.thumbnailUrl} 
        />
      </div>

      {/* Guidelines text high readability */}
      <div className="bg-surface-container p-6 rounded-[2rem] mb-10 shadow-sm border border-outline-variant/30">
        <h2 className="text-xl font-bold text-on-surface mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">info</span>
          Orientações da Fisio
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed font-body">
          {exerciseOfTheDay.physioGuideline}
        </p>
      </div>

      {/* Complete Button & Success Animation */}
      <div className="mt-auto relative w-full flex justify-center">
        {isAlreadyDone ? (
          <div className="bg-primary-container text-on-primary-container w-full py-5 rounded-full font-bold text-lg text-center flex items-center justify-center gap-2 animate-fade-in shadow-md">
            <span className="material-symbols-outlined text-2xl">task_alt</span>
            Exercício Concluído! Parabéns!
          </div>
        ) : (
          <button
            onClick={() => completeSession(exerciseOfTheDay.id)}
            disabled={isCompleting}
            className={`w-full py-5 rounded-full font-bold text-lg shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${
              isCompleting 
                ? 'bg-surface-variant text-on-surface-variant cursor-not-allowed opacity-70' 
                : 'bg-primary text-on-primary hover:bg-primary-fixed hover:text-on-primary-fixed'
            }`}
          >
            {isCompleting ? (
              <>
                <div className="w-5 h-5 border-2 border-on-surface-variant border-t-transparent rounded-full animate-spin" />
                Registrando...
              </>
            ) : (
              'Concluir Exercício'
            )}
          </button>
        )}
        
        {/* CSS Only Success Animation overlay */}
        {completed && !exerciseOfTheDay.completed && (
          <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-40 h-40 bg-primary rounded-full animate-ping opacity-75" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white animate-bounce">
              <span className="material-symbols-outlined text-[8rem]">star</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
