import React from 'react';
import { MOCK_KPIS, MOCK_MONTHLY_FINANCIALS, MOCK_DEBT_DISTRIBUTION } from '../constants';
import KpiCard from '../components/KpiCard';
import { RevenueVsExpectedChart, PaymentDistributionChart } from '../components/charts/FinancialCharts';
import { Download, Calendar, AlertTriangle, ArrowRight } from 'lucide-react';

const DashboardView: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Owner Control Summary</h2>
          <p className="text-sm text-slate-500">10-second understanding of center health.</p>
        </div>
        <div className="flex space-x-2">
            <button className="flex items-center space-x-2 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>This Month</span>
            </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {MOCK_KPIS.map((kpi, idx) => (
          <KpiCard key={idx} kpi={kpi} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Charts */}
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Revenue vs Expected</h3>
                <RevenueVsExpectedChart data={MOCK_MONTHLY_FINANCIALS} />
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Payment Status Distribution</h3>
                <PaymentDistributionChart data={MOCK_DEBT_DISTRIBUTION} />
            </div>
        </div>

        {/* Right Column: Alerts & Quick Stats */}
        <div className="lg:col-span-1 space-y-6">
            {/* Alerts Panel */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 bg-red-50 border-b border-red-100 flex items-center justify-between">
                    <h3 className="font-bold text-red-800 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" /> Critical Alerts
                    </h3>
                    <span className="bg-red-200 text-red-800 text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                </div>
                <div className="divide-y divide-slate-100">
                    <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
                        <p className="text-sm font-semibold text-slate-800">High Risk Group: Advanced Math A</p>
                        <p className="text-xs text-slate-500 mt-1">Debt exceeded $900 limit. 12 students unpaid.</p>
                    </div>
                    <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
                         <p className="text-sm font-semibold text-slate-800">Teacher Performance Drop</p>
                         <p className="text-xs text-slate-500 mt-1">David Kim's collected revenue down 15%.</p>
                    </div>
                     <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
                         <p className="text-sm font-semibold text-slate-800">Late Payments Spikes</p>
                         <p className="text-xs text-slate-500 mt-1">Unusual activity in "Physics 101".</p>
                    </div>
                </div>
                <div className="p-3 bg-slate-50 text-center border-t border-slate-200">
                    <button className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center justify-center gap-1 mx-auto">
                        View All Risks <ArrowRight size={12} />
                    </button>
                </div>
            </div>

            {/* Quick Actions / Tips */}
             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">Financial Health Tip</h3>
                <p className="text-sm text-blue-800 mb-4">
                    Your collection rate is 90%. Increasing this to 95% would add $2,400 to your monthly free cash flow.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;