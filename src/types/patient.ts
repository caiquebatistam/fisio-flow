export interface PatientProfile {
  id: string;
  name: string;
  greetingMessage: string;
  avatarUrl?: string;
  weekProgress: number; // 0 a 100 representing completion
  condition?: string; // Patologia (ex: Cervicalgia)
  status?: 'active' | 'alert' | 'ready'; // Critério clínico
  lastCheckIn?: string; // Data do último reporte
}

export interface ExerciseSession {
  id: string;
  title: string;
  durationMinutes: number;
  videoUrl: string;
  thumbnailUrl: string;
  physioGuideline: string;
  completed: boolean;
}

export interface DailyLog {
  id?: string;
  date: string; // ISO date string
  painLevel: number; // 0 to 10
  observations: string;
}

export interface PatientDashboardData {
  profile: PatientProfile;
  exerciseOfTheDay: ExerciseSession;
  weeklyLogs: DailyLog[]; // To check if they logged today
}

export interface KPIStats {
  clinicalAdherence: number; // Porcentagem
  newPrescriptions: number;
  readyForDischarge: number;
}

export interface PatientListItem {
  id: string;
  name: string;
  avatarUrl?: string;
  condition: string;
  adherencePercentage: number;
  status: 'active' | 'alert' | 'ready';
  lastActive: string;
}

export interface PhysioDashboardData {
  physioName: string;
  kpis: KPIStats;
  patients: PatientListItem[];
}
