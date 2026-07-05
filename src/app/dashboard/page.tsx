import React from 'react';
import DiplomasTabel from './(diplomas)/_components/diplomas-tabel';
import Search from './(diplomas)/_components/search';

export default function page() {
  return (
    <div className="space-y-6 mt-6">
      <Search />
      <DiplomasTabel />
    </div>
  );
}
