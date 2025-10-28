
import React from 'react';
import type { Service } from '../types';

interface ServiceItemProps {
  service: Service;
}

const statusColorMap = {
  Active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  Suspended: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
};

export const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex-grow">
        <h4 className="font-bold text-lg text-slate-800 dark:text-white">{service.name}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400">{service.plan}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Renews on: {service.renewalDate}</p>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
        <div className="text-right flex-shrink-0">
          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColorMap[service.status]}`}>
            {service.status}
          </span>
          <p className="text-lg font-semibold text-slate-800 dark:text-white mt-1">${service.price.toFixed(2)}</p>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 w-full sm:w-auto">
          Manage
        </button>
      </div>
    </div>
  );
};
