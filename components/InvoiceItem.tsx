
import React from 'react';
import type { Invoice } from '../types';

interface InvoiceItemProps {
  invoice: Invoice;
}

const statusInfo = {
  Paid: {
    classes: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    buttonText: 'View Invoice',
    buttonClasses: 'text-primary-600 dark:text-primary-400 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'
  },
  Unpaid: {
    classes: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    buttonText: 'Pay Now',
    buttonClasses: 'text-white bg-green-600 hover:bg-green-700'
  },
  Overdue: {
    classes: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    buttonText: 'Pay Now',
    buttonClasses: 'text-white bg-red-600 hover:bg-red-700'
  }
};

export const InvoiceItem: React.FC<InvoiceItemProps> = ({ invoice }) => {
  const currentStatus = statusInfo[invoice.status];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h4 className="font-semibold text-slate-800 dark:text-white">Invoice #{invoice.id}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Issued: {invoice.issueDate} &bull; Due: {invoice.dueDate}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
        <div className="text-left sm:text-right">
            <p className="text-lg font-semibold text-slate-800 dark:text-white">${invoice.total.toFixed(2)}</p>
             <span className={`mt-1 px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${currentStatus.classes}`}>
              {invoice.status}
            </span>
        </div>
        <button className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 w-full sm:w-auto ${currentStatus.buttonClasses}`}>
          {currentStatus.buttonText}
        </button>
      </div>
    </div>
  );
};
