import HomeHeader from '@/components/features/dashboard/diplomas/home-header';
import DiplomaCard from './_components/diploma-card';
import { Suspense } from 'react';
import Spinner from '@/components/loaders/Spinner';

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Header Section */}
      <div>
        <HomeHeader />
      </div>

      {/* Card Section */}
      <Suspense
        fallback={
          <div className="flex min-h-screen w-full items-center justify-center">
            <Spinner color="text-blue-600" />
          </div>
        }
      >
        <div className="grid grid-cols-1 gap-3 bg-slate-50 pb-8 sm:grid-cols-2 xl:grid-cols-3">
          <DiplomaCard />
        </div>
      </Suspense>
    </main>
  );
}
