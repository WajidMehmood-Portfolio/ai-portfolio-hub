// src/data/skills.ts
import { Skill } from '../types';

export const SKILLS_DATA: Record<string, { name: string; level: number }[]> = {
  Frontend: [
    { name: 'Flutter', level: 95 },
    { name: 'Dart', level: 92 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 82 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  'ML/AI': [
    { name: 'PyTorch', level: 88 },
    { name: 'TensorFlow', level: 84 },
    { name: 'Scikit-Learn', level: 80 },
    { name: 'Computer Vision', level: 85 },
    { name: 'NLP', level: 78 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'Express', level: 82 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'Firebase', level: 88 },
  ],
};
