'use client';
import { SidebarcolumnItems } from '@/lib/constants/dashboard-sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function DashboardSidebarDetails() {
  // hook
  const pathname = usePathname();
  
  return (
    <nav aria-label="sidebar menu" className="hidden lg:flex">
      <ul className="flex flex-col items-start justify-center gap-[.625rem]">
        {SidebarcolumnItems.map((item) => {
          const isActive =
            item.link === '/'
              ? pathname === '/' || pathname.startsWith('/exam')
              : pathname.startsWith(item.link);

          return (
            <li
              key={item.id}
              className={`flex w-[17.625rem] items-center justify-start gap-[0.625rem] ${isActive ? 'border-[.0625rem] border-blue-600 bg-blue-100' : ''} py-[1.0938rem] pl-[1rem]`}
            >
              {isActive ? (
                <Image
                  src={item.activeImage}
                  width={24}
                  height={24}
                  alt={item.alt}
                />
              ) : (
                <Image src={item.image} width={24} height={24} alt={item.alt} />
              )}

              <Link
                className={`text-base font-normal ${isActive ? 'text-blue-600' : 'text-gray-500'} `}
                href={item.link}
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
