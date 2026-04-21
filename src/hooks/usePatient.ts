import { useState, useCallback } from 'react';
import { patientService } from '../services/patientService';
import type { PatientDashboardData, DailyLog } from '../types/patient';

export const usePatientDashboard = () => {
  const [data, setData] = useState<PatientDashboardData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboard = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const dashboardData = await patientService.getDashboardData();
      setData(dashboardData);
    } catch (err) {
      setError('Erro ao carregar dados. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, fetchDashboard };
};

export const useWellnessDiary = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLog = async (log: DailyLog) => {
    try {
      setIsSubmitting(true);
      setError(null);
      setSubmitSuccess(false);
      
      await patientService.submitDailyLog(log);
      
      setSubmitSuccess(true);
      return true;
    } catch (err) {
      setError('Erro ao salvar as informações. Tente novamente.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitLog, isSubmitting, submitSuccess, error };
};

export const useExerciseSession = () => {
  const [isCompleting, setIsCompleting] = useState(false);
  const [completed, setCompleted] = useState(false);

  const completeSession = async (sessionId: string) => {
    try {
      setIsCompleting(true);
      await patientService.completeExerciseSession(sessionId);
      setCompleted(true);
      return true;
    } catch (err) {
      return false;
    } finally {
      setIsCompleting(false);
    }
  };

  return { completeSession, isCompleting, completed };
};
