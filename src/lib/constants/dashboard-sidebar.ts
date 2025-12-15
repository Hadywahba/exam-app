import { SidebarMenu } from '../types/dashboard-sidebar';

// column sidebar items without IDs
const sidebarcolumnItems: Omit<SidebarMenu, 'id'>[] = [
  {
    name: 'Diplomas',
    link: '/',
    image: '/assets/icons/graduation-cap-gray.svg',
    activeImage: '/assets/icons/graduation-cap.svg',
    alt: 'graduation',
  },
  {
    name: 'Account Settings',
    link: '/account',
    image: '/assets/icons/user-round.svg',
    activeImage: '/assets/icons/user-round-blue.svg',
    alt: 'Account',
  },
];

// Export final sidebar with IDs
export const SidebarcolumnItems: SidebarMenu[] = sidebarcolumnItems.map(
  (item, index) => ({
    ...item,
    id: index + 1,
  }),
);
