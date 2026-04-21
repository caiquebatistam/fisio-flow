export interface PatientProfile {
  id: string;
  name: string;
  greetingMessage: string;
  avatarUrl?: string;
  weekProgress: number; // 0 a 100 representing completion
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
