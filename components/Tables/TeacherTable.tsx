import React from 'react';
import { TeacherPerformance } from '../../types';
import { MoreHorizontal, AlertCircle, CheckCircle } from 'lucide-react';

interface Props {
  teachers: TeacherPerformance[];
}

const TeacherTable: React.FC<Props> = ({ teachers }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-3 font-semibold">Teacher</th>
            <th className="px-6 py-3 font-semibold text-center">Groups</th>
            <th className="px-6 py-3 font-semibold text-center">Students</th>
            <th className="px-6 py-3 font-semibold text-right">Expected</th>
            <th className="px-6 py-3 font-semibold text-right">Collected</th>
            <th className="px-6 py-3 font-semibold text-right">Debt</th>
            <th className="px-6 py-3 font-semibold text-center">Score</th>
            <th className="px-6 py-3 font-semibold text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id} className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 font-medium text-slate-900">{teacher.name}</td>
              <td className="px-6 py-4 text-center text-slate-600">{teacher.groups}</td>
              <td className="px-6 py-4 text-center text-slate-600">{teacher.students}</td>
              <td className="px-6 py-4 text-right text-slate-600">${teacher.expectedRevenue.toLocaleString()}</td>
              <td className="px-6 py-4 text-right text-slate-600">${teacher.collectedRevenue.toLocaleString()}</td>
              <td className="px-6 py-4 text-right text-red-600 font-medium">
                {teacher.outstandingDebt > 0 ? `$${teacher.outstandingDebt.toLocaleString()}` : '-'}
              </td>
              <td className="px-6 py-4 text-center">
                 <span className={`px-2 py-1 rounded text-xs font-bold ${
                   teacher.disciplineScore >= 90 ? 'bg-emerald-100 text-emerald-800' :
                   teacher.disciplineScore >= 75 ? 'bg-amber-100 text-amber-800' :
                   'bg-red-100 text-red-800'
                 }`}>
                   {teacher.disciplineScore}/100
                 </span>
              </td>
              <td className="px-6 py-4 text-center">
                {teacher.disciplineScore < 75 ? (
                  <div className="flex items-center justify-center text-red-500 gap-1 text-xs">
                    <AlertCircle size={14} /> Risky
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-emerald-500 gap-1 text-xs">
                    <CheckCircle size={14} /> Good
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;