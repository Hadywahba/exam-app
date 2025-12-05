import DashboardMobileSidebar from '@/components/layout/dashboard/dashboard-mobile-sidebar';
import DashboardSidebar from '@/components/layout/dashboard/dashboard-sidebar';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex w-full">
      {/* common sidebar */}
      <section className="w-[22.625rem hidden border-r-[1px] border-blue-50 bg-blue-50 lg:flex">
        <DashboardSidebar />
      </section>
      {/* sidebar on mobile */}
      <section className="absolute right-0 flex lg:hidden">
        <DashboardMobileSidebar />
      </section>
      {/* children section */}
      <div className="w-full"> {children}</div>
    </main>
  );
}
