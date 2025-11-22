'use client';
import React from 'react';
import { Label } from '@/components/ui/label';
import { Inter } from 'next/font/google';
import { PhoneInput } from './phone-field';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import EmailField from '@/components/features/auth-fields/email-field';
import PasswordField from '@/components/features/auth-fields/password-field';
import NameField from './name-field';
import {
  RegisterFormFields,
  registerschema,
} from '@/lib/schemas/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import SubmitButton from '@/components/features/auth-fields/submit-button';
const inter = Inter({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inter',
});
export default function RegisterForm() {
  const { register, handleSubmit, control, formState } =
    useForm<RegisterFormFields>({
      mode: 'all',
      resolver: zodResolver(registerschema),
      defaultValues: {
        username: '',
        phone: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        rePassword: '',
      },
    });
  const onsubmit: SubmitHandler<RegisterFormFields> = (data) => {
    console.log(data);
  };
  return (
    <main>
      <div className="flex flex-col justify-center gap-4 px-4">
        <h1 className={`pb-6 text-3xl font-bold ${inter.className}`}>
          Create Account
        </h1>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col justify-center gap-4"
        >
          {/* name section */}
          <section className="flex w-full flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-start md:justify-center">
            <NameField
              register={register}
              name="firstName"
              errors={formState.errors}
              label="First name"
              placeholder="enter your First name"
            />
            <NameField
              register={register}
              name="lastName"
              errors={formState.errors}
              label="Last name"
              placeholder="enter your Last name"
            />
          </section>
          {/* user name section */}
          <section className="w-full">
            <NameField
              register={register}
              name="username"
              errors={formState.errors}
              label="Username"
              placeholder="enter your name"
            />
          </section>
          {/* email section */}
          <section className="w-full">
            <EmailField
              register={register}
              name="email"
              errors={formState.errors}
              label="Email"
              placeholder="enter your email"
            />
          </section>
          {/* phone section */}
          <section className="w-full">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="picture" className="font-medium text-gray-800">
                Phone
              </Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={() => field.onBlur()}
                  />
                )}
              />
              {formState.errors.phone && (
                <div className="text-xs text-red-500">
                  {formState.errors.phone.message as string}
                </div>
              )}
            </div>
          </section>
          {/* password section */}
          <section className="w-full">
            <PasswordField
              register={register}
              name="password"
              errors={formState.errors}
              label="Password"
              placeholder="enter your Password"
            />
          </section>
          {/*confirm  password section */}
          <section className="w-full">
            <PasswordField
              register={register}
              name="rePassword"
              errors={formState.errors}
              label="Confirm Password"
              placeholder="enter your rePassword"
            />
          </section>
          {/* button */}
          <section className="">
            <SubmitButton
              errors={formState.errors}
              isError={false}
              label=" Create Account"
              isregister={true}
            />
          </section>
        </form>
      </div>
    </main>
  );
}
