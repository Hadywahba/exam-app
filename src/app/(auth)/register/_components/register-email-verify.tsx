'use client';

import EmailField from '@/components/features/auth-fields/email-field';
import SubmitButton from '@/components/features/auth-fields/submit-button';
import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MoveRight } from 'lucide-react';
import { RegisterProps } from '@/lib/types/register-steps';
import { UseRegisterVeifiyEmail } from '../_hooks/use-register-email';
import {
  RegisterEmailFormFields,
  registeremailschema,
} from '@/lib/schemas/register.schema';
import { Register_STEPS } from '@/lib/constants/register.constant';
import { UserEmail } from '@/components/providers/auth/email-provider';
export default function RegisterEmailVerify({ setStep }: RegisterProps) {
  // Mutation
  const { error, isPending, verifiy } = UseRegisterVeifiyEmail();

  // Context
  const { emailState } = useContext(UserEmail)!;

  //Form
  const { register, formState, handleSubmit } =
    useForm<RegisterEmailFormFields>({
      mode: 'all',
      resolver: zodResolver(registeremailschema),
      defaultValues: {
        email: '',
      },
    });

  // onSubmit function used to send data to get OTP
  const onsubmit: SubmitHandler<RegisterEmailFormFields> = async (data) => {
    verifiy(data, {
      onSuccess: () => {
        emailState(data.email);
        setStep(Register_STEPS.verify);
      },
    });
  };

  return (
    <main className="mx-auto flex h-screen w-full flex-col justify-center gap-3 px-6 md:w-[70%] lg:h-full lg:w-[28.25rem] lg:px-0">
      <div className="pb-6">
        <h1 className="mb-2 font-inter text-2xl font-bold text-gray-800 sm:text-3xl">
          Verify your account
        </h1>
        <p className="text-sm font-normal text-gray-500 sm:text-base">
          We’ve sent a verification code to your email. Please enter it below to
          complete your registration.
        </p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col justify-center gap-4"
        >
          {/* email section */}
          <section className="w-full">
            <EmailField
              register={register}
              name="email"
              errors={formState.errors}
              label="Email"
              placeholder="enter your email"
              disabled={false}
            />
          </section>

          {/* button */}
          <section>
            <SubmitButton
              label={
                <span className="flex items-center gap-2">
                  Continue <MoveRight size={18} />
                </span>
              }
              message={error}
              loading={formState.isSubmitting}
              disbale={formState.isValid}
              isPending={isPending}
              text="Already have an account?"
              textLink="Login"
              link="/login"
              isAuth={true}
            />
          </section>
        </form>
      </div>
    </main>
  );
}
