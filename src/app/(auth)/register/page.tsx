import React from 'react';
import RegisterForm from './_components/register-form';

export default function page() {
  return (
    <main className="mx-auto flex flex-col sm:w-[28.3rem] py-8  lg:py-0">
      <RegisterForm />
    </main>
  );
}
