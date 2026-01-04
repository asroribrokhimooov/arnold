import React from 'react';
import { CashFlowForecast } from '../types';
import { TrendingUp, AlertTriangle } from 'lucide-react';

interface Props {
  forecasts: CashFlowForecast[];
}

const ForecastWidget: React.FC<Props> = ({ forecasts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {forecasts.map((forecast, idx) => (
        <div key={idx} className="bg-white border border-slate-200 rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{forecast.period}</h4>
            {forecast.riskGap > 5000 && <AlertTriangle className="w-4 h-4 text-amber-500" />}
          </div>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>Expected Inflow</span>
                <span className="font-medium text-slate-900">${forecast.expectedInflow.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div className="bg-slate-300 h-1.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div>
               <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>Confirmed (Recurring)</span>
                <span className="font-medium text-emerald-600">${forecast.confirmedInflow.toLocaleString()}</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5">
                <div 
                  className="bg-emerald-500 h-1.5 rounded-full" 
                  style={{ width: `${(forecast.confirmedInflow / forecast.expectedInflow) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="pt-2 border-t border-slate-100">
               <div className="flex justify-between items-center">
                 <span className="text-xs text-slate-400">Risk Gap</span>
                 <span className="text-sm font-bold text-amber-600">${forecast.riskGap.toLocaleString()}</span>
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastWidget;