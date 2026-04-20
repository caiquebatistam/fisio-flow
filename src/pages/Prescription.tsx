import React, { useState } from 'react';
import { SearchBar } from '../components/ui/SearchBar';
import { VideoCard } from '../components/ui/VideoCard';
import { Button } from '../components/ui/Button';
import { PATIENTS, EXERCISES } from '../mocks';
import type { Patient, Exercise } from '../types';
import { Plus, X, Search, CheckCircle2, UserCircle } from 'lucide-react';

export const Prescription: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([]);
  const [instructions, setInstructions] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [searchPatient, setSearchPatient] = useState('');

  const filteredPatients = PATIENTS.filter(p => 
    p.name.toLowerCase().includes(searchPatient.toLowerCase())
  );

  const handleAddExercise = (exercise: Exercise) => {
    setSelectedExercises([...selectedExercises, exercise]);
  };

  const handleRemoveExercise = (indexToRemove: number) => {
    setSelectedExercises(selectedExercises.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSend = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setSelectedExercises([]);
      setInstructions('');
      setSelectedPatient(null);
    }, 2500);
  };

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col md:flex-row bg-background">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-4 z-50 bg-primary-dark text-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 transition-all animate-bounce">
          <CheckCircle2 className="w-6 h-6 text-white" />
          <span className="font-medium">Treino enviado com sucesso!</span>
        </div>
      )}

      {/* PAINEL ESQUERDO: Lista de Pacientes */}
      <div className={`w-full md:w-80 border-r border-gray-200 bg-white flex flex-col ${selectedPatient ? 'hidden md:flex' : 'flex'} h-full pb-16 sm:pb-0`}>
        <div className="p-4 border-b border-gray-100 shadow-sm z-10">
          <h2 className="text-xl font-bold mb-4 text-slate-800">Meus Pacientes</h2>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
            <input 
              type="text" 
              placeholder="Buscar paciente..."
              className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-shadow"
              value={searchPatient}
              onChange={(e) => setSearchPatient(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {filteredPatients.map(patient => (
            <div 
              key={patient.id}
              onClick={() => setSelectedPatient(patient)}
              className={`p-4 border-b border-gray-50 cursor-pointer transition-all hover:bg-gray-50 flex items-center gap-4 ${selectedPatient?.id === patient.id ? 'bg-primary/5 border-l-4 border-l-primary-dark' : 'border-l-4 border-l-transparent'}`}
            >
              {patient.avatar ? (
                <img src={patient.avatar} alt={patient.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
              ) : (
                <UserCircle className="w-12 h-12 text-gray-300" />
              )}
              <div>
                <h3 className="font-bold text-slate-800 leading-tight mb-1">{patient.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-medium">{patient.condition}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAINEL DIREITO: Prescrição */}
      <div className={`flex-1 flex flex-col h-full bg-background ${!selectedPatient ? 'hidden md:flex' : 'flex'} pb-16 sm:pb-0`}>
        {!selectedPatient ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 opacity-60">
            <UserCircle className="w-24 h-24 text-secondary/30 mb-6" strokeWidth={1} />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Prescrição Vazia</h2>
            <p className="text-secondary max-w-sm">Selecione um paciente na lista à esquerda para carregar seu perfil e montar um plano terapêutico.</p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            {/* Header do Paciente */}
            <div className="p-4 sm:p-6 bg-white border-b border-gray-200 flex items-center gap-4 shadow-sm z-10">
              <button 
                className="md:hidden p-2 -ml-2 text-secondary hover:bg-gray-100 hover:text-slate-800 rounded-lg transition-colors"
                onClick={() => setSelectedPatient(null)}
              >
                ← Voltar
              </button>
              {selectedPatient.avatar && <img src={selectedPatient.avatar} alt={selectedPatient.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 hidden sm:block" />}
              <div>
                <h2 className="text-2xl font-bold text-slate-800">{selectedPatient.name}</h2>
                <p className="text-sm text-secondary mt-0.5">Tratamento focado em <span className="font-semibold text-primary">{selectedPatient.condition}</span></p>
              </div>
            </div>

            {/* Area de scroll dividida */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Box Esquerdo (Biblioteca) */}
              <div className="flex flex-col gap-4 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm h-fit lg:max-h-[calc(100vh-200px)]">
                <h3 className="font-bold text-lg text-slate-800 border-b border-gray-100 pb-3">Biblioteca</h3>
                <div className="overflow-y-auto flex flex-col gap-4 pr-1 snap-y pb-4 css-scrollbar-hide">
                  {EXERCISES.map(exercise => (
                    <div key={exercise.id} className="snap-start">
                    <VideoCard 
                      exercise={exercise} 
                      actionButton={
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          fullWidth 
                          className="mt-2 border border-primary/20"
                          onClick={() => handleAddExercise(exercise)}
                        >
                          <Plus className="w-4 h-4 mr-2" /> Adicionar
                        </Button>
                      }
                    />
                    </div>
                  ))}
                </div>
              </div>

              {/* Box Direito (O Treino) */}
              <div className="bg-white rounded-2xl p-5 border border-primary/30 shadow-md flex flex-col min-h-[500px] h-fit">
                <h3 className="font-bold text-lg text-slate-800 pb-3 flex items-center justify-between border-b border-primary/10">
                  <span className="flex items-center gap-2">Treino Atual</span>
                  <span className="bg-primary/10 text-primary-dark px-3 py-1 rounded-full text-sm font-bold">
                    {selectedExercises.length} exercícios
                  </span>
                </h3>
                  
                {selectedExercises.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 border-2 border-dashed border-gray-200">
                      <Plus className="w-8 h-8 text-gray-300" />
                    </div>
                    <p className="text-secondary font-medium">O treino está vazio</p>
                    <p className="text-sm text-gray-400 mt-1 max-w-[200px]">Adicione vídeos da biblioteca ao lado clicando em "Adicionar"</p>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col gap-3 py-4 overflow-y-auto css-scrollbar-hide">
                    {selectedExercises.map((exercise, idx) => (
                      <div key={exercise.id + idx} className="flex justify-between items-center p-3 sm:p-4 bg-background/50 rounded-xl border border-gray-200">
                        <div className="flex items-center gap-4">
                          <span className="font-black text-primary-dark/40 text-2xl w-6 text-right select-none">{idx + 1}</span>
                          <div>
                            <p className="font-bold text-slate-800 text-sm leading-tight mb-1">{exercise.title}</p>
                            <p className="text-xs text-secondary font-medium">{exercise.duration} • {exercise.category}</p>
                          </div>
                        </div>
                        <button onClick={() => handleRemoveExercise(idx)} className="p-2 text-secondary hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                          <X className="w-5 h-5 pointer-events-none" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <label className="block text-sm font-bold text-slate-800 mb-2">Observações (Opcional)</label>
                  <textarea 
                    rows={3}
                    className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none text-sm shadow-inner"
                    placeholder="Ex: Fazer o exercício 2 com amplitude reduzida. Avisar caso sinta qualquer dormência nas costas."
                    value={instructions}
                    onChange={e => setInstructions(e.target.value)}
                  ></textarea>
                
                  <Button 
                    className="mt-4 shadow-lg active:scale-95 transition-transform"
                    fullWidth 
                    size="lg" 
                    onClick={handleSend}
                    disabled={selectedExercises.length === 0}
                  >
                    <span className="font-bold tracking-wide">Enviar Treino</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .css-scrollbar-hide::-webkit-scrollbar { display: none; }
        .css-scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};
