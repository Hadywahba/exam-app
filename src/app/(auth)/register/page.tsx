import React from 'react';
import RegisterForm from './_components/register-form';

export default function page() {
  return (
    <main className="mx-auto min-h-screen py-12 sm:w-[28.3rem] lg:flex lg:flex-col lg:items-center lg:justify-center lg:py-36">
      <RegisterForm />
    </main>
  );
}
