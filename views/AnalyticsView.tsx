import React from 'react';
import { MOCK_MONTHLY_FINANCIALS, MOCK_DEBT_DISTRIBUTION } from '../constants';
import { RevenueVsExpectedChart, DebtTrendChart, PaymentDistributionChart } from '../components/charts/FinancialCharts';

const AnalyticsView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Financial Analytics</h2>
        <p className="text-sm text-slate-500">Deep dive into revenue, expenses, and collection efficiency.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Revenue vs Expected (6 Months)</h3>
          <RevenueVsExpectedChart data={MOCK_MONTHLY_FINANCIALS} />
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Expense vs Net Income Analysis</h3>
          {/* Reusing DebtTrendChart logic but conceptually for Expense/Income in this demo */}
          <DebtTrendChart data={MOCK_MONTHLY_FINANCIALS} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Collection Efficiency</h3>
          <PaymentDistributionChart data={MOCK_DEBT_DISTRIBUTION} />
        </div>
        
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
           <h3 className="text-lg font-bold text-slate-800 mb-4">Debt Aging Report</h3>
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
               <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                 <tr>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3 text-right">Amount</th>
                    <th className="px-4 py-3 text-right">% of Total Debt</th>
                    <th className="px-4 py-3">Top Contributor</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-slate-700">0 - 30 Days</td>
                    <td className="px-4 py-3 text-right font-bold text-slate-900">$5,200</td>
                    <td className="px-4 py-3 text-right text-slate-500">61%</td>
                    <td className="px-4 py-3 text-slate-600">Advanced Math A</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-amber-600">31 - 60 Days</td>
                    <td className="px-4 py-3 text-right font-bold text-amber-600">$2,100</td>
                    <td className="px-4 py-3 text-right text-slate-500">25%</td>
                    <td className="px-4 py-3 text-slate-600">English Lit B</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-red-600">60+ Days (Critical)</td>
                    <td className="px-4 py-3 text-right font-bold text-red-600">$1,150</td>
                    <td className="px-4 py-3 text-right text-slate-500">14%</td>
                    <td className="px-4 py-3 text-slate-600">Chemistry Lab</td>
                  </tr>
               </tbody>
             </table>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;