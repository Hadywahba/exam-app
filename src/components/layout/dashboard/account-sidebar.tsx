'use client';
import { accountSidebarcolumnItems } from '@/lib/constants/account-sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function AccountSidebar() {
  // hook
  const pathname = usePathname();
  return (
    <main className="mb-4 hidden flex-col justify-between bg-white px-4 py-6 lg:flex">
      <nav aria-label="sidebar menu" className="">
        <ul className="flex flex-col items-start justify-around gap-[.625rem]">
          {accountSidebarcolumnItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <li
                key={item.id}
                className={`flex w-[14.625rem] items-center justify-start gap-[0.625rem] ${isActive ? 'border-[.0625rem] border-blue-600 bg-blue-100' : ''} py-[1.0938rem] pl-[1rem]`}
              >
                {isActive ? (
                  <Image
                    src={item.activeImage}
                    width={24}
                    height={24}
                    alt={item.alt}
                  />
                ) : (
                  <Image
                    src={item.image}
                    width={24}
                    height={24}
                    alt={item.alt}
                  />
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
      <div className="flex w-[14.625rem] items-center gap-2 bg-red-50 py-[.625rem] pl-[1rem]">
        <Image
          src="/assets/icons/log-out.svg"
          width={24}
          height={24}
          alt="Logout"
        />
        <span className="text-base font-normal text-red-600">Logout</span>
      </div>
    </main>
  );
}
