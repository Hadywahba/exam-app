import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inter",
});
export default function AuthBody() {
  return (
    <main className="flex flex-col justify-center items-start gap-12">
        {/* auth body header */}
      <section>
        <h1 className={`text-gray-800 text-3xl font-bold ${inter.className}`}>
          Empower your learning journey with our smart exam platform.
        </h1>
      </section>
        {/* auth body footer */}
      <section className="flex flex-col justify-center items-start gap-8">
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
              Choose from specialized tracks like Frontend, Backend, and Mobile
              Development.
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
              Access topic-specific tests including HTML, CSS, JavaScript, and
              more.
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
              Choose from specialized tracks like Frontend, Backend, and Mobile
              Development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
