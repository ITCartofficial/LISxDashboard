import { Search } from 'lucide-react';
import { useState } from 'react';

export default function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="relative flex-1 max-w-2xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by customer name, policy, or mobile number..."
        className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </form>
  );
}
