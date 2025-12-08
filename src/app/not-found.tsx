import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative">
          <h1 className="text-[6rem] font-bold text-blue-600 md:text-[9rem]">
            404
          </h1>
          <div className="absolute inset-0 -z-10 blur-3xl">
            <div className="h-full w-full rounded-full bg-blue-200 opacity-30"></div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
            Page Not Found
          </h2>
          <p className="max-w-md text-base text-gray-500">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been deleted.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/">
            <Button variant="default" size="lg">
              Back to Home
            </Button>
          </Link>
          <Link href="/accout">
            <Button variant="outline" size="lg">
              Account Settings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
