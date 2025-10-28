
import React from 'react';
import type { SupportTicket } from '../types';

interface SupportTicketItemProps {
  ticket: SupportTicket;
}

const statusColorMap = {
  Open: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  Answered: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  Closed: 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300',
};

export const SupportTicketItem: React.FC<SupportTicketItemProps> = ({ ticket }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex items-center justify-between gap-4">
      <div>
        <h4 className="font-semibold text-slate-800 dark:text-white">{ticket.subject}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          #{ticket.id} in {ticket.department} &bull; Last updated: {ticket.lastUpdated}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColorMap[ticket.status]}`}>
          {ticket.status}
        </span>
        <button className="px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none">
          View
        </button>
      </div>
    </div>
  );
};
