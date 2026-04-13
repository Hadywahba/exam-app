'use client';

import React, { useContext } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import SubmitButton from '@/components/features/auth-fields/submit-button';
import InputOTPWithResendTimerDemo from '../../forgot-password/_components/input-otp-timer';
import { RegisterProps } from '@/lib/types/register-steps';
import { UseRegisterVeifiy } from '../_hooks/use-register-verify';
import {
  RegisterVerifyFormFields,
  registerverifyschema,
} from '@/lib/schemas/register.schema';
import { Register_STEPS } from '@/lib/constants/register.constant';
import { UserEmail } from '@/components/providers/auth/email-provider';

export default function RegisterCodeVerify({ setStep }: RegisterProps) {
  // Mutation
  const { error, isPending, verifiy } = UseRegisterVeifiy();

  // Context
  const { email } = useContext(UserEmail)!;

  // Form
  const { handleSubmit, formState, control } =
    useForm<RegisterVerifyFormFields>({
      mode: 'all',
      resolver: zodResolver(registerverifyschema),
      defaultValues: {
        code: '',
      },
    });

  // Functions
  const onsubmit: SubmitHandler<RegisterVerifyFormFields> = async (data) => {
    const payload = {
      ...data,
      email: email,
    };
    verifiy(payload, {
      onSuccess: () => {
        setStep(Register_STEPS.register);
      },
    });
  };

  return (
    <main className="mx-auto flex h-screen w-full flex-col justify-center gap-3 px-6 md:w-[70%] lg:h-full lg:w-[28.25rem] lg:px-0">
      {/* back button section */}

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
          <p className="text-sm font-normal sm:text-base">{email}. </p>
        </div>

        {/* OTP section */}
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="mt-4 w-full items-center gap-2">
            {/* Controller */}
            <Controller
              name="code"
              control={control}
              render={({ field }) => (
                <InputOTPWithResendTimerDemo
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={() => field.onBlur()}
                />
              )}
            />

            {/* Error */}
            {formState.errors.root && (
              <div className="text-center text-xs text-red-500">
                {formState.errors.root.message as string}
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
              isAuth={true}
            />
          </section>
        </form>
      </section>
    </main>
  );
}
