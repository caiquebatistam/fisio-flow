import type { PatientDashboardData, DailyLog, PhysioDashboardData } from '../types/patient';

export const mockDashboardData: PatientDashboardData = {
  profile: {
    id: 'pat_123',
    name: 'Dona Carmem',
    greetingMessage: 'Bom dia',
    weekProgress: 75,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150'
  },
  exerciseOfTheDay: {
    id: 'ex_890',
    title: 'Alongamento Cervical Suave',
    durationMinutes: 12,
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4', // Example public video
    thumbnailUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    physioGuideline: 'Faça os movimentos devagar. Respire profundamente a cada rotação e pare imediatamente se sentir dor aguda.',
    completed: false
  },
  weeklyLogs: [
    {
      id: 'log_01',
      date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
      painLevel: 4,
      observations: 'Senti uma leve melhora no pescoço.'
    }
  ]
};

// Simulated mock database for logs
export let mockLogsDB: DailyLog[] = [...mockDashboardData.weeklyLogs];

export const mockPhysioDashboardData: PhysioDashboardData = {
  physioName: 'Dr. Roberto',
  kpis: {
    clinicalAdherence: 84,
    newPrescriptions: 6,
    readyForDischarge: 2,
  },
  patients: [
    {
      id: 'pat_123',
      name: 'Dona Carmem',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
      condition: 'Cervicalgia Aguda',
      adherencePercentage: 75,
      status: 'active',
      lastActive: 'Hoje',
    },
    {
      id: 'pat_456',
      name: 'Sr. João Batista',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150',
      condition: 'Pós-operatório LCA',
      adherencePercentage: 92,
      status: 'ready',
      lastActive: 'Ontem',
    },
    {
      id: 'pat_789',
      name: 'Mariana Silva',
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
      condition: 'Tendinopatia Patelar',
      adherencePercentage: 40,
      status: 'alert',
      lastActive: 'Há 5 dias',
    }
  ]
};
