import React from 'react';
import AccountHeader from './_components/account-header';
import AccountSidebar from '@/components/layout/dashboard/account-sidebar';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col  h-[53.875rem] bg-slate-100 px-4">
      {/* comman header */}
    <section>
          <AccountHeader />
    </section>
    <section className='flex flex-1 lg:gap-5 overflow-hidden '>
         {/*account sidebar */}
  <div className='flex lg:w-[17.625rem]'>
        <AccountSidebar />
  </div>
      {/* children section */}
      <div className="w-full mb-4"> {children}</div>
    </section>
     
    </main>
  );
}
