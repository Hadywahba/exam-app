'use client';
import React from 'react';
import { SlidersHorizontal, ChevronsDownUp } from 'lucide-react';
import SearchField from '@/app/(auth)/register/_components/search-field';
import SelectState from './select-state';
import { UseLogin } from '@/app/(auth)/login/_hooks/use-login';
import { useForm } from 'react-hook-form';
import DashboardSubmitButton from '@/components/features/dashboard/dashboard-button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
type SearchFormFields = {
  search: string;
  immutable: boolean | null;
};
export default function Search() {
  // Mutation
  const { error, isPending } = UseLogin();

  // Hooks
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Form
  const { register, handleSubmit, reset, formState, control } =
    useForm<SearchFormFields>({
      mode: 'all',
      defaultValues: {
        search: searchParams.get('search') ?? '',
        immutable: null,
      },
    });

  // Functions
  const onSubmit = (data: SearchFormFields) => {
    const params = new URLSearchParams(searchParams);

    if (data.search) {
      params.set('search', data.search);
    } else {
      params.delete('search');
    }

    params.set('page', '1');
    if (data.immutable !== null) {
      params.set('immutable', data.immutable.toString());
    } else {
      params.delete('immutable');
    }
    router.push(`${pathname}?${params.toString()}`);
    console.log(data);
  };

  const onClear = () => {
    reset();

    router.push(pathname);
  };
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-3">
        <SearchField
          register={register}
          name="search"
          placeholder="Search by title"
        />
        <SelectState control={control} />

        <DashboardSubmitButton
          label1="Clear"
          label2="Apply"
          message={error}
          loading={formState.isSubmitting}
          disbale={formState.isValid}
          isPending={isPending}
          onClear={onClear}
        />
      </form>
    </section>
  );
}
