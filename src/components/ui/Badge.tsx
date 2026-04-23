// src/components/ui/Badge.tsx
import React from 'react';
import { cn } from '../../lib/utils';
import * as LucideIcons from 'lucide-react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: string;
  className?: string;
  variant?: 'default' | 'violet' | 'cyan' | 'green' | 'amber' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ children, icon, className, variant = 'default' }) => {
  const IconComponent = icon ? (LucideIcons as any)[icon] : null;

  const variants = {
    default: 'bg-[#1A1A24] border border-[#2A2A3E] text-[#A09DB8]',
    violet: 'bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#A78BFA]',
    cyan: 'bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#67E8F9]',
    green: 'bg-[#10B981]/10 border border-[#10B981]/30 text-[#6EE7B7]',
    amber: 'bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#FCD34D]',
    outline: 'border border-[#1E1E2E] text-[#6B6880]',
  };

  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide',
      variants[variant],
      className
    )}>
      {IconComponent && <IconComponent size={12} />}
      {children}
    </span>
  );
};

export default Badge;
