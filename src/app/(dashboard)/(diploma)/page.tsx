import HomeHeader from '@/components/features/dashboard/diplomas/home-header';
import DiplomaCard from './_components/diploma-card';
import { Suspense } from 'react';
import Spinner from '@/components/loaders/Spinner';

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      {/* Header Section */}
      <div>
        <HomeHeader />
      </div>

      {/* Card Section */}
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <Spinner color="text-blue-600" />
          </div>
        }
      >
        <div className="grid grid-cols-1 gap-3 bg-slate-50 pb-8 sm:grid-cols-2 xl:grid-cols-3">
          <DiplomaCard />
        </div>
        <div className='w-full py-3 bg-white'>
        <h4 className='text-gray-600  text-center mx-auto text-base'>End of list</h4>
    </div>
      </Suspense>
    </main>
  );
}
