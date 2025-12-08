import Breadcrumbs from '@/components/features/dashboard/bread-crumbs';
import DashboardMobileSidebar from '@/components/layout/dashboard/dashboard-mobile-sidebar';
import DashboardSidebar from '@/components/layout/dashboard/dashboard-sidebar';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex w-full">
      {/* common sidebar */}
      <section className="hidden w-[22.625rem] border-r-[1px] border-blue-50 bg-blue-50 lg:flex">
        <DashboardSidebar />
      </section>

      <section className="flex w-full flex-col  ">
        <div className="flex items-center justify-between h-[3.125rem] bg-white sm:pr-4 ">
          <div className=" w-[300px] sm:w-full pl-2  sm:pl-4">
            <Breadcrumbs />
          </div>
          {/* sidebar on mobile */}
          <div className="flex lg:hidden">
            <DashboardMobileSidebar />
          </div>
        </div>
        {/* children section */}
        <div className="w-full"> {children}</div>
      </section>
    </main>
  );
}
