'use client';
import { SidebarcolumnItems } from '@/lib/constants/dashboard-sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function DashboardSidebar() {
  // hook
  const pathname = usePathname();
  return (
    <main className="flex min-h-screen flex-col gap-[3.75rem] px-10">
      {/* picture section */}
      <div className="hidden w-[12rem] pt-10 lg:flex lg:flex-col">
        <Image
          src="/assets/images/elevate-logo.png"
          width={192}
          height={37}
          alt="logo"
        />
        <div className="flex items-center justify-start gap-2">
          <Image
            src="/assets/icons/folder.svg"
            width={40}
            height={40}
            alt="folder"
          />
          <h1 className="text-xl font-semibold text-blue-600">Exam App</h1>
        </div>
      </div>
      {/* details section */}
      <div className="flex flex-1 flex-col items-start justify-between pb-10">
        <nav aria-label="sidebar menu" className="hidden lg:flex">
          <ul className="flex flex-col items-start justify-center gap-[.625rem]">
            {SidebarcolumnItems.map((item) => {
              const isActive = pathname === item.link;
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

        <section>
          <h1>Diplomas</h1>
          <h1>Diplomas</h1>
        </section>
      </div>
    </main>
  );
}
