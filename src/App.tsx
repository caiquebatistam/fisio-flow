import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import { Library } from './pages/Library';
import { PatientDashboard } from './pages/patient/PatientDashboard';
import { WellnessDiary } from './pages/patient/WellnessDiary';
import { ExercisePlayerPage } from './pages/patient/ExercisePlayerPage';
import { PhysioDashboard } from './pages/physio/PhysioDashboard';
import { PatientList } from './pages/physio/PatientList';
import { Prescription } from './pages/Prescription';

const PhysioLayout = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-[#fbfbe2] min-h-screen">
      <nav className="bg-[#fbfbe2]/80 dark:bg-stone-950/80 backdrop-blur-xl sticky top-0 z-50 shadow-[0_8px_24px_rgba(27,29,14,0.06)]">
        <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-4">
          <div className="flex items-center gap-12">
            <span className="text-2xl font-bold text-[#486730] dark:text-[#87a96b]">FisioFlow</span>
            <div className="hidden md:flex items-center gap-8 font-inter antialiased tracking-tight">
              <Link to="/physio/dashboard" className={`transition-colors duration-200 ${isActive('/physio/dashboard') ? 'text-[#486730] dark:text-[#87a96b] font-bold border-b-2 border-[#486730] pb-1' : 'text-[#50606f] dark:text-stone-400 hover:text-[#486730]'}`}>Painel</Link>
              <Link to="/physio/patients" className={`transition-colors duration-200 ${isActive('/physio/patients') ? 'text-[#486730] dark:text-[#87a96b] font-bold border-b-2 border-[#486730] pb-1' : 'text-[#50606f] dark:text-stone-400 hover:text-[#486730]'}`}>Pacientes</Link>
              <Link to="/physio/library" className={`transition-colors duration-200 ${isActive('/physio/library') ? 'text-[#486730] dark:text-[#87a96b] font-bold border-b-2 border-[#486730] pb-1' : 'text-[#50606f] dark:text-stone-400 hover:text-[#486730]'}`}>Biblioteca</Link>
              <Link to="/physio/prescriptions" className={`transition-colors duration-200 ${isActive('/physio/prescriptions') ? 'text-[#486730] dark:text-[#87a96b] font-bold border-b-2 border-[#486730] pb-1' : 'text-[#50606f] dark:text-stone-400 hover:text-[#486730]'}`}>Prescrições</Link>
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
        <Outlet />
      </main>
    </div>
  );
};

const PatientLayout = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-32 flex flex-col items-center min-h-[100dvh]">
        <Outlet />
      </main>
      
      {/* Mobile-first bottom navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-bright/95 backdrop-blur-2xl flex justify-around items-center px-4 py-3 rounded-t-[2.5rem] z-50 shadow-[0_-8px_32px_rgba(27,29,14,0.06)] border border-outline-variant/20">
        <Link to="/patient" className={`flex flex-col items-center justify-center p-2 min-w-[4rem] transition-colors ${isActive('/patient') ? 'text-primary' : 'text-secondary'}`}>
          <span className={`material-symbols-outlined ${isActive('/patient') ? 'font-[variation-settings:"FILL"1]' : ''}`}>home</span>
          <span className="font-inter text-[10px] font-bold tracking-wide mt-1">Início</span>
        </Link>
        <Link to="/patient/diary" className={`flex flex-col items-center justify-center p-2 min-w-[4rem] transition-colors ${isActive('/patient/diary') ? 'text-primary' : 'text-secondary'}`}>
          <span className={`material-symbols-outlined ${isActive('/patient/diary') ? 'font-[variation-settings:"FILL"1]' : ''}`}>edit_note</span>
          <span className="font-inter text-[10px] font-bold tracking-wide mt-1">Diário</span>
        </Link>
        <Link to="/patient/exercise" className={`flex flex-col items-center justify-center bg-primary text-on-primary rounded-[1.5rem] px-5 py-3 ml-2 shadow-md transform transition-transform active:scale-[0.96]`}>
          <span className="material-symbols-outlined text-xl">fitness_center</span>
          <span className="font-inter text-[10px] font-bold tracking-wide mt-1">Treino</span>
        </Link>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root to physio dashboard for now */}
        <Route path="/" element={<Navigate to="/physio/dashboard" replace />} />

        {/* Physio Routes */}
        <Route path="/physio" element={<PhysioLayout />}>
          <Route path="dashboard" element={<PhysioDashboard />} />
          <Route path="patients" element={<PatientList />} />
          <Route path="library" element={<Library />} />
          <Route path="prescriptions" element={<Prescription />} />
        </Route>

        {/* Patient Routes */}
        <Route path="/patient" element={<PatientLayout />}>
          <Route index element={<PatientDashboard />} />
          <Route path="diary" element={<WellnessDiary />} />
          <Route path="exercise" element={<ExercisePlayerPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
