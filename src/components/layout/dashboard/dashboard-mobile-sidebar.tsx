'use client';
import { SidebarcolumnItems } from '@/lib/constants/dashboard-sidebar';
import Link from 'next/link';
import React, { useState } from 'react';

export default function DashboardMobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
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
          {SidebarcolumnItems.map((item) => (
            <li
              key={item.id}
              className="w-full p-4 capitalize text-blue-100 hover:bg-blue-600"
            >
              <Link className="" href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
