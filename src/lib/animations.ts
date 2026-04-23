// src/lib/animations.ts
import { Variants } from 'motion/react';

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    backgroundColor: 'transparent' // Prevents white flash
  },
  visible: { 
    opacity: 1, 
    y: 0,
    backgroundColor: 'transparent',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Hover glow effects
export const hoverGlow = {
  card: {
    y: -5,
    boxShadow: '0 0 30px rgba(124, 58, 237, 0.12), 0 0 60px rgba(124, 58, 237, 0.06)',
    transition: { duration: 0.2 }
  },
  button: {
    scale: 1.03,
    boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
    transition: { duration: 0.2 }
  },
  icon: {
    scale: 1.1,
    filter: 'brightness(1.2)',
    transition: { duration: 0.2 }
  }
};
