import { cn } from '@/lib/utils';
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: LucideIcon;
  iconColor?: string;
  className?: string;
}

export function StatsCard({ title, value, change, changeLabel, icon: Icon, iconColor = 'text-brand-gold', className }: StatsCardProps) {
  const isPositive = (change ?? 0) > 0;
  const isNeutral = change === 0 || change === undefined;

  return (
    <div className={cn('bg-brand-darkgray border border-brand-gray/50 rounded-xl p-5', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-400 font-medium">{title}</p>
          <p className="text-2xl font-heading font-bold text-brand-white mt-1 truncate">{value}</p>
        </div>
        <div className={cn('p-2.5 rounded-lg bg-brand-gray/40 shrink-0 ml-3', iconColor)}>
          <Icon className="h-5 w-5" />
        </div>
      </div>

      {change !== undefined && (
        <div className="flex items-center gap-1.5 mt-3">
          {isNeutral ? (
            <Minus className="h-3.5 w-3.5 text-gray-500" />
          ) : isPositive ? (
            <TrendingUp className="h-3.5 w-3.5 text-green-400" />
          ) : (
            <TrendingDown className="h-3.5 w-3.5 text-red-400" />
          )}
          <span className={cn('text-xs font-medium', isNeutral ? 'text-gray-500' : isPositive ? 'text-green-400' : 'text-red-400')}>
            {isNeutral ? 'No change' : `${isPositive ? '+' : ''}${change}%`}
          </span>
          {changeLabel && <span className="text-xs text-gray-500">{changeLabel}</span>}
        </div>
      )}
    </div>
  );
}
