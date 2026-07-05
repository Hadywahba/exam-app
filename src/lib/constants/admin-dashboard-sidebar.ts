import { GraduationCap, BookOpenCheck, UserRound , Logs } from 'lucide-react';
import { AdminSidebarMenu } from '../types/dashboard-sidebar';

// column sidebar items without IDs
const adminsidebarcolumnItems: Omit<AdminSidebarMenu, 'id'>[] = [
  {
    name: 'Diplomas',
    link: '/dashboard',
    image: GraduationCap,
    activeImage: GraduationCap,
    alt: 'graduation',
  },
  {
    name: 'Exams',
    link: '/dashboard/exams',
    image: BookOpenCheck,
    activeImage: BookOpenCheck,
    alt: 'Exams',
  },
  {
    name: 'Account Settings',
    link: '/dashboard/account',
    image: UserRound,
    activeImage: UserRound,
    alt: 'Account',
  },
  {
    name: 'Audit Log',
    link: '/dashboard/audit',
    image: Logs,
    activeImage: Logs,
    alt: 'Account',
  },
];

// Export final sidebar with IDs
export const AdminSidebarcolumnItems: AdminSidebarMenu[] =
  adminsidebarcolumnItems.map((item, index) => ({
    ...item,
    id: index + 1,
  }));
