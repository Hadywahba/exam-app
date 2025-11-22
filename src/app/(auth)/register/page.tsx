import React from "react";
import RegisterForm from "./_components/register-form";

export default function page() {
  return (
    <main className=" min-h-screen sm:w-[28.3rem] lg:flex lg:flex-col lg:justify-center lg:items-center mx-auto py-12 lg:py-36">
      <RegisterForm />
    </main>
  );
}
