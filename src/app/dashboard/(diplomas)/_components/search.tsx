import React from 'react';
import { SlidersHorizontal, ChevronsDownUp } from 'lucide-react';
export default function Search() {
  return (
    <section className="w-full bg-white">
      {/* Header */}
      <header className="flex items-center justify-between bg-blue-600 p-2">
        {/* LEFT SIDE */}
        <div className="flex gap-2 font-inter text-base font-semibold">
          <SlidersHorizontal size={20} className="text-white" />
          <p className="capitalize text-white">Search & Filters</p>
        </div>

        {/* Right SIDE */}
        <div className="flex items-center gap-2 font-inter text-sm font-medium">
          <ChevronsDownUp size={16} className="text-white" />
          <p className="capitalize text-white">Hide</p>
        </div>
      </header>
      {/* Footer */}
      <footer className='p-3 bg-slate-400'>
        <h1>hfdfsdfggfs</h1>
        <h1>hfdfsdfggfs</h1>
        <h1>hfdfsdfggfs</h1>
        <h1>hfdfsdfggfs</h1>
      </footer>
    </section>
  );
}
