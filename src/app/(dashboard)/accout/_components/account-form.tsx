'use client';
import NameField from '@/app/(auth)/register/_components/name-field';
import { PhoneInput } from '@/app/(auth)/register/_components/phone-field';
import EmailField from '@/components/features/auth-fields/email-field';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { UseAccount } from '../_hooks/use-account';
import { AccountFormFields, accountschema } from '@/lib/schemas/account.schema';
import SubmitButton from '@/components/features/auth-fields/submit-button';
import { UseProfile } from '../_hooks/use-profile';
import Spinner from '@/components/loaders/Spinner';

export default function AccountForm() {
  // Mutations
  const { error, isPending, account } = UseAccount();

  // queru
  const { isLoading , profile} = UseProfile();

  const { register, handleSubmit, control, formState, reset } =
    useForm<AccountFormFields>({
      mode: 'all',
      resolver: zodResolver(accountschema),
      defaultValues: {
        username: '',
        phone: '',
        email: '',
        firstName: '',
        lastName: '',
      },
    });
  // state
  useEffect(() => {
    if (profile) {
      reset({
        email: profile.user.email || '',
        firstName:profile.user.firstName || '',
        lastName: profile.user.lastName || '',
        username: profile.user.username || '',
        phone: profile.user.phone || '',
      });
    }
  }, [profile, reset]);
  const onsubmit: SubmitHandler<AccountFormFields> = async (data) => {
    account(data, {
      onSuccess: () => {
        reset({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          phone: data.phone,
        });
     
      },
    });
  };
  return (
    <main className="h-full bg-white px-6 pt-6">
        {isLoading ? (<div className='flex justify-center items-center min-h-screen '>
        <Spinner color='text-blue-600'/>
        </div>) :(<form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col justify-center gap-4"
      >
        {/* name section */}
        <section className="flex flex-col items-center justify-center gap-4 md:flex md:flex-row md:items-start md:justify-center">
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

        <section>
          <SubmitButton
            label="Save Changes"
            label2='Delete My Account'
            message={error}
            loading={formState.isSubmitting}
            disbale={formState.isValid}
            isPending={isPending}
            isAuth={false}
            isprofile={true}
          />
        </section>
      </form>)}
      
    </main>
  );
}
