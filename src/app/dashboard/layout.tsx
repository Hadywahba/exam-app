import Breadcrumbs from '@/components/features/dashboard/bread-crumbs';
import AdminDashboardMobileSidebar from '@/components/layout/admin-dashboard/admin-dashboard-mobile-sidebar';
import AdminDashboardSidebar from '@/components/layout/admin-dashboard/admin-dashboard-sidebar';

import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex w-full">
      {/* common sidebar */}
      <section className="hidden w-[22.625rem] border-r-[.0625rem] border-blue-50 bg-gray-800 lg:flex">
        <AdminDashboardSidebar />
      </section>

      <section className="flex w-full flex-col">
        <div className="flex h-[3.125rem] items-center justify-between bg-white sm:pr-4">
          {/* Breadcrumbs */}
          <div className="hidden w-[18.75rem] pl-2 sm:flex sm:w-full sm:pl-4">
            <Breadcrumbs />
          </div>

          {/* sidebar on mobile */}
          <div className="flex flex-1 justify-end lg:hidden">
            <AdminDashboardMobileSidebar />
          </div>
        </div>

        {/* children section */}
        <div className="flex  flex-1 flex-col min-h-screen bg-slate-50 px-4 mb-4">
          <div className=" w-full flex-1"> {children}</div>
        </div>
      </section>
    </main>
  );
}
