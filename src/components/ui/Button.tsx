// src/components/ui/Button.tsx
import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'ghost' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-[#7C3AED] hover:bg-[#8B5CF6] text-white shadow-lg shadow-[#7C3AED]/20',
      ghost: 'bg-transparent text-[#A09DB8] hover:text-[#F1F0FF] border border-[#2A2A3E] hover:border-[#3A3A5C] hover:bg-[#1A1A24]',
      outline: 'bg-transparent border border-[#2A2A3E] hover:border-[#3A3A5C] text-[#F1F0FF] hover:bg-[#111118]',
      destructive: 'bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] hover:bg-[#EF4444]/20',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-8 py-3.5 text-lg font-semibold',
    };

    return (
      <motion.button
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.97 }}
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
