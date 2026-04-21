import { mockPhysioDashboardData } from '../mocks/patientMocks';
import type { PhysioDashboardData } from '../types/patient';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const physioService = {
  /**
   * Fetches the dashboard data for the physiotherapist
   */
  async getDashboardData(): Promise<PhysioDashboardData> {
    await delay(600); // Simulate network delay
    // Note: In reality, you'd make an API request like:
    // const response = await fetch('/api/physio/dashboard');
    // return response.json();
    return mockPhysioDashboardData;
  }
};
