import React, { useState } from 'react';
import { MOCK_ARCHIVE } from '../constants';
import { Archive, User, Users, DollarSign } from 'lucide-react';

const ArchiveView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Student' | 'Group' | 'Teacher' | 'Financial'>('All');

  const filteredArchive = activeTab === 'All' ? MOCK_ARCHIVE : MOCK_ARCHIVE.filter(item => item.type === activeTab);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Archive</h2>
        <p className="text-sm text-slate-500">Historical records of deleted or inactive entities.</p>
      </div>

      <div className="flex space-x-2 border-b border-slate-200 pb-1">
          {['All', 'Student', 'Group', 'Teacher', 'Financial'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === tab 
                    ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                }`}
              >
                  {tab}s
              </button>
          ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs border-b border-slate-200">
                <tr>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Archived Date</th>
                    <th className="px-6 py-3">By</th>
                    <th className="px-6 py-3">Reason</th>
                    <th className="px-6 py-3 text-center">Action</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {filteredArchive.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                                item.type === 'Financial' ? 'bg-emerald-100 text-emerald-800' :
                                item.type === 'Group' ? 'bg-blue-100 text-blue-800' :
                                'bg-slate-100 text-slate-800'
                            }`}>
                                {item.type === 'Financial' ? <DollarSign size={12}/> : 
                                 item.type === 'Group' ? <Users size={12} /> : <User size={12} />}
                                {item.type}
                            </span>
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                        <td className="px-6 py-4 text-slate-500">{item.date}</td>
                        <td className="px-6 py-4 text-slate-500">{item.archivedBy}</td>
                        <td className="px-6 py-4 text-slate-500 italic">{item.reason}</td>
                        <td className="px-6 py-4 text-center">
                            <button className="text-blue-600 hover:text-blue-800 font-medium text-xs">View Details</button>
                        </td>
                    </tr>
                ))}
                {filteredArchive.length === 0 && (
                    <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-slate-500">No archived items found in this category.</td>
                    </tr>
                )}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArchiveView;