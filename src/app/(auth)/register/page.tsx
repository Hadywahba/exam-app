import React from 'react';
import RegisterLayout from './_components/register-layout';
import UserEmailProvider from '@/components/providers/auth/email-provider';

export default function page() {
  return (
    <main className="mx-auto flex flex-col py-8 sm:w-[28.3rem] lg:py-0">
      <UserEmailProvider>
        <RegisterLayout />
      </UserEmailProvider>
    </main>
  );
}
