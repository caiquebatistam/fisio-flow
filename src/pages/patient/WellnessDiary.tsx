import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWellnessDiary } from '../../hooks/usePatient';
import { PainScale } from '../../components/patient/PainScale';

export const WellnessDiary: React.FC = () => {
  const navigate = useNavigate();
  const { submitLog, isSubmitting, submitSuccess, error } = useWellnessDiary();
  
  const [painLevel, setPainLevel] = useState<number | null>(null);
  const [observations, setObservations] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (painLevel === null) return; // Validation

    const success = await submitLog({
      date: new Date().toISOString(),
      painLevel,
      observations
    });

    if (success) {
      setTimeout(() => {
        navigate('/patient');
      }, 2000);
    }
  };

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in w-full">
        <div className="w-24 h-24 bg-primary text-on-primary rounded-full flex items-center justify-center mb-6 shadow-xl transform scale-in-center">
          <span className="material-symbols-outlined text-5xl">check</span>
        </div>
        <h2 className="text-2xl font-bold font-headline text-on-background mb-2">Muito obrigado!</h2>
        <p className="text-on-surface-variant max-w-xs mx-auto">
          Suas informações foram salvas e enviadas para o seu fisioterapeuta.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-lg mx-auto w-full pb-24">
      {/* Header back button */}
      <button 
        onClick={() => navigate('/patient')}
        className="flex items-center gap-2 text-primary font-bold mb-8 w-fit active:opacity-70 transition-opacity"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Voltar
      </button>

      <h1 className="text-3xl font-bold font-headline text-on-background mb-2">Diário de Bem-estar</h1>
      <p className="text-on-surface-variant mb-8">
        Registre como o seu corpo está se sentindo hoje para acompanharmos a sua evolução.
      </p>

      {error && (
        <div className="bg-error-container text-on-error-container p-4 rounded-xl mb-6 flex items-start gap-3">
          <span className="material-symbols-outlined">error</span>
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        {/* Pain Scale Area */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-on-background">Qual é o seu nível de dor atual?</h2>
          <PainScale value={painLevel} onChange={setPainLevel} />
        </div>

        {/* Observations */}
        <div className="flex flex-col gap-4">
          <label htmlFor="observations" className="text-lg font-bold text-on-background">
            Observações adicionais
          </label>
          <textarea
            id="observations"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
            placeholder="Sentiu algum estalo? A dor foi após a caminhada? Digite aqui..."
            className="w-full bg-surface-container-low text-on-surface p-4 rounded-2xl resize-none min-h-[120px] outline-none border-2 border-transparent focus:border-primary focus:bg-surface transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={painLevel === null || isSubmitting}
          className={`mt-4 w-full py-5 rounded-full font-bold text-lg shadow-md transition-all active:scale-[0.98] flex justify-center items-center gap-2 ${
            painLevel === null || isSubmitting
              ? 'bg-surface-variant text-on-surface-variant cursor-not-allowed opacity-70'
              : 'bg-primary text-on-primary hover:bg-primary-fixed hover:text-on-primary-fixed'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-on-surface-variant border-t-transparent rounded-full animate-spin" />
              Salvando...
            </>
          ) : (
            'Salvar e Enviar'
          )}
        </button>
      </form>
    </div>
  );
};
