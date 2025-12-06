'use client';
import SubmitButton from '@/components/features/auth-fields/submit-button';
import React from 'react';
import PasswordField from '@/components/features/auth-fields/password-field';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ResetPasswordFormFields,
  resetschema,
} from '@/lib/schemas/forgot-password';
import { UseResetPassword } from '../_hooks/use-reset-password';
import { useSearchParams } from 'next/navigation';
import { ResetPasswordPayload } from '../_types/reset';

export default function ResetPasswordForm() {
  // Mutation
  const { reset, error, isPending } = UseResetPassword();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  //Form
  const { register, formState, handleSubmit } =
    useForm<ResetPasswordFormFields>({
      mode: 'all',
      resolver: zodResolver(resetschema),
      defaultValues: {
        newPassword: '',
        rePassword: '',
      },
    });
  const onsubmit: SubmitHandler<ResetPasswordFormFields> = async (data) => {
 
    const payload: ResetPasswordPayload = {
      email: email!,
      newPassword: data.newPassword,
    };
    reset(payload);
  };
  return (
    <main className="mx-auto flex min-h-screen w-full flex-col justify-center gap-2 px-6 pt-20 md:w-[70%] lg:w-[28.25rem] lg:px-0">
      {/* title section */}
      <div className="pb-6">
        <h1 className="mb-2 font-inter text-3xl font-bold text-gray-800">
          Create a New Password
        </h1>
        <p className="text-base font-normal text-gray-500">
          Create a new strong password for your account.
        </p>
      </div>
      {/* form section  */}
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col justify-center gap-4"
      >
        {/* New password section */}
        <section className="w-full">
          <PasswordField
            register={register}
            name="newPassword"
            errors={formState.errors}
            label="New Password"
            placeholder="enter your Password"
          />
        </section>
        {/*Confirm New Password  section */}
        <section className="w-full">
          <PasswordField
            register={register}
            name="rePassword"
            errors={formState.errors}
            label="Confirm New Password"
            placeholder="enter your rePassword"
          />
        </section>

        {/* button */}
        <section>
          <SubmitButton
            label="Reset Password"
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
    </main>
  );
}
