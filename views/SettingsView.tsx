import React from 'react';
import { Shield, Smartphone, Bell, User } from 'lucide-react';

const SettingsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Settings</h2>
        <p className="text-sm text-slate-500">Manage security, notifications, and center profile.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><User size={20} /></div>
                <h3 className="text-lg font-bold text-slate-800">Center Profile</h3>
             </div>
             <form className="space-y-4">
                 <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Center Name</label>
                     <input type="text" value="Bright Future Academy" readOnly className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-600" />
                 </div>
                 <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Owner Email</label>
                     <input type="email" value="alex.owner@brightfuture.com" readOnly className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 text-slate-600" />
                 </div>
             </form>
          </div>

          {/* Security Section */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Shield size={20} /></div>
                <h3 className="text-lg font-bold text-slate-800">Security</h3>
             </div>
             <div className="space-y-4">
                 <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                     <div className="flex items-center gap-3">
                         <Smartphone className="text-slate-400" size={20} />
                         <div>
                             <p className="text-sm font-medium text-slate-900">Phone-based Login</p>
                             <p className="text-xs text-slate-500">Enabled (+1 555-0123)</p>
                         </div>
                     </div>
                     <span className="text-xs font-bold text-emerald-600">Active</span>
                 </div>
                 <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                     <div>
                         <p className="text-sm font-medium text-slate-900">Active Sessions</p>
                         <p className="text-xs text-slate-500">MacBook Pro (Current), iPhone 14</p>
                     </div>
                     <button className="text-xs font-medium text-red-600 hover:text-red-800">Log out others</button>
                 </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default SettingsView;