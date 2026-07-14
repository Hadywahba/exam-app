'use client';

import { AdminSidebarcolumnItems } from '@/lib/constants/admin-dashboard-sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminDashboardSidebarDetails() {
  const pathname = usePathname();

  return (
    <nav aria-label="sidebar menu" className="hidden lg:flex">
      <ul className="flex flex-col items-start justify-center gap-[.625rem]">
        {AdminSidebarcolumnItems.map((item) => {
          const isActive =
            pathname === item.link || pathname.startsWith(`${item.link}/`);

          const Icon = isActive ? item.activeImage : item.image;

          return (
            <li
              key={item.id}
              className={`flex w-[17.625rem] items-center justify-start gap-[0.625rem] rounded-lg py-[1.0938rem] pl-[1rem] transition-colors ${
                isActive
                  ? 'border border-gray-600 bg-gray-700'
                  : 'border border-transparent'
              }`}
            >
              <Icon
                size={24}
                className={isActive ? 'text-white' : 'text-gray-400'}
              />

              <Link
                href={item.link}
                className={`text-base font-normal ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
