import { AccountSidebarMenu } from '../types/account-sidebar';

// column Account sidebar items without IDs
const accountsidebarcolumnItems: Omit<AccountSidebarMenu, 'id'>[] = [
  {
    name: 'Profile',
    link: '/accout',
    image: '/assets/icons/circle-user-round-gray.svg',
    activeImage: '/assets/icons/circle-user-round-blue.svg',
    alt: 'accout',
  },
  {
    name: 'Change Password',
    link: '/accout/change-password',
    image: '/assets/icons/lock-gray.svg',
    activeImage: '/assets/icons/lock-blue.svg',
    alt: 'change-password',
  },
];

// Export final sidebar with IDs
export const accountSidebarcolumnItems: AccountSidebarMenu[] = accountsidebarcolumnItems.map(
  (item, index) => ({
    ...item,
    id: index + 1,
  }),
);
