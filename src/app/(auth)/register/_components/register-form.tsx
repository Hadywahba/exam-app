'use client';
import React from 'react';
import { Label } from '@/components/ui/label';
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
import { UseRegister } from '../_hooks/use-register';

export default function RegisterForm() {
  // Mutations
  const { error, isPending, registerForm } = UseRegister();

  // Form
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

  // Function it used to submit register data
  const onsubmit: SubmitHandler<RegisterFormFields> = async (data) => {
    const newData = {
      ...data,
      phone: data.phone.replace(/^\+20/, '0'),
    };
    registerForm(newData);
  };
  return (
    <main>
      <div className="flex flex-col gap-4 px-4">
        <h1 className="pb-6 font-inter text-3xl font-bold">Create Account</h1>
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
              {/* Label */}
              <Label htmlFor="picture" className="font-medium text-gray-800">
                Phone
              </Label>

              {/* Controller */}
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

              {/* Error */}
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
          <section>
            <SubmitButton
              label="Create Account"
              message={error}
              loading={formState.isSubmitting}
              disbale={formState.isValid}
              isPending={isPending}
              text=" Already have an account?"
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
