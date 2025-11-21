import AuthBody from "@/components/layout/feature-name/auth-body";
import AuthHeader from "@/components/layout/feature-name/auth-header";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 ">
      {/* static section */}
      <section className="bg-white relative overflow-hidden  ">
        {/* circle part */}
        <div className="absolute w-[25.1rem] h-[25.1rem] left-[24rem] top-[7rem] rounded-full bg-blue-400 blur-[200px]"></div>
        <div className="absolute w-[25.1rem] h-[25.1rem] top-[42rem] left-[0.9rem] rounded-full bg-blue-400 blur-[200px]"></div>

        <div className="py-[7rem] px-[8.2rem] flex flex-col gap-16  relative z-90">
          {/* Auth header */}
          <AuthHeader />
          {/* Auth body */}
          <AuthBody />
        </div>
      </section>

      {/* sections */}
      <div>{children}</div>
    </main>
  );
}
