'use client';

import { AdminaccountSidebarcolumnItems } from '@/lib/constants/admin-account-sidebar';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function AdminDashboardMobileSidebar() {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  // Hook
  const router = useRouter();
  const pathname = usePathname();

  //  Variable
  const isDiplomaActive =
    pathname === '/dashboard' || pathname.startsWith('/dashboard/');

  // Function
  const gotoDiplomaAdminDashboard = () => {
    router.push('/dashboard');
  };
  return (
    <>
      {/* Burger button */}
      <button
        className=" "
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile sliding menu */}
      <nav
        aria-label="Mobile menu"
        className={`fixed right-0 top-0 z-50 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          className="mb-4 flex w-full justify-end p-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Close menu"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex min-h-screen w-[220px] flex-col gap-2">
          {/* diploma  */}
          <li
            onClick={gotoDiplomaAdminDashboard}
            className={`flex items-center justify-start gap-[0.625rem] p-4 capitalize hover:border-[.0625rem] hover:bg-gray-400 hover:text-white ${isDiplomaActive ? 'border border-gray-500 bg-gray-600 px-4 text-white' : 'text-gray-500'} `}
          >
            Diplomas
          </li>
          <li
            className="flex w-full cursor-pointer items-center justify-between p-4 hover:bg-gray-100"
            onClick={() => setAccountOpen(!accountOpen)}
          >
            <span className="text-base font-medium">Account Settings</span>
            <svg
              className={`h-4 w-4 transition-transform ${accountOpen ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </li>
          {/* account Dropdown items */}
          {accountOpen &&
            AdminaccountSidebarcolumnItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <li
                  key={item.id}
                  className={`flex w-full items-center gap-2 p-3 pl-6 capitalize ${
                    isActive ? 'border border-gray-500 bg-gray-600 px-4' : ''
                  }`}
                >
                  <Image
                    src={isActive ? item.activeImage : item.image}
                    width={24}
                    height={24}
                    alt={item.alt}
                  />
                  <Link
                    href={item.link}
                    className={`text-base font-normal ${isActive ? 'text-white' : 'text-gray-500'}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}

          <li
            onClick={() => signOut()}
            className="flex items-center justify-start gap-[0.625rem] p-4 capitalize text-gray-500 hover:border-[.0625rem] hover:bg-gray-400 hover:text-white"
          >
            <Image
              src="/assets/icons/log-out.svg"
              width={24}
              height={24}
              alt="log-out"
            />
            Logout
          </li>
        </ul>
      </nav>
    </>
  );
}
