// src/data/projects.ts
import { Project } from '../types';

export const PROJECTS_DATA = [
  {
    id: '1',
    title: 'EcoTracker Mobile',
    description: 'AI-powered sustainability tracking app built with Flutter and Firebase. Uses on-device ML to categorize user behavior impact.',
    category: 'Flutter',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    tags: ['Flutter', 'TensorFlow Lite', 'Firebase'],
    metrics: '10K+ Carbon Tons Tracked'
  },
  {
    id: '2',
    title: 'ChestAI Diagnostics',
    description: 'Deep learning for chest X-ray classification integrated into a mobile dashboard for immediate screening.',
    category: 'ML/AI',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    tags: ['PyTorch', 'FastAPI', 'Flutter'],
    metrics: '94.2% Validation Accuracy'
  },
  {
    id: '3',
    title: 'Nexus CRM Mobile',
    description: 'Full-stack CRM with integrated lead scoring ML models and real-time dashboard.',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'PostgreSQL', 'Node.js'],
    metrics: '22% Conversion Lift'
  }
];
