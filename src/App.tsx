import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CustomerViewPage from './pages/CustomerViewPage';
import GenericPage from './pages/GenericPage';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'customer-view':
        return <CustomerViewPage />;
      case 'customer-segments':
        return <GenericPage title="Customer Segments" description="Manage and analyze customer segments" />;
      case 'outbound-calls':
        return <GenericPage title="Outbound Calls" description="Track and manage outbound calls" />;
      case 'outbound-emails':
        return <GenericPage title="Outbound Emails" description="Track and manage outbound emails" />;
      case 'incoming-calls':
        return <GenericPage title="Incoming Calls" description="View and manage incoming calls" />;
      case 'incoming-emails':
        return <GenericPage title="Incoming Emails" description="View and manage incoming emails" />;
      case 'sales-agent':
        return <GenericPage title="Sales Agent Activity" description="Monitor sales agent performance and activities" />;
      case 'intake-agent':
        return <GenericPage title="Intake Agent Activity" description="Monitor intake agent performance and activities" />;
      case 'marketing-agent':
        return <GenericPage title="Marketing Agent Activity" description="Monitor marketing agent performance and activities" />;
      case 'my-profile':
        return <GenericPage title="My Profile" description="View and edit your profile information" />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-8">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
