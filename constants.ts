import { KPI, MonthlyFinancials, DebtDistribution, TeacherPerformance, GroupSummary, CashFlowForecast, AuditLog, ArchivedRecord, Report, Student } from './types';

export const MOCK_KPIS: KPI[] = [
  { label: 'Total Revenue (YTD)', value: 452000, currency: true, trend: 12.5, trendDirection: 'up', status: 'positive' },
  { label: 'Expected Revenue (MTD)', value: 42000, currency: true, trend: 5.2, trendDirection: 'up', status: 'neutral' },
  { label: 'Outstanding Debt', value: 8450, currency: true, trend: -2.1, trendDirection: 'down', status: 'positive' }, 
  { label: 'Net Profit (MTD)', value: 18500, currency: true, trend: 8.4, trendDirection: 'up', status: 'positive' },
];

export const MOCK_MONTHLY_FINANCIALS: MonthlyFinancials[] = [
  { month: 'Mar', revenue: 32000, expected: 35000, expenses: 18000, debtCollected: 1200 },
  { month: 'Apr', revenue: 34500, expected: 36000, expenses: 18500, debtCollected: 800 },
  { month: 'May', revenue: 31000, expected: 38000, expenses: 19000, debtCollected: 2500 },
  { month: 'Jun', revenue: 38000, expected: 40000, expenses: 21000, debtCollected: 1500 },
  { month: 'Jul', revenue: 41000, expected: 42000, expenses: 22000, debtCollected: 900 },
  { month: 'Aug', revenue: 39500, expected: 45000, expenses: 21500, debtCollected: 3100 },
];

export const MOCK_DEBT_DISTRIBUTION: DebtDistribution[] = [
  { name: 'Paid On Time', value: 72, color: '#10b981' }, 
  { name: 'Late (< 7 days)', value: 18, color: '#f59e0b' }, 
  { name: 'At Risk (> 30 days)', value: 7, color: '#ef4444' }, 
  { name: 'Uncollectible', value: 3, color: '#64748b' }, 
];

export const MOCK_TEACHERS: TeacherPerformance[] = [
  { id: '1', name: 'Sarah Jenkins', groups: 4, students: 48, expectedRevenue: 12000, collectedRevenue: 11800, outstandingDebt: 200, disciplineScore: 98, trend: 'stable' },
  { id: '2', name: 'Michael Ross', groups: 6, students: 72, expectedRevenue: 18000, collectedRevenue: 15500, outstandingDebt: 2500, disciplineScore: 72, trend: 'down' },
  { id: '3', name: 'Elena Rodriguez', groups: 3, students: 30, expectedRevenue: 7500, collectedRevenue: 7400, outstandingDebt: 100, disciplineScore: 95, trend: 'up' },
  { id: '4', name: 'David Kim', groups: 5, students: 55, expectedRevenue: 13750, collectedRevenue: 11000, outstandingDebt: 2750, disciplineScore: 65, trend: 'down' },
  { id: '5', name: 'Jessica Lee', groups: 4, students: 42, expectedRevenue: 10500, collectedRevenue: 10200, outstandingDebt: 300, disciplineScore: 92, trend: 'stable' },
];

// Helper to generate students
const generateStudents = (count: number, risky: boolean): Student[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `s-${Math.random().toString(36).substr(2, 9)}`,
    name: `Student ${String.fromCharCode(65 + i)}`,
    status: risky && i % 3 === 0 ? 'Unpaid' : (i % 5 === 0 ? 'Late' : 'Paid'),
    lastPaymentDate: '2023-10-01',
    debtAmount: risky && i % 3 === 0 ? 150 : 0
  }));
};

export const MOCK_GROUPS: GroupSummary[] = [
  { id: 'g1', name: 'Advanced Math A', teacherId: '2', teacherName: 'Michael Ross', studentsCount: 12, expectedIncome: 3000, collectedIncome: 2100, outstandingDebt: 900, status: 'Critical', fee: 250, paidPercentage: 70, studentList: generateStudents(12, true) },
  { id: 'g2', name: 'Physics 101', teacherId: '1', teacherName: 'Sarah Jenkins', studentsCount: 15, expectedIncome: 3750, collectedIncome: 3750, outstandingDebt: 0, status: 'Good', fee: 250, paidPercentage: 100, studentList: generateStudents(15, false) },
  { id: 'g3', name: 'English Lit B', teacherId: '4', teacherName: 'David Kim', studentsCount: 10, expectedIncome: 2500, collectedIncome: 2000, outstandingDebt: 500, status: 'Warning', fee: 250, paidPercentage: 80, studentList: generateStudents(10, true) },
  { id: 'g4', name: 'Chemistry Lab', teacherId: '2', teacherName: 'Michael Ross', studentsCount: 14, expectedIncome: 3500, collectedIncome: 3000, outstandingDebt: 500, status: 'Warning', fee: 250, paidPercentage: 85, studentList: generateStudents(14, true) },
  { id: 'g5', name: 'Algebra II', teacherId: '5', teacherName: 'Jessica Lee', studentsCount: 18, expectedIncome: 4500, collectedIncome: 4500, outstandingDebt: 0, status: 'Good', fee: 250, paidPercentage: 100, studentList: generateStudents(18, false) },
];

