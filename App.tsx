
import React, { useState, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardCard } from './components/DashboardCard';
import { UsageChart } from './components/UsageChart';
import { ServiceItem } from './components/ServiceItem';
import { SupportTicketItem } from './components/SupportTicketItem';
import { InvoiceItem } from './components/InvoiceItem';
import { MOCK_SERVICES, MOCK_TICKETS, MOCK_INVOICES, MOCK_USAGE_DATA } from './constants';
import { Icon } from './components/Icon';
import type { Service, SupportTicket, Invoice } from './types';
import { getPerformanceAnalysis } from './services/geminiService';


const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('Dashboard');

  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisError, setAnalysisError] = useState<string>('');

  const handleGetAnalysis = useCallback(async () => {
    setIsAnalyzing(true);
    setAiAnalysis('');
    setAnalysisError('');
    try {
      const analysis = await getPerformanceAnalysis(MOCK_USAGE_DATA);
      setAiAnalysis(analysis);
    } catch (error) {
      console.error('Error getting performance analysis:', error);
      setAnalysisError('Failed to get performance analysis. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  const renderContent = () => {
    switch (activeView) {
      case 'Services':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">My Services</h2>
            {MOCK_SERVICES.map((service: Service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </div>
        );
      case 'Billing':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Billing & Invoices</h2>
            {MOCK_INVOICES.map((invoice: Invoice) => (
              <InvoiceItem key={invoice.id} invoice={invoice} />
            ))}
          </div>
        );
      case 'Support':
        return (
          <div className="space-y-4">
             <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Support Tickets</h2>
            {MOCK_TICKETS.map((ticket: SupportTicket) => (
              <SupportTicketItem key={ticket.id} ticket={ticket} />
            ))}
          </div>
        );
      case 'Dashboard':
      default:
        return (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <DashboardCard title="Active Services" value="3" icon="server" change="+1 this month" />
              <DashboardCard title="Domains" value="5" icon="globe" />
              <DashboardCard title="Open Tickets" value="1" icon="ticket" status="warning" />
              <DashboardCard title="Unpaid Invoices" value="2" icon="invoice" status="danger" />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Resource Usage (Primary Server)</h3>
                <div className="h-80">
                  <UsageChart data={MOCK_USAGE_DATA} />
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">AI Performance Analyst</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Get an AI-powered analysis of your server's resource usage and receive optimization recommendations.
                </p>
                <button
                  onClick={handleGetAnalysis}
                  disabled={isAnalyzing}
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <>
                      <Icon name="loading" className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Icon name="sparkles" className="-ml-1 mr-2 h-5 w-5" />
                      Analyze Performance
                    </>
                  )}
                </button>
                {aiAnalysis && (
                  <div className="mt-4 p-4 bg-primary-50 dark:bg-slate-700 rounded-lg">
                    <h4 className="font-semibold text-primary-800 dark:text-primary-300 mb-2">Analysis Result:</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-wrap">{aiAnalysis}</p>
                  </div>
                )}
                {analysisError && (
                    <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/50 rounded-lg">
                        <p className="text-sm text-red-600 dark:text-red-300">{analysisError}</p>
                    </div>
                )}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 dark:bg-slate-900">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome Back, Alex!</h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">Here's what's happening with your account today.</p>

            <div className="mt-8">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
