import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inter",
});
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
          <div className="flex items-center justify-start gap-2">
            <Image
              src="/assets/icons/folder.svg"
              width={40}
              height={40}
              alt="folder"
            />
            <h1 className="text-blue-600 text-xl font-semibold ">Exam App</h1>
          </div>
          <div className="flex flex-col justify-center items-start gap-12">
            <div>
              <h1
                className={`text-gray-800 text-3xl font-bold ${inter.className}`}
              >
                Empower your learning journey with our smart exam platform.
              </h1>
            </div>
            <div className="flex flex-col justify-center items-start gap-8">
              <div className="flex items-start justify-start gap-5">
                <Image
                  src="/assets/icons/brain.svg"
                  width={36}
                  height={36}
                  alt="brain"
                />
                <div>
                  <h4 className="text-xl text-blue-600 font-semibold pb-2">
                    Tailored Diplomas
                  </h4>
                  <p className="text-gray-700 font-normal max-w-96">
                    Choose from specialized tracks like Frontend, Backend, and
                    Mobile Development.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-5">
                <Image
                  src="/assets/icons/exam.svg"
                  width={36}
                  height={36}
                  alt="brain"
                />
                <div>
                  <h4 className="text-xl text-blue-600 font-semibold pb-2">
                    Focused Exams
                  </h4>
                  <p className="text-gray-700 font-normal max-w-96">
                    Access topic-specific tests including HTML, CSS, JavaScript,
                    and more.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-5">
                <Image
                  src="/assets/icons/steps.svg"
                  width={36}
                  height={36}
                  alt="brain"
                />
                <div>
                  <h4 className="text-xl text-blue-600 font-semibold pb-2">
                    Smart Multi-Step Forms
                  </h4>
                  <p className="text-gray-700 font-normal max-w-96">
                    Choose from specialized tracks like Frontend, Backend, and
                    Mobile Development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sections */}
      <div>{children}</div>
    </main>
  );
}
