import React, { useState } from 'react';
import { MOCK_GROUPS } from '../constants';
import { ChevronDown, ChevronUp, User, DollarSign, Calendar } from 'lucide-react';

const GroupsView: React.FC = () => {
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>(null);

  const toggleGroup = (id: string) => {
    setExpandedGroupId(expandedGroupId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Groups & Students</h2>
        <p className="text-sm text-slate-500">Operational transparency and student payment tracking.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-semibold">Group Name</th>
              <th className="px-6 py-4 font-semibold">Teacher</th>
              <th className="px-6 py-4 font-semibold text-center">Students</th>
              <th className="px-6 py-4 font-semibold text-center">Paid %</th>
              <th className="px-6 py-4 font-semibold text-right">Revenue</th>
              <th className="px-6 py-4 font-semibold text-center">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_GROUPS.map((group) => (
              <React.Fragment key={group.id}>
                <tr 
                  className={`hover:bg-slate-50 cursor-pointer transition-colors ${expandedGroupId === group.id ? 'bg-slate-50' : ''}`}
                  onClick={() => toggleGroup(group.id)}
                >
                  <td className="px-6 py-4 font-medium text-slate-900">{group.name}</td>
                  <td className="px-6 py-4 text-slate-600">{group.teacherName}</td>
                  <td className="px-6 py-4 text-center text-slate-600">{group.studentsCount}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="w-full bg-slate-200 rounded-full h-2 max-w-[100px] mx-auto">
                      <div 
                        className={`h-2 rounded-full ${group.paidPercentage < 80 ? 'bg-red-500' : 'bg-emerald-500'}`} 
                        style={{ width: `${group.paidPercentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block">{group.paidPercentage}%</span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-slate-900">${group.collectedIncome.toLocaleString()}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex px-2 py-1 rounded text-xs font-bold ${
                      group.status === 'Good' ? 'bg-emerald-100 text-emerald-800' :
                      group.status === 'Warning' ? 'bg-amber-100 text-amber-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {group.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {expandedGroupId === group.id ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </td>
                </tr>
                
                {/* Expanded Student List */}
                {expandedGroupId === group.id && group.studentList && (
                  <tr className="bg-slate-50">
                    <td colSpan={7} className="px-6 py-4">
                      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-inner">
                        <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase flex justify-between">
                           <span>Student List</span>
                           <span>Monthly Fee: ${group.fee}</span>
                        </div>
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-slate-100 text-slate-400">
                              <th className="px-4 py-2 text-left">Student Name</th>
                              <th className="px-4 py-2 text-center">Status</th>
                              <th className="px-4 py-2 text-right">Last Payment</th>
                              <th className="px-4 py-2 text-right">Outstanding Debt</th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.studentList.map((student) => (
                              <tr key={student.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50">
                                <td className="px-4 py-2 font-medium text-slate-700 flex items-center gap-2">
                                  <User className="w-3 h-3 text-slate-400" /> {student.name}
                                </td>
                                <td className="px-4 py-2 text-center">
                                  <span className={`px-1.5 py-0.5 rounded ${
                                    student.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                                    student.status === 'Late' ? 'bg-amber-100 text-amber-700' :
                                    'bg-red-100 text-red-700'
                                  }`}>
                                    {student.status}
                                  </span>
                                </td>
                                <td className="px-4 py-2 text-right text-slate-500">{student.lastPaymentDate}</td>
                                <td className="px-4 py-2 text-right font-medium text-red-600">
                                  {student.debtAmount > 0 ? `$${student.debtAmount}` : '-'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupsView;