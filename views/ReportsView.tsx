import React from 'react';
import { MOCK_REPORTS } from '../constants';
import { FileText, Download, FileSpreadsheet } from 'lucide-react';

const ReportsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Reports & Exports</h2>
        <p className="text-sm text-slate-500">Download formatted reports for external use.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
             {MOCK_REPORTS.map((report) => (
                 <div key={report.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col justify-between">
                     <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg ${report.type === 'PDF' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
                            {report.type === 'PDF' ? <FileText size={24} /> : <FileSpreadsheet size={24} />}
                        </div>
                        <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded">{report.type}</span>
                     </div>
                     <div>
                         <h4 className="font-semibold text-slate-900 mb-1">{report.name}</h4>
                         <p className="text-xs text-slate-500 mb-4">Generated: {report.generatedDate} • {report.size}</p>
                         <button className="w-full py-2 flex items-center justify-center gap-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                             <Download size={16} /> Download
                         </button>
                     </div>
                 </div>
             ))}
        </div>
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 text-center">
            <button className="text-sm font-medium text-slate-600 hover:text-slate-900">View Older Reports</button>
        </div>
      </div>
    </div>
  );
};

export default ReportsView;