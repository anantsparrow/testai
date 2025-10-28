
import type { Service, SupportTicket, Invoice, UsageData } from './types';

export const MOCK_SERVICES: Service[] = [
  { id: 'S1', name: 'Alpha Hosting', plan: 'Pro Plan', status: 'Active', renewalDate: '2024-12-01', price: 29.99 },
  { id: 'S2', name: 'Beta VPS', plan: 'VPS Level 2', status: 'Active', renewalDate: '2024-11-15', price: 79.99 },
  { id: 'S3', name: 'Gamma Domain', plan: 'Domain Registration', status: 'Suspended', renewalDate: '2024-10-20', price: 15.00 },
];

export const MOCK_TICKETS: SupportTicket[] = [
  { id: 'T1', subject: 'Issue with email delivery', department: 'Technical Support', status: 'Open', lastUpdated: '2 hours ago' },
  { id: 'T2', subject: 'Billing question', department: 'Billing', status: 'Answered', lastUpdated: '1 day ago' },
  { id: 'T3', subject: 'How to install WordPress?', department: 'Technical Support', status: 'Closed', lastUpdated: '3 days ago' },
];

export const MOCK_INVOICES: Invoice[] = [
  { id: 'I1', issueDate: '2024-10-01', dueDate: '2024-10-15', total: 79.99, status: 'Overdue' },
  { id: 'I2', issueDate: '2024-10-05', dueDate: '2024-10-20', total: 29.99, status: 'Unpaid' },
  { id: 'I3', issueDate: '2024-09-01', dueDate: '2024-09-15', total: 79.99, status: 'Paid' },
];

export const MOCK_USAGE_DATA: UsageData[] = [
    { name: 'CPU', cpu: 75, ram: 0, disk: 0 },
    { name: 'RAM', cpu: 0, ram: 60, disk: 0 },
    { name: 'Disk', cpu: 0, ram: 0, disk: 85 }
];
