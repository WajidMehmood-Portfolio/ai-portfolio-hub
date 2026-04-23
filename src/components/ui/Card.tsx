// src/components/ui/Card.tsx
import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';
import { hoverGlow } from '../../lib/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? hoverGlow.card : {}}
      className={cn(
        'bg-[#13131A] border border-[#1E1E2E] rounded-2xl overflow-hidden transition-colors duration-200 hover:border-[#2A2A3E]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
