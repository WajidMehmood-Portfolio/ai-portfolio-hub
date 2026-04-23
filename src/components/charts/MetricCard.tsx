// src/components/charts/MetricCard.tsx
import React from 'react';
import { Card } from '../ui/Card';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface MetricCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'violet' | 'cyan' | 'green' | 'amber';
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  label, 
  value, 
  icon: Icon, 
  trend,
  color = 'violet' 
}) => {
  const colorMap = {
    violet: 'text-[#A78BFA] bg-[#7C3AED]/10',
    cyan: 'text-[#67E8F9] bg-[#06B6D4]/10',
    green: 'text-[#6EE7B7] bg-[#10B981]/10',
    amber: 'text-[#FCD34D] bg-[#F59E0B]/10',
  };

  return (
    <Card className="p-6 bg-[#111118] border-[#1E1E2E]">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-2 rounded-lg", colorMap[color])}>
          <Icon size={20} />
        </div>
        {trend && (
          <div className={cn(
            "text-xs font-bold px-2 py-0.5 rounded-full",
            trend.isPositive ? "bg-[#10B981]/10 text-[#6EE7B7]" : "bg-[#EF4444]/10 text-[#EF4444]"
          )}>
            {trend.isPositive ? '+' : '-'}{trend.value}%
          </div>
        )}
      </div>
      <div>
        <div className="text-2xl font-bold text-[#F1F0FF] mb-1">{value}</div>
        <div className="text-xs font-bold text-[#6B6880] uppercase tracking-widest">{label}</div>
      </div>
    </Card>
  );
};

export default MetricCard;
