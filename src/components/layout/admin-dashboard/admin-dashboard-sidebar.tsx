import Image from 'next/image';
import React from 'react';
import { getServerSession } from 'next-auth';
import { authoption } from '@/auth';
import { AdminDashboardSidebarDropdown } from './admin-dashboard-sidebar-dropdown';
import AdminDashboardSidebarDetails from './admin-dashboard-sidebar-details';

export default async function AdminDashboardSidebar() {
  // Get data from Session
  const userDate = await getServerSession(authoption);
  return (
    <main className="flex flex-col gap-[3rem] px-10">
      {/* picture section */}
      <div className="hidden w-[12rem] pt-10 lg:flex lg:flex-col gap-2">
        <Image
          src="/assets/images/Final Logo 1.png"
          width={192}
          height={37}
          alt="logo"
          priority
        />
        <div className="flex items-center justify-start gap-2">
          <Image
            src="/assets/icons/exam-folder-code.svg"
            width={30}
            height={30}
            alt="folder"
          />
          <h1 className="text-xl font-semibold text-white">Exam App</h1>
        </div>
      </div>
      {/* details section */}
      <div className="flex flex-1 flex-col items-start justify-between pb-10">
        <AdminDashboardSidebarDetails />

        <section className="flex w-[17.625rem] items-center justify-between">
          <div className="flex flex-col gap-1">
            <h4 className="text-base font-medium text-white">
              {userDate?.user.username}
            </h4>
            <h5 className="text-sm font-normal text-gray-500">
              {userDate?.user.email}
            </h5>
          </div>
          <AdminDashboardSidebarDropdown />
        </section>
      </div>
    </main>
  );
}
