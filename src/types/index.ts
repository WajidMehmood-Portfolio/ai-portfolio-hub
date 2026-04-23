// src/types/index.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  problem: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'flutter' | 'ml-powered' | 'full-stack';
  featured: boolean;
}

export interface CaseStudy {
  id: string;
  slug: string;
  modelName: string;
  problem: string;
  architecture: string;
  dataset: string;
  datasetSize: number;
  pipeline: PipelineStep[];
  accuracyData: {
    labels: string[];
    training: number[];
    validation: number[];
  };
  lossData: {
    labels: string[];
    training: number[];
    validation: number[];
  };
  metrics: ModelMetric[];
  techStack: string[];
  githubUrl?: string;
  paperUrl?: string;
}

export interface Skill {
  category: 'mobile' | 'ml' | 'backend' | 'devops' | 'data' | 'ui';
  name: string;
  icon: string;
  proficiency: number;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  type: 'work' | 'education';
}

export interface ModelMetric {
  label: string;
  value: string | number;
  unit?: string;
}

export interface PipelineStep {
  id: string;
  label: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
