// src/data/techStack.tsx
import React from 'react';

export interface TechIcon {
  id: string;
  name: string;
  color: string;
  glowColor: string;
  ring: 'inner' | 'outer';
  angleOffset: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

// Inline SVG components for tech logos
export const FlutterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.314 0L2.3 12L6 15.7L21.684.012h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468l6.46-6.46h-7.373z" />
  </svg>
);

export const ClaudeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M15.485 10.457l3.208-3.208a1.18 1.18 0 10-1.669-1.669l-3.208 3.208-3.208-3.208a1.18 1.18 0 10-1.669 1.669l3.208 3.208-3.208 3.208a1.18 1.18 0 101.669 1.669l3.208-3.208 3.208 3.208a1.18 1.18 0 101.669-1.669l-3.208-3.208z" />
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const GeminiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L14.5 9.5 22 12 14.5 14.5 12 22 9.5 14.5 2 12 9.5 9.5 12 2z" />
  </svg>
);

export const DeepSeekIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1 3v6h4v-2h-2V7h-2z" />
  </svg>
);

export const PyTorchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 1.34c-.16 0-.32.06-.44.18L3.25 9.83c-.24.24-.24.63 0 .87l.44.44c.24.24.63.24.87 0l7.88-7.88c.24-.24.63-.24.87 0l7.88 7.88c.24.24.63.24.87 0l.44-.44c.24-.24.24-.63 0-.87L12.44 1.52a.623.623 0 00-.44-.18zM12 5.34c-.16 0-.32.06-.44.18L6.25 10.83c-.24.24-.24.63 0 .87l.44.44c.24.24.63.24.87 0l4-4c.24-.24.63-.24.87 0l4 4c.24.24.63.24.87 0l.44-.44c.24-.24.24-.63 0-.87l-5.31-5.31a.623.623 0 00-.44-.18zM2.38 12.66c-.19 0-.37.11-.46.29-.09.18-.08.39.04.56l8.83 12.33c.27.38.8.46 1.18.18s.46-.8.18-1.18L3.33 12.5c-.24-.24-.61-.31-.95-.17-.11.04-.22.1-.33.16.1-.06.21-.12.33-.16zm19.24 0c.19 0 .37.11.46.29.09.18.08.39-.04.56l-8.83 12.33c-.27.38-.8.46-1.18.18s-.46-.8-.18-1.18l8.83-12.33c.24-.24.61-.31.95-.17.11.04.22.1.33.16-.1-.06-.21-.12-.33-.16z" />
  </svg>
);

export const TensorFlowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.23.0L.0 6.64v10.72L11.23 24 22.46 17.36V6.64L11.23.0zm0 5.48l7.52 4.4v8.83l-7.52 4.4-7.52-4.4V9.88l7.52-4.4zM4.1 8.5v7l7.13 4.18 7.14-4.18V8.5L11.23 4.3 4.1 8.5z" />
  </svg>
);

export const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.97 0C9.13 0 7.21.31 5.92 1.34 4.54 2.45 4.38 3.86 4.38 5.61v2.16H12V9.03H1.47c-1.42 0-2.32 1.15-2.73 2.5C-1.83 13.25-1.94 15.63-1.47 17.18c.41 1.36 1.31 2.37 2.73 2.37h2.33v-3.23c0-2.27 1.83-4.13 4.09-4.13h7.22c2.26 0 4.1 1.86 4.1 4.13V20.1H23.05c1.42 0 2.31-1.02 2.72-2.37.47-1.55.59-3.93.12-5.48-.41-1.35-1.3-2.5-2.72-2.5H21.6V7.47c0-1.75-.16-3.16-1.54-4.21C18.77.31 16.85 0 14.01 0h-2.04zM8.44 2.1c.54 0 .98.44.98.98s-.44.98-.98.98-.98-.44-.98-.98.44-.98.98-.98zM9.06 14.97c-2.26 0-4.09 1.86-4.09 4.13V24h2.04c2.84 0 4.76-.31 6.05-1.34 1.38-1.11 1.54-2.52 1.54-4.27v-2.16H8.02V14.97h1.04zm4.5 6.94c-.54 0-.98-.44-.98-.98s.44-.98.98-.98.98.44.98.98-.44.98-.98.98z" />
  </svg>
);

export const FirebaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3.89 15.67L5.7 4.57c.05-.28.31-.41.52-.25l2.43 1.83 5.4-5a.36.36 0 0 1 .42-.04l6.16 3.56c.19.11.2.37.03.5L5.17 21.36a.37.37 0 0 1-.55-.17l-1.39-3.8c-.06-.17.14-.3.26-.18z" />
  </svg>
);

export const techStack: TechIcon[] = [
  // Inner Ring (radius: 120px)
  { id: 'flutter', name: 'Flutter', color: '#54C5F8', glowColor: '#54C5F880', ring: 'inner', angleOffset: 0, icon: FlutterIcon },
  { id: 'claude', name: 'Claude AI', color: '#D97706', glowColor: '#D9770640', ring: 'inner', angleOffset: 120, icon: ClaudeIcon },
  { id: 'gemini', name: 'Gemini', color: '#4285F4', glowColor: '#4285F440', ring: 'inner', angleOffset: 240, icon: GeminiIcon },
  
  // Outer Ring (radius: 210px)
  { id: 'deepseek', name: 'DeepSeek', color: '#7C3AED', glowColor: '#7C3AED40', ring: 'outer', angleOffset: 0, icon: DeepSeekIcon },
  { id: 'pytorch', name: 'PyTorch', color: '#EE4C2C', glowColor: '#EE4C2C40', ring: 'outer', angleOffset: 72, icon: PyTorchIcon },
  { id: 'tensorflow', name: 'TensorFlow', color: '#FF6F00', glowColor: '#FF6F0040', ring: 'outer', angleOffset: 144, icon: TensorFlowIcon },
  { id: 'python', name: 'Python', color: '#3776AB', glowColor: '#3776AB40', ring: 'outer', angleOffset: 216, icon: PythonIcon },
  { id: 'firebase', name: 'Firebase', color: '#FFCA28', glowColor: '#FFCA2840', ring: 'outer', angleOffset: 288, icon: FirebaseIcon },
];
