import React from 'react';
import { MOCK_TEACHERS } from '../constants';
import TeacherTable from '../components/Tables/TeacherTable';
import { TrendingUp, Award, AlertTriangle } from 'lucide-react';

const TeachersView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Teachers Performance</h2>
        <p className="text-sm text-slate-500">Evaluation of financial contribution and operational discipline.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <TrendingUp size={24} />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Top Revenue Generator</p>
                <h4 className="text-lg font-bold text-slate-900">Michael Ross</h4>
                <p className="text-xs text-emerald-600 font-medium">+15% vs last month</p>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                <Award size={24} />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">Best Payment Discipline</p>
                <h4 className="text-lg font-bold text-slate-900">Sarah Jenkins</h4>
                <p className="text-xs text-emerald-600 font-medium">98/100 Score</p>
            </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-lg text-red-600">
                <AlertTriangle size={24} />
            </div>
            <div>
                <p className="text-sm text-slate-500 font-medium">High Debt Risk</p>
                <h4 className="text-lg font-bold text-slate-900">David Kim</h4>
                <p className="text-xs text-red-600 font-medium">$2,750 Outstanding</p>
            </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-bold text-slate-800">Teacher Performance Matrix</h3>
        </div>
        <TeacherTable teachers={MOCK_TEACHERS} />
      </div>
    </div>
  );
};

export default TeachersView;