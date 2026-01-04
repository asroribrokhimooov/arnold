import React from 'react';
import { GroupSummary } from '../../types';

interface Props {
  groups: GroupSummary[];
}

const GroupTable: React.FC<Props> = ({ groups }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-3 font-semibold">Group Name</th>
            <th className="px-6 py-3 font-semibold">Teacher</th>
            <th className="px-6 py-3 font-semibold text-center">Students</th>
            <th className="px-6 py-3 font-semibold text-right">Expected</th>
            <th className="px-6 py-3 font-semibold text-right">Collected</th>
            <th className="px-6 py-3 font-semibold text-right">Gap</th>
            <th className="px-6 py-3 font-semibold text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.id} className="bg-white border-b border-slate-100 hover:bg-slate-50">
              <td className="px-6 py-4 font-medium text-slate-900">{group.name}</td>
              <td className="px-6 py-4 text-slate-600">{group.teacherName}</td>
              <td className="px-6 py-4 text-center text-slate-600">{group.studentsCount}</td>
              <td className="px-6 py-4 text-right text-slate-600">${group.expectedIncome.toLocaleString()}</td>
              <td className="px-6 py-4 text-right text-slate-600">${group.collectedIncome.toLocaleString()}</td>
              <td className="px-6 py-4 text-right font-medium text-red-600">
                {group.outstandingDebt > 0 ? `$${group.outstandingDebt.toLocaleString()}` : '-'}
              </td>
              <td className="px-6 py-4 text-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  group.status === 'Good' ? 'bg-emerald-100 text-emerald-800' :
                  group.status === 'Warning' ? 'bg-amber-100 text-amber-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {group.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupTable;