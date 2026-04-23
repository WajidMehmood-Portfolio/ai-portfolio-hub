// src/components/ui/SectionWrapper.tsx
import React from 'react';
import { cn } from '../../lib/utils';
import { FadeIn } from '../animations/FadeIn';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  containerClassName?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id, 
  className,
  containerClassName 
}) => {
  return (
    <section id={id} className={cn('py-24 px-6 md:px-12 bg-transparent relative z-10', className)}>
      <div className={cn('max-w-7xl mx-auto', containerClassName)}>
        <FadeIn>
          {children}
        </FadeIn>
      </div>
    </section>
  );
};

export default SectionWrapper;
