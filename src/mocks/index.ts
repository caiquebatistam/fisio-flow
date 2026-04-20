import type { Exercise, Patient } from '../types';

export const EXERCISES: Exercise[] = [
  { id: '1', title: 'Wall-Supported Lumbar Extension', category: 'LOMBAR', duration: '3 sets • 12 reps', thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=300&auto=format&fit=crop' },
  { id: '2', title: 'Isometric Scapular Squeeze', category: 'PARTE SUPERIOR DAS COSTAS', duration: 'Hold 30s • 5 reps', thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=300&auto=format&fit=crop' },
  { id: '3', title: 'Eccentric Soleus Load', category: 'TORNOZELO', duration: '12 reps', thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=300&auto=format&fit=crop' },
];

export const CATEGORIES = ['Todos os Exercícios', 'Cervical', 'Torácica', 'Lombar', 'Membros Inferiores', 'Pós-Op'];

export const PATIENTS: Patient[] = [
  { id: 'p1', name: 'João Silva', age: 68, condition: 'Dor Lombar', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
];
