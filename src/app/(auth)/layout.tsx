import AuthBody from "@/components/layout/auth/auth-body";
import AuthHeader from "@/components/layout/auth/auth-header";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 w-full  ">
      {/* static section */}
      <section className=" relative overflow-hidden hidden lg:block  ">
        {/* circle part */}
        <div className="absolute w-[25.1rem] h-[25.1rem] left-[24rem] top-[7rem] rounded-full bg-blue-400 blur-[200px]"></div>
        <div className="absolute w-[25.1rem] h-[25.1rem] top-[42rem] left-[0.9rem] rounded-full bg-blue-400 blur-[200px]"></div>

        <div className=" py-[7.25rem] px-[8.2rem] flex flex-col gap-2 relative z-90">
          {/* Auth header */}
          <AuthHeader />
          {/* Auth body */}
          <AuthBody />
        </div>
      </section>

      {/* sections */}
      <div className="w-full justify-center  flex flex-col" >{children}</div>
    </main>
  );
}
