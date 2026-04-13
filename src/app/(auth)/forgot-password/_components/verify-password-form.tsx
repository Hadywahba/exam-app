'use client';

import Link from 'next/link';
import React from 'react';
import { MoveLeft } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitButton from '@/components/features/auth-fields/submit-button';
import { UseVeifiy } from '../_hooks/use-verify';
import PasswordField from '@/components/features/auth-fields/password-field';
import {
  ResetPasswordFormFields,
  resetschema,
} from '@/lib/schemas/forgot-password';
import NameField from '../../register/_components/name-field';

export default function VerifyPasswordForm() {
  // Mutation
  const { error, isPending, verifiy } = UseVeifiy();

  // Form
  const { handleSubmit, formState, register } =
    useForm<ResetPasswordFormFields>({
      mode: 'all',
      resolver: zodResolver(resetschema),
      defaultValues: {
        token: '',
        confirmPassword: '',
        newPassword: '',
      },
    });

  // Functions
  const onsubmit: SubmitHandler<ResetPasswordFormFields> = async (data) => {
    verifiy(data);
    console.log(data);
  };

  return (
    <main className="mx-auto flex h-screen w-full flex-col justify-center gap-3 px-6 md:w-[70%] lg:h-full lg:w-[28.25rem] lg:px-0">
      {/* back button section */}

      <section className="w-full">
        <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center border-[0.0938rem] border-gray-200">
          <Link href={'/forgot-password?step=1'}>
            <MoveLeft size={24} />
          </Link>
        </div>
      </section>

      {/* OTP section */}
      <section className="w-full flex-col justify-center gap-3 pt-9">
        {/* title */}
        <div className="pb-6">
          <h1 className="mb-2 font-inter text-2xl font-bold text-gray-800 sm:text-3xl">
            Create New Password
          </h1>
          <p className="text-sm font-normal text-gray-500 sm:text-base">
            Please enter your new password below. Make sure it is strong and
            secure.
          </p>
        </div>

        {/* OTP section */}
        <form onSubmit={handleSubmit(onsubmit)}>
          {/* Token section */}
          <section className="w-full">
            <NameField
              register={register}
              name="token"
              errors={formState.errors}
              label="token"
              placeholder="enter your new token"
              disabled={false}
            />
          </section>
          {/* password section */}
          <section className="w-full">
            <PasswordField
              register={register}
              name="newPassword"
              errors={formState.errors}
              label="new Password"
              placeholder="enter your Password"
            />
          </section>

          {/*confirm  password section */}
          <section className="w-full">
            <PasswordField
              register={register}
              name="confirmPassword"
              errors={formState.errors}
              label="Confirm Password"
              placeholder="enter your rePassword"
            />
          </section>

          {/* button */}
          <section>
            <SubmitButton
              label="Verify Code"
              message={error}
              loading={formState.isSubmitting}
              disbale={formState.isValid}
              isPending={isPending}
              text="Don’t have an account?"
              textLink="Create yours"
              link="/register"
              isAuth={true}
            />
          </section>
        </form>
      </section>
    </main>
  );
}
