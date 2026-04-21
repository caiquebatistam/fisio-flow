import { useState, useCallback } from 'react';
import { physioService } from '../services/physioService';
import type { PhysioDashboardData } from '../types/patient';

export const usePhysioDashboard = () => {
  const [data, setData] = useState<PhysioDashboardData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboard = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const dashboardData = await physioService.getDashboardData();
      setData(dashboardData);
    } catch (err) {
      setError('Erro ao carregar dados do painel.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, fetchDashboard };
};
