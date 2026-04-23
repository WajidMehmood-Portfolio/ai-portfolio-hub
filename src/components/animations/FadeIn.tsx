// src/components/animations/FadeIn.tsx
import React from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className 
}) => {
  const { ref, isInView } = useScrollAnimation();

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -30 : 0,
      backgroundColor: 'transparent'
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      backgroundColor: 'transparent',
      transition: { 
        duration: 0.6, 
        delay, 
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
