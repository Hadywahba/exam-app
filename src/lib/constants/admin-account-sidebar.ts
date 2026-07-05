import { AccountSidebarMenu } from '../types/account-sidebar';

// column Account sidebar items without IDs
const adminaccountsidebarcolumnItems: Omit<AccountSidebarMenu, 'id'>[] = [
  {
    name: 'Profile',
    link: '/dashboard/account',
    image: '/assets/icons/circle-user-round-gray.svg',
    activeImage: '/assets/icons/circle-user-round-blue.svg',
    alt: 'account',
  },
  {
    name: 'Change Password',
    link: '/dashboard/account/change-password',
    image: '/assets/icons/lock-gray.svg',
    activeImage: '/assets/icons/lock-blue.svg',
    alt: 'change-password',
  },
];

// Export final sidebar with IDs
export const AdminaccountSidebarcolumnItems: AccountSidebarMenu[] = adminaccountsidebarcolumnItems.map(
  (item, index) => ({
    ...item,
    id: index + 1,
  }),
);
