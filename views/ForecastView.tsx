import React from 'react';
import { MOCK_FORECAST } from '../constants';
import ForecastWidget from '../components/ForecastWidget';
import { ArrowRight, HelpCircle } from 'lucide-react';

const ForecastView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Cash Flow Forecast</h2>
        <p className="text-sm text-slate-500">Predictive analysis of future financial stability.</p>
      </div>

      <ForecastWidget forecasts={MOCK_FORECAST} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Risk Scenarios</h3>
            <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-700">Scenario A: Normal Collection</span>
                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full font-bold">Likely</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">Assuming 90% of outstanding debt is collected within 15 days.</p>
                    <div className="flex justify-between items-center text-sm">
                        <span>Projected Cash Balance (Day 30):</span>
                        <span className="font-bold text-slate-900">$48,200</span>
                    </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-700">Scenario B: Late Payments (+15 days)</span>
                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-bold">Moderate Risk</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">If "Warning" status groups delay payments by 2 weeks.</p>
                    <div className="flex justify-between items-center text-sm">
                        <span>Projected Cash Balance (Day 30):</span>
                        <span className="font-bold text-amber-700">$36,500</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800">Cash Runway</h3>
                <HelpCircle className="w-5 h-5 text-slate-400" />
            </div>
            
            <div className="flex items-center justify-center py-8">
                 <div className="text-center">
                    <p className="text-4xl font-extrabold text-emerald-600 mb-2">3.5 Months</p>
                    <p className="text-sm text-slate-500">Operational runway with current reserve</p>
                 </div>
            </div>

            <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
                <div className="bg-emerald-500 h-4 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>0 Months</span>
                <span>6 Months Target</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastView;