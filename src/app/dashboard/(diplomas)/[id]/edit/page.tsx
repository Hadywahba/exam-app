import React from 'react';
import DiplomaInputs from './_components/diploma-inputs';
import { GetDiploma } from '../_hooks/get-diploma-id';
import ListError from '@/components/error/list-error';

export default async function page({ params }: { params: { id: string } }) {
  // Query
  const diplomaId = params.id;

  // Hook
  const { DiplomaData, error } = await GetDiploma(diplomaId);

  return (
    <div className="space-y-4">
      {/* Inputs */}
      <ListError isError={!!error} message={error ?? undefined}>
        <section>
          <DiplomaInputs diplomaId={diplomaId} DiplomaData={DiplomaData!} />
        </section>
      </ListError>
    </div>
  );
}
