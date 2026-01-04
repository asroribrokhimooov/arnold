import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Menu,
  X,
  PieChart,
  BarChart3,
  TrendingUp,
  Archive,
  Download
} from 'lucide-react';

// Views
import DashboardView from './views/DashboardView';
import AnalyticsView from './views/AnalyticsView';
import GroupsView from './views/GroupsView';
import TeachersView from './views/TeachersView';
import ForecastView from './views/ForecastView';
import ReportsView from './views/ReportsView';
import AuditLogsView from './views/AuditLogsView';
import ArchiveView from './views/ArchiveView';
import SettingsView from './views/SettingsView';

type ViewState = 'overview' | 'analytics' | 'groups' | 'teachers' | 'forecast' | 'reports' | 'logs' | 'archive' | 'settings';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewState>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const NavItem = ({ id, label, icon: Icon }: { id: ViewState, label: string, icon: any }) => (
    <button 
      onClick={() => {
        setActiveView(id);
        setMobileMenuOpen(false);
      }}
      className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
        activeView === id
          ? 'bg-blue-50 text-blue-700' 
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      <Icon className={`w-5 h-5 ${activeView === id ? 'text-blue-600' : 'text-slate-400'}`} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar Navigation - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 fixed h-full z-10 overflow-y-auto">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">EO</div>
            <span className="text-lg font-bold text-slate-800">EduOwner</span>
          </div>
          <p className="text-xs text-slate-500 pl-10">Center ID: #88219</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Control</div>
          <NavItem id="overview" label="Overview" icon={LayoutDashboard} />
          <NavItem id="analytics" label="Financial Analytics" icon={BarChart3} />
          <NavItem id="forecast" label="Cash Flow Forecast" icon={TrendingUp} />

          <div className="mt-6 px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Operations</div>
          <NavItem id="groups" label="Groups & Students" icon={Users} />
          <NavItem id="teachers" label="Teachers Performance" icon={PieChart} />
          
          <div className="mt-6 px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">System & Audit</div>
          <NavItem id="reports" label="Reports & Exports" icon={Download} />
          <NavItem id="logs" label="System Logs" icon={FileText} />
          <NavItem id="archive" label="Archive" icon={Archive} />
          <NavItem id="settings" label="Settings" icon={Settings} />
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="flex items-center space-x-3 w-full px-4 py-3 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed w-full bg-white border-b border-slate-200 z-20 px-4 py-3 flex justify-between items-center">
         <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">EO</div>
            <span className="text-lg font-bold text-slate-800">EduOwner</span>
         </div>
         <button onClick={toggleMobileMenu} className="text-slate-600">
            {mobileMenuOpen ? <X /> : <Menu />}
         </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-10 pt-16 px-4 space-y-2 overflow-y-auto">
            <NavItem id="overview" label="Overview" icon={LayoutDashboard} />
            <NavItem id="analytics" label="Financial Analytics" icon={BarChart3} />
            <NavItem id="groups" label="Groups & Students" icon={Users} />
            <NavItem id="teachers" label="Teachers Performance" icon={PieChart} />
            <NavItem id="forecast" label="Cash Flow Forecast" icon={TrendingUp} />
            <NavItem id="reports" label="Reports & Exports" icon={Download} />
            <NavItem id="logs" label="System Logs" icon={FileText} />
            <NavItem id="archive" label="Archive" icon={Archive} />
            <NavItem id="settings" label="Settings" icon={Settings} />
        </div>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 min-h-screen transition-all duration-300 ${mobileMenuOpen ? 'blur-sm md:blur-none' : ''} md:ml-64`}>
         <div className="max-w-7xl mx-auto p-4 sm:p-8 pt-20 md:pt-8">
            {/* User Profile Header (Top Right) */}
            <div className="hidden md:flex justify-end mb-8 items-center space-x-4">
                <div className="text-right">
                    <p className="text-sm font-semibold text-slate-900">Alexander Owner</p>
                    <p className="text-xs text-slate-500">Center Owner • Admin</p>
                </div>
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-medium border border-slate-300">
                    AO
                </div>
            </div>

            {/* View Routing */}
            {activeView === 'overview' && <DashboardView />}
            {activeView === 'analytics' && <AnalyticsView />}
            {activeView === 'groups' && <GroupsView />}
            {activeView === 'teachers' && <TeachersView />}
            {activeView === 'forecast' && <ForecastView />}
            {activeView === 'reports' && <ReportsView />}
            {activeView === 'logs' && <AuditLogsView />}
            {activeView === 'archive' && <ArchiveView />}
            {activeView === 'settings' && <SettingsView />}
         </div>
      </main>
    </div>
  );
};

export default App;