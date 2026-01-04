import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus, DollarSign, Wallet, AlertTriangle, TrendingUp } from 'lucide-react';
import { KPI } from '../types';

interface KpiCardProps {
  kpi: KPI;
}

const KpiCard: React.FC<KpiCardProps> = ({ kpi }) => {
  const isPositive = kpi.status === 'positive';
  const isNegative = kpi.status === 'negative';
  
  // Decide Icon based on label for visual variety
  const getIcon = () => {
    if (kpi.label.includes('Revenue')) return <DollarSign className="w-5 h-5 text-emerald-600" />;
    if (kpi.label.includes('Debt')) return <AlertTriangle className="w-5 h-5 text-amber-600" />;
    if (kpi.label.includes('Profit')) return <TrendingUp className="w-5 h-5 text-blue-600" />;
    return <Wallet className="w-5 h-5 text-slate-600" />;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-50 rounded-lg">
          {getIcon()}
        </div>
        <div className={`flex items-center text-sm font-medium ${
          kpi.trendDirection === 'up' 
            ? (kpi.label.includes('Debt') ? 'text-red-600' : 'text-emerald-600') 
            : (kpi.label.includes('Debt') ? 'text-emerald-600' : 'text-red-600')
        }`}>
          {kpi.trendDirection === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : 
           kpi.trendDirection === 'down' ? <ArrowDownRight className="w-4 h-4 mr-1" /> : 
           <Minus className="w-4 h-4 mr-1" />}
          {Math.abs(kpi.trend)}% vs last month
        </div>
      </div>
      <div>
        <p className="text-sm text-slate-500 font-medium mb-1">{kpi.label}</p>
        <h3 className="text-2xl font-bold text-slate-900">
          {kpi.currency ? '$' : ''}{kpi.value.toLocaleString()}
        </h3>
      </div>
    </div>
  );
};

export default KpiCard;