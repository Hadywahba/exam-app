import Image from 'next/image';
import React from 'react';
import { DashboardSidebarDropdown } from './dashboard-sidebar-dropdown';
import DashboardSidebarDetails from './dashboard-sidebar-details';
import { getServerSession } from 'next-auth';
import { authoption } from '@/auth';

export default async function DashboardSidebar() {
const userDate = await getServerSession(authoption)
  return (
    <main className="flex min-h-screen flex-col gap-[3rem] px-10">
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
        <DashboardSidebarDetails />

        <section className="flex w-[17.625rem] items-center justify-between">
          <div className="flex flex-col gap-1">
            <h4 className="text-base font-medium text-blue-600">
       {userDate?.user.username}
            </h4>
            <h5 className="text-sm font-normal text-gray-500">
              {userDate?.user.email}
         
            </h5>
          </div>
          <DashboardSidebarDropdown />
        </section>
      </div>
    </main>
  );
}
