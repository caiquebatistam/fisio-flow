import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Library } from './pages/Library';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="bg-[#fbfbe2]/80 dark:bg-stone-950/80 backdrop-blur-xl sticky top-0 z-50 shadow-[0_8px_24px_rgba(27,29,14,0.06)]">
        <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-4">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-bold text-[#486730] dark:text-[#87a96b]">FisioFlow</span>
            <div className="hidden md:flex items-center gap-8 font-inter antialiased tracking-tight">
              <a className="text-[#50606f] dark:text-stone-400 hover:text-[#486730] transition-colors duration-200" href="#">Painel</a>
              <a className="text-[#50606f] dark:text-stone-400 hover:text-[#486730] transition-colors duration-200" href="#">Pacientes</a>
              <a className="text-[#486730] dark:text-[#87a96b] font-bold border-b-2 border-[#486730] pb-1" href="#">Biblioteca</a>
              <a className="text-[#50606f] dark:text-stone-400 hover:text-[#486730] transition-colors duration-200" href="#">Prescrições</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full w-64 border-none shadow-sm">
              <span className="material-symbols-outlined text-outline">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 outline-none" placeholder="Buscar exercícios..." type="text"/>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-secondary hover:bg-[#e4e4cc]/50 rounded-lg transition-colors active:scale-[0.98]">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-secondary hover:bg-[#e4e4cc]/50 rounded-lg transition-colors active:scale-[0.98]">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden ring-2 ring-white">
                <img alt="Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUZrF0qTvkPrC9noX1Fpk77sfnEJcNzuamllnTfi83Ma52brgOZnwhqQgl5WSFf5y6jq82H5qn28ws2YYC9K_D-kEDLXayjXKYZCYT8UBv7tTgrdPpOV_FfprR2eMiVrh2PxFHEG1N4YZSBVABDqR6knejHxulz--gp87qDIexGKs5i7t3RIzDacGA0rnrOWR8RRseE-pnLvedIi2ynL39nDPKau75GKw-sCrMg5XguzaszM12-r-kkuhwJBq_HuM5XBnBZ6rmNyA" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto px-6 sm:px-12 py-10 flex flex-col lg:flex-row gap-10">
        <Library />
      </main>
      
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#fbfbe2]/90 backdrop-blur-2xl flex justify-around items-center px-6 py-4 rounded-t-[2.5rem] z-50 shadow-[0_-8px_32px_rgba(27,29,14,0.08)]">
        <div className="flex flex-col items-center justify-center text-[#50606f] px-4 py-2">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-inter text-[11px] font-semibold tracking-wide">Hoje</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#50606f] px-4 py-2">
          <span className="material-symbols-outlined">edit_note</span>
          <span className="font-inter text-[11px] font-semibold tracking-wide">Diário</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#c9eea9] text-[#1b1d0e] rounded-full px-6 py-2">
          <span className="material-symbols-outlined">fitness_center</span>
          <span className="font-inter text-[11px] font-semibold tracking-wide">Exercícios</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#50606f] px-4 py-2">
          <span className="material-symbols-outlined">person</span>
          <span className="font-inter text-[11px] font-semibold tracking-wide">Perfil</span>
        </div>
      </div>
    </Router>
  );
};

export default App;
