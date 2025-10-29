import { Bell, User } from 'lucide-react';
import GlobalSearch from './GlobalSearch';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center gap-6">
        <GlobalSearch />

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative">
            <Bell size={22} className="text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-slate-900">Admin User</div>
              <div className="text-xs text-slate-500">Administrator</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
