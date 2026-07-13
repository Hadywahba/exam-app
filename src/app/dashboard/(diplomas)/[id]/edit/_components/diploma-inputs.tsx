'use client';

import { UseLogin } from '@/app/(auth)/login/_hooks/use-login';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import TitleField from './title-field';
import {
  EditFormFields,
  editschema,
} from '@/lib/schemas/admin-dashboard/edit-diploma.schema';
import DescriptionField from './description-field';
import DiplomaButtonsActions from './diploma-buttons-actions';

export default function DiplomaInputs() {
  // Mutation
  const { error, isPending, loginForm } = UseLogin();

  // Form
  const { register, handleSubmit, formState, setError } =
    useForm<EditFormFields>({
      mode: 'all',
      resolver: zodResolver(editschema),
      defaultValues: {
        title: '',
        description: '',
      },
    });

  // Function it used to submit login data
  const onsubmit: SubmitHandler<EditFormFields> = async (data) => {};
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="mx-6">
      {/* Buttons */}
      <section className="mb-6 bg-white md:pr-6">
        <DiplomaButtonsActions />
      </section>

      <h1 className="bg-blue-700 p-3 text-base font-semibold text-white">
        Diploma Information
      </h1>
      <footer className="flex flex-col gap-4 bg-white">
        {/* Title section */}
        <section className="w-full p-4">
          <TitleField
            register={register}
            name="title"
            errors={formState.errors}
            label="Title"
            disabled={false}
          />
        </section>

        {/* Description section */}
        <section className="w-full px-4 pb-4">
          <DescriptionField
            register={register}
            name="description"
            errors={formState.errors}
            label="description"
            disabled={false}
          />
        </section>
      </footer>
    </form>
  );
}
