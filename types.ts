
export interface Service {
  id: string;
  name: string;
  plan: string;
  status: 'Active' | 'Suspended' | 'Pending';
  renewalDate: string;
  price: number;
}

export interface SupportTicket {
  id: string;
  subject: string;
  department: string;
  status: 'Open' | 'Answered' | 'Closed';
  lastUpdated: string;
}

export interface Invoice {
  id: string;
  issueDate: string;
  dueDate: string;
  total: number;
  status: 'Paid' | 'Unpaid' | 'Overdue';
}

export interface UsageData {
    name: string;
    cpu: number;
    ram: number;
    disk: number;
}
