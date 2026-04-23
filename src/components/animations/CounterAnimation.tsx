// src/components/animations/CounterAnimation.tsx
import React from 'react';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';
import { cn } from '../../lib/utils';

interface CounterAnimationProps {
  end: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  end, 
  suffix = '', 
  prefix = '', 
  className 
}) => {
  const { ref, count } = useCounterAnimation(end);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}{count}{suffix}
    </span>
  );
};
