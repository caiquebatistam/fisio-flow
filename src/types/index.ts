export interface Exercise {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  duration: string;
}

export type Condition = 'Dor Lombar' | 'Pós-operatório' | 'Geral' | 'Desporto';

export interface Patient {
  id: string;
  name: string;
  age: number;
  condition: Condition;
  avatar?: string;
}

export interface Prescription {
  patientId: string;
  exercises: Exercise[];
  notes: string;
}