export const MOCK_FORECAST: CashFlowForecast[] = [
  { period: 'Next 30 Days', expectedInflow: 42000, confirmedInflow: 35000, riskGap: 7000 },
  { period: 'Next 60 Days', expectedInflow: 40500, confirmedInflow: 31000, riskGap: 9500 },
  { period: 'Next 90 Days', expectedInflow: 38000, confirmedInflow: 25000, riskGap: 13000 },
];

export const MOCK_LOGS: AuditLog[] = [
  { id: 'L001', timestamp: '2023-10-25 14:32:00', category: 'FINANCIAL', actor: 'System (Stripe)', role: 'SYSTEM', actionDescription: 'Received payment', object: 'INV-2023-882 (Student: A. Smith)', amount: 250, status: 'COMPLETED' },
  { id: 'L002', timestamp: '2023-10-25 11:15:22', category: 'TEACHER_ACTION', actor: 'Michael Ross', role: 'TEACHER', actionDescription: 'Generated Invoice', object: 'Group: Advanced Math A', amount: 3000, status: 'COMPLETED' },
  { id: 'L003', timestamp: '2023-10-24 16:45:10', category: 'ADMIN_ACTION', actor: 'Admin User', role: 'ADMIN', actionDescription: 'Reverted Payment', object: 'PAY-9921', amount: 250, status: 'REVERTED' },
  { id: 'L004', timestamp: '2023-10-24 09:30:00', category: 'FINANCIAL', actor: 'System (Stripe)', role: 'SYSTEM', actionDescription: 'Received payment', object: 'INV-2023-880', amount: 250, status: 'COMPLETED' },
  { id: 'L005', timestamp: '2023-10-23 15:20:00', category: 'ADMIN_ACTION', actor: 'Admin User', role: 'ADMIN', actionDescription: 'Applied Discount', object: 'Student: J. Doe', amount: 50, status: 'COMPLETED' },
  { id: 'L006', timestamp: '2023-10-23 09:00:00', category: 'SYSTEM_EVENT', actor: 'Admin User', role: 'ADMIN', actionDescription: 'Login from new device', object: 'iPhone 14 Pro', amount: null, status: 'COMPLETED' },
  { id: 'L007', timestamp: '2023-10-22 10:00:00', category: 'GROUP_LOG', actor: 'Sarah Jenkins', role: 'TEACHER', actionDescription: 'Updated Schedule', object: 'Physics 101', amount: null, status: 'COMPLETED' },
];

export const MOCK_ARCHIVE: ArchivedRecord[] = [
  { id: 'A1', type: 'Student', name: 'John Doe', date: '2023-09-15', archivedBy: 'Admin', reason: 'Graduated' },
  { id: 'A2', type: 'Group', name: 'Summer Camp A', date: '2023-08-30', archivedBy: 'Admin', reason: 'Course Completed' },
  { id: 'A3', type: 'Teacher', name: 'Emily White', date: '2023-07-01', archivedBy: 'Admin', reason: 'Resigned' },
  { id: 'A4', type: 'Financial', name: 'FY 2022 Records', date: '2023-01-01', archivedBy: 'System', reason: 'Annual Archive' },
];

export const MOCK_REPORTS: Report[] = [
  { id: 'R1', name: 'October 2023 Financial Summary', type: 'PDF', generatedDate: '2023-11-01', size: '2.4 MB' },
  { id: 'R2', name: 'Q3 2023 Teacher Performance', type: 'Excel', generatedDate: '2023-10-15', size: '1.1 MB' },
  { id: 'R3', name: 'Outstanding Debt Report', type: 'Excel', generatedDate: '2023-10-25', size: '0.5 MB' },
  { id: 'R4', name: 'Student Attendance Logs', type: 'PDF', generatedDate: '2023-10-20', size: '3.2 MB' },
];
