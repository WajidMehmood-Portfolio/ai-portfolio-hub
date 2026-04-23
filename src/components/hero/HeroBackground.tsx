// src/components/hero/HeroBackground.tsx
import React from 'react';

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Background blobs */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px]" 
        style={{ pointerEvents: 'none' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/8 rounded-full blur-[100px]" 
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-grid pointer-events-none" />
    </div>
  );
};

export default HeroBackground;
