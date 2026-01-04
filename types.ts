export interface KPI {
  label: string;
  value: number;
  currency: boolean;
  trend: number; // percentage change
  trendDirection: 'up' | 'down' | 'neutral';
  status: 'positive' | 'negative' | 'neutral';
}

export interface MonthlyFinancials {
  month: string;
  revenue: number;
  expected: number;
  expenses: number;
  debtCollected: number;
}

export interface DebtDistribution {
  name: string;
  value: number;
  color: string;
}

export interface TeacherPerformance {
  id: string;
  name: string;
  groups: number;
  students: number;
  expectedRevenue: number;
  collectedRevenue: number;
  outstandingDebt: number;
  disciplineScore: number; // 0-100
  trend: 'up' | 'down' | 'stable';
}

export interface Student {
  id: string;
  name: string;
  status: 'Paid' | 'Late' | 'Unpaid';
  lastPaymentDate: string;
  debtAmount: number;
}

export interface GroupSummary {
  id: string;
  name: string;
  teacherId: string;
  teacherName: string;
  studentsCount: number;
  expectedIncome: number;
  collectedIncome: number;
  outstandingDebt: number;
  status: 'Good' | 'Warning' | 'Critical';
  fee: number;
  paidPercentage: number;
  studentList?: Student[]; // Optional for drill-down
}

export interface CashFlowForecast {
  period: string; // "30 Days", "60 Days"
  expectedInflow: number;
  confirmedInflow: number; // Recurring payments set up
  riskGap: number; // Expected - Confirmed
}

export interface AuditLog {
  id: string;
  timestamp: string;
  category: 'TEACHER_ACTION' | 'ADMIN_ACTION' | 'GROUP_LOG' | 'FINANCIAL' | 'SYSTEM_EVENT';
  actor: string;
  role: 'SYSTEM' | 'ADMIN' | 'TEACHER';
  actionDescription: string;
  object: string;
  amount: number | null;
  status: 'COMPLETED' | 'REVERTED';
}

export interface ArchivedRecord {
  id: string;
  type: 'Student' | 'Group' | 'Teacher' | 'Financial';
  name: string;
  date: string;
  archivedBy: string;
  reason: string;
}

export interface Report {
  id: string;
  name: string;
  type: 'PDF' | 'Excel';
  generatedDate: string;
  size: string;
}
