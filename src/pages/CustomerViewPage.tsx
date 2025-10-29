import { Search, Filter } from 'lucide-react';

export default function CustomerViewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Customer Profile</h1>
        <p className="text-slate-600 mt-1">Search and view customer information</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
            <Filter size={20} />
            <span>Filters</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Customer Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Mobile</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Email</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Policy Number</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-slate-900">Customer {item}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">+1 234-567-890{item}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">customer{item}@example.com</td>
                  <td className="py-3 px-4 text-sm text-slate-600">POL-2024-{item}000</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
