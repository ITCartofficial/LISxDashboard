import { Home, Users, Phone, Mail, Activity, User, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { PageType } from '../types';

interface SidebarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['customer', 'communication', 'activity']);

  const toggleMenu = (menu: string) => {
    setExpandedMenus(prev =>
      prev.includes(menu) ? prev.filter(m => m !== menu) : [...prev, menu]
    );
  };

  const isExpanded = (menu: string) => expandedMenus.includes(menu);

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold">CRM Portal</h1>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <button
          onClick={() => onNavigate('home')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            currentPage === 'home'
              ? 'bg-blue-600 text-white'
              : 'text-slate-300 hover:bg-slate-800'
          }`}
        >
          <Home size={20} />
          <span className="font-medium">HOME</span>
        </button>

        <div className="space-y-1">
          <button
            onClick={() => toggleMenu('customer')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Users size={20} />
              <span className="font-medium">Customer</span>
            </div>
            {isExpanded('customer') ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {isExpanded('customer') && (
            <div className="ml-4 space-y-1">
              <button
                onClick={() => onNavigate('customer-view')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'customer-view'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                View / Search Customer Profile
              </button>
              <button
                onClick={() => onNavigate('customer-segments')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'customer-segments'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                Customer Segments
              </button>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <button
            onClick={() => toggleMenu('communication')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Mail size={20} />
              <span className="font-medium">Communication</span>
            </div>
            {isExpanded('communication') ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {isExpanded('communication') && (
            <div className="ml-4 space-y-1">
              <button
                onClick={() => onNavigate('outbound-calls')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'outbound-calls'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                Outbound Calls
              </button>
              <button
                onClick={() => onNavigate('outbound-emails')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'outbound-emails'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                Outbound Emails
              </button>
              <button
                onClick={() => onNavigate('incoming-calls')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'incoming-calls'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                Incoming Calls
              </button>
              <button
                onClick={() => onNavigate('incoming-emails')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'incoming-emails'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                Incoming Emails
              </button>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <button
            onClick={() => toggleMenu('activity')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Activity size={20} />
              <span className="font-medium">Activity</span>
            </div>
            {isExpanded('activity') ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {isExpanded('activity') && (
            <div className="ml-4 space-y-1">
              <button
                onClick={() => onNavigate('sales-agent')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'sales-agent'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                Sales Agent
              </button>
              <button
                onClick={() => onNavigate('intake-agent')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'intake-agent'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                Intake Agent
              </button>
              <button
                onClick={() => onNavigate('marketing-agent')}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'marketing-agent'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                Marketing Agent
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => onNavigate('my-profile')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            currentPage === 'my-profile'
              ? 'bg-blue-600 text-white'
              : 'text-slate-300 hover:bg-slate-800'
          }`}
        >
          <User size={20} />
          <span className="font-medium">My Profile</span>
        </button>
      </nav>
    </aside>
  );
}
