import { mockDashboardData, mockLogsDB } from '../mocks/patientMocks';
import type { PatientDashboardData, DailyLog } from '../types/patient';

// Simulating network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const patientService = {
  /**
   * Fetches the dashboard data for the patient
   */
  async getDashboardData(): Promise<PatientDashboardData> {
    await delay(800); // Simulate network delay
    // Note: In reality, you'd make an API request like:
    // const response = await fetch('/api/patient/dashboard');
    // return response.json();
    return mockDashboardData;
  },

  /**
   * Submits a pain and wellness log for the day
   */
  async submitDailyLog(log: DailyLog): Promise<{ success: boolean; message: string }> {
    await delay(1000); // Simulate network delay
    // Note: Simulated insertion into database
    mockLogsDB.push({ ...log, id: `log_${Date.now()}` });
    return { success: true, message: 'Diário salvo com sucesso!' };
  },

  /**
   * Marks the current exercise session as completed
   */
  async completeExerciseSession(sessionId: string): Promise<{ success: boolean }> {
    await delay(1200); // Simulate processing time and saving
    mockDashboardData.exerciseOfTheDay.completed = true;
    return { success: true };
  }
};
