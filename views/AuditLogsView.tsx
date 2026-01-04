import React, { useState } from 'react';
import { MOCK_LOGS } from '../constants';
import { Search, Filter, Download } from 'lucide-react';

const AuditLogsView: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [activeTab, setActiveTab] = useState<'ALL' | 'TEACHER_ACTION' | 'ADMIN_ACTION' | 'FINANCIAL' | 'SYSTEM_EVENT'>('ALL');

  const filteredLogs = MOCK_LOGS.filter(log => {
    const matchesSearch = log.actor.toLowerCase().includes(filter.toLowerCase()) || 
                          log.actionDescription.toLowerCase().includes(filter.toLowerCase()) ||
                          log.object.toLowerCase().includes(filter.toLowerCase());
    const matchesTab = activeTab === 'ALL' || log.category === activeTab;
    return matchesSearch && matchesTab;
  });

  const tabs = [
      { id: 'ALL', label: 'All Logs' },
      { id: 'TEACHER_ACTION', label: 'Teacher Actions' },
      { id: 'ADMIN_ACTION', label: 'Admin Actions' },
      { id: 'FINANCIAL', label: 'Financial' },
      { id: 'SYSTEM_EVENT', label: 'System' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">System Logs & Audit Trail</h2>
          <p className="text-sm text-slate-500">Immutable record of all financial and operational actions.</p>
        </div>
        <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                <Download className="w-4 h-4" /> Export CSV
            </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="border-b border-slate-200">
            <div className="flex overflow-x-auto">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                            activeTab === tab.id 
                            ? 'border-b-2 border-blue-600 text-blue-600 bg-slate-50' 
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>

        <div className="p-4 border-b border-slate-200 flex gap-4">
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input 
                    type="text" 
                    placeholder="Search logs..." 
                    className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <button className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-slate-600">
                <Filter className="w-4 h-4" />
            </button>
        </div>
        
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                    <tr>
                        <th className="px-6 py-3 font-semibold">Timestamp</th>
                        <th className="px-6 py-3 font-semibold">Category</th>
                        <th className="px-6 py-3 font-semibold">Action</th>
                        <th className="px-6 py-3 font-semibold">Actor</th>
                        <th className="px-6 py-3 font-semibold">Object</th>
                        <th className="px-6 py-3 font-semibold text-right">Amount</th>
                        <th className="px-6 py-3 font-semibold text-center">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {filteredLogs.map((log) => (
                        <tr key={log.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 text-slate-500 font-mono text-xs">{log.timestamp}</td>
                            <td className="px-6 py-4 text-slate-500 text-xs">{log.category}</td>
                            <td className="px-6 py-4 font-medium text-slate-900">{log.actionDescription}</td>
                            <td className="px-6 py-4 text-slate-700">
                                {log.actor}
                                <span className="block text-xs text-slate-400">{log.role}</span>
                            </td>
                            <td className="px-6 py-4 text-slate-600 truncate max-w-xs" title={log.object}>
                                {log.object}
                            </td>
                            <td className="px-6 py-4 text-right font-medium text-slate-900">
                                {log.amount ? `$${log.amount.toFixed(2)}` : '-'}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {log.status === 'COMPLETED' ? (
                                    <span className="text-emerald-600 text-xs font-bold">● Completed</span>
                                ) : (
                                    <span className="text-red-500 text-xs font-bold">● Reverted</span>
                                )}
                            </td>
                        </tr>
                    ))}
                    {filteredLogs.length === 0 && (
                        <tr>
                            <td colSpan={7} className="px-6 py-8 text-center text-slate-500">
                                No logs found matching your criteria.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default AuditLogsView;