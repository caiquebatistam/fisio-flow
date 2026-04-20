import React, { useState } from 'react';
import { VideoCard } from '../components/ui/VideoCard';
import { EXERCISES, CATEGORIES, PATIENTS } from '../mocks';
import type { Exercise } from '../types';

export const Library: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos os Exercícios');
  const [selectedEx, setSelectedEx] = useState<Exercise[]>(EXERCISES.slice(0, 2));

  return (
    <>
      {/* Left Content: Exercise Library */}
      <div className="flex-1 space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Biblioteca de Exercícios</h1>
          <p className="text-secondary text-lg max-w-2xl">Organize e gerencie seus protocolos terapêuticos. Faça o upload de demonstrações personalizadas ou selecione do arquivo clínico.</p>
        </header>

        {/* Video Upload Area */}
        <div className="group relative overflow-hidden bg-surface-container rounded-3xl p-1 px-1 transition-all duration-300">
          <div className="relative bg-surface-container-low rounded-[1.4rem] border-2 border-dashed border-outline-variant/30 p-12 flex flex-col items-center justify-center text-center space-y-6 hover:bg-surface-container-high transition-colors">
            <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-on-surface">Upload de Nova Demonstração</h3>
              <p className="text-secondary text-sm mt-1">Arraste e solte arquivos MP4 ou MOV de alta qualidade. Tamanho máx. 500MB.</p>
            </div>
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98]">Selecionar Arquivo</button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-colors ${isActive ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-secondary hover:bg-surface-container'}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Exercise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-16 md:pb-0">
          {EXERCISES.map(ex => (
            <VideoCard key={ex.id} exercise={ex} onClick={() => setSelectedEx([...selectedEx, ex])} />
          ))}
        </div>
      </div>

      {/* Right Side: Quick Prescription */}
      <aside className="w-full lg:w-[400px] shrink-0">
        <div className="sticky top-28 space-y-8">
          
          {/* Prescription Card */}
          <div className="bg-surface-container-low rounded-3xl p-8 shadow-[0_8px_32px_rgba(27,29,14,0.04)] space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">assignment_add</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface">Prescrição Rápida</h3>
                <p className="text-secondary text-sm">Atribuir ao perfil do paciente</p>
              </div>
            </div>
            
            <div className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Atribuir ao Paciente</label>
                <div className="relative">
                  <select className="w-full bg-surface-container-highest border-none outline-none rounded-2xl py-4 px-5 appearance-none focus:ring-2 focus:ring-primary/20 text-on-surface font-medium cursor-pointer">
                    <option>Buscar nome do paciente...</option>
                    {PATIENTS.map(p => <option key={p.id}>{p.name}</option>)}
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary">Selecionados ({selectedEx.length})</label>
                  <button className="text-xs font-bold text-primary hover:underline" onClick={() => setSelectedEx([])}>Limpar tudo</button>
                </div>
                
                {selectedEx.map((ex, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-surface p-3 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-variant flex-shrink-0">
                      <img src={ex.thumbnail} alt={ex.title} className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-on-surface line-clamp-1">{ex.title}</p>
                      <p className="text-[10px] text-secondary">{ex.duration}</p>
                    </div>
                    <button className="text-outline hover:text-error transition-colors" onClick={() => {
                        const newEx = [...selectedEx];
                        newEx.splice(idx, 1);
                        setSelectedEx(newEx);
                      }}>
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">Instruções Clínicas</label>
                <textarea 
                  className="w-full bg-surface-container-highest border-none outline-none rounded-3xl p-5 focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-outline resize-none" 
                  placeholder="Adicione orientações específicas sobre forma, tempo ou limiares de dor..." 
                  rows={4}
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.96] flex items-center justify-center gap-3">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>send</span> 
                Enviar Prescrição
              </button>
            </div>
          </div>

          <div className="bg-primary-fixed/30 rounded-3xl p-8 space-y-4">
            <h4 className="text-sm font-bold text-on-primary-fixed-variant">Dica Pro: Sincronização da Biblioteca</h4>
            <p className="text-sm text-on-tertiary-fixed-variant leading-relaxed">Vídeos enviados aqui aparecem automaticamente no aplicativo móvel do paciente para sessões guiadas. Garanta clareza na iluminação para melhores resultados.</p>
          </div>

        </div>
      </aside>
    </>
  );
};
