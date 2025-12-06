'use client';
import { SidebarcolumnItems } from '@/lib/constants/dashboard-sidebar';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function DashboardMobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
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
        <ul className="flex min-h-screen flex-col gap-6">
          {SidebarcolumnItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <li
                key={item.id}
                className={`flex w-full items-center justify-start gap-[0.625rem] p-4 capitalize ${isActive ? 'border-[.0625rem] border-blue-600 bg-blue-100' : ''}`}
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
          <li onClick={()=>signOut()} className=' p-4 capitalize flex items-center justify-start gap-[0.625rem] text-gray-500 hover:text-blue-600 hover:bg-blue-100  hover:border-[.0625rem]'>
             <Image
                    src='/assets/icons/log-out.svg'
                    width={24}
                    height={24}
                    alt='log-out'
                  />
            Logout</li>
        </ul>
      </nav>
    </>
  );
}
