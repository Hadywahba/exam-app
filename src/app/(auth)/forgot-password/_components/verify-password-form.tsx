'use client';

import Link from 'next/link';
import React from 'react';
import { MoveLeft } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { otpschema, VerifyFormFields } from '@/lib/schemas/forgot-password';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {} from '@/components/ui/input-otp';
import SubmitButton from '@/components/features/auth-fields/submit-button';
import InputOTPWithResendTimerDemo from './input-otp-timer';
import { useSearchParams } from 'next/navigation';
import { UseVeifiy } from '../_hooks/use-verify';
export default function VerifyPasswordForm() {
  // Mutation
  const { error, isPending, verifiy } = UseVeifiy();

  // Form
  const { handleSubmit, formState, control } = useForm<VerifyFormFields>({
    mode: 'all',
    resolver: zodResolver(otpschema),
    defaultValues: {
      resetCode: '',
    },
  });

  // Variables
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  // Functions
  const onsubmit: SubmitHandler<VerifyFormFields> = async (data) => {
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
            Verify OTP
          </h1>
          <p className="text-sm font-normal text-gray-500 sm:text-base">
            Please enter the 6-digits code we have sent to:
          </p>
          <p className="text-sm font-normal sm:text-base">
            {email}.{' '}
            <span className="text-sm font-medium text-blue-600 underline sm:text-base">
              <Link href={'/forgot-password?step=1'}>Edit</Link>
            </span>
          </p>
        </div>

        {/* OTP section */}
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="mt-4 w-full items-center gap-2">
            {/* Controller */}
            <Controller
              name="resetCode"
              control={control}
              render={({ field }) => (
                <InputOTPWithResendTimerDemo
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={() => field.onBlur()}
                  email={email!}
                />
              )}
            />

            {/* Error */}
            {formState.errors.resetCode && (
              <div className="text-center text-xs text-red-500">
                {formState.errors.resetCode.message as string}
              </div>
            )}
          </div>

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
