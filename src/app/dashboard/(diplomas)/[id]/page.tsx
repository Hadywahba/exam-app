import React from 'react';
import { GetDiploma } from './_hooks/get-diploma-id';
import ListError from '@/components/error/list-error';
import Image from 'next/image';
import { Ban } from 'lucide-react';
import { Button } from '@/components/ui/button';
const BUTTONS = [
  {
    titleKey: 'Immutable',
    icon: Ban,
    color: 'bg-gray-200 hover:bg-gray-300 text-black gap-2',
  },
  {
    titleKey: 'Edit',
    icon: Ban,
    color: 'bg-blue-600 text-white',
  },
  {
    titleKey: 'Delete',
    icon: Ban,
    color: 'bg-red-600 hover:bg-red-700 text-white',
  },
];
export default async function page({ params }: { params: { id: string } }) {
  // Query
  const diplomaId = params.id;

  // Hook
  const { DiplomaData, error } = await GetDiploma(diplomaId);

  return (
    <ListError isError={!!error} message={error ?? undefined}>
      <div>
        <section className="flex flex-col items-center justify-between gap-4 bg-white p-4 lg:flex lg:flex-row lg:justify-between">
          <h1 className="font-inter text-sm font-semibold sm:text-base md:text-lg">
            {DiplomaData?.diploma.title}
          </h1>
          {/* Buttons */}
          <div className="flex w-full flex-1 flex-col items-center gap-4 lg:flex lg:flex-row lg:justify-end">
            {BUTTONS.map((button) => {
              const Icon = button.icon;

              return (
                <Button
                  key={button.titleKey}
                  className={`${button.color} w-full hover:opacity-90 lg:w-40`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {button.titleKey}
                </Button>
              );
            })}
          </div>
        </section>

        <section className="mt-6 space-y-3 bg-white p-4">
          {/* Image Section */}
          <figure>
            <p className="text-sm font-normal text-gray-400">Image</p>
            <Image
              src={String(DiplomaData?.diploma.image)}
              alt={String(DiplomaData?.diploma.title)}
              width={300}
              height={300}
              className="rounded-md object-cover"
            />
          </figure>

          {/* Title */}
          <div>
            <p className="text-sm font-normal text-gray-400">Title</p>
            <h3 className="text-sm font-normal text-black">
              {DiplomaData?.diploma.title}
            </h3>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm font-normal text-gray-400">Description</p>
            <h3 className="text-sm font-normal leading-5 text-gray-800">
              {DiplomaData?.diploma.description}
            </h3>
          </div>
        </section>
      </div>
    </ListError>
  );
}
