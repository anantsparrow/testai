
import React from 'react';
import { Icon } from './Icon';
import type { IconName } from './Icon';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: IconName;
  change?: string;
  status?: 'success' | 'warning' | 'danger';
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, change, status }) => {
  const statusClasses = {
    success: 'text-green-500',
    warning: 'text-yellow-500',
    danger: 'text-red-500',
    default: 'text-green-500',
  };

  const iconBgClasses = {
    success: 'bg-green-100 dark:bg-green-900/50',
    warning: 'bg-yellow-100 dark:bg-yellow-900/50',
    danger: 'bg-red-100 dark:bg-red-900/50',
    default: 'bg-primary-100 dark:bg-primary-900/50',
  }
  
  const iconColorClasses = {
    success: 'text-green-600 dark:text-green-300',
    warning: 'text-yellow-600 dark:text-yellow-300',
    danger: 'text-red-600 dark:text-red-300',
    default: 'text-primary-600 dark:text-primary-300',
  }

  const currentStatus = status || 'default';

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
        <p className="text-3xl font-bold text-slate-800 dark:text-white mt-1">{value}</p>
        {change && (
          <p className={`text-xs mt-2 ${status ? statusClasses[status] : statusClasses.default}`}>
            {change}
          </p>
        )}
      </div>
      <div className={`p-3 rounded-full ${iconBgClasses[currentStatus]}`}>
        <Icon name={icon} className={`h-6 w-6 ${iconColorClasses[currentStatus]}`} />
      </div>
    </div>
  );
};
