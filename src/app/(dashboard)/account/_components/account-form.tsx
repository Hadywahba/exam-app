'use client';
import NameField from '@/app/(auth)/register/_components/name-field';
import { PhoneInput } from '@/app/(auth)/register/_components/phone-field';
import EmailField from '@/components/features/auth-fields/email-field';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { UseAccount } from '../_hooks/use-account';
import { AccountFormFields, accountschema } from '@/lib/schemas/account.schema';
import { UseProfile } from '../_hooks/use-profile';
import Spinner from '@/components/loaders/Spinner';
import AccountButton from './account-button';
import DeleteModal from './delete-modal';

export default function AccountForm() {
  // Mutations
  const { error, isPending, account } = UseAccount();

  // queru
  const { isLoading, profile } = UseProfile();

  // state
  const [openModal, setopenModal] = useState<boolean>(false);

  // Form
  const { register, handleSubmit, control, formState, reset } =
    useForm<AccountFormFields>({
      mode: 'all',
      resolver: zodResolver(accountschema),
      defaultValues: {
        phone: '',
        firstName: '',
        lastName: '',
      },
    });

  // Effect
  useEffect(() => {
    if (profile) {
      reset({
        firstName: profile.user.firstName || '',
        lastName: profile.user.lastName || '',
        phone: profile.user.phone || '',
      });
    }
  }, [profile, reset]);
  const onsubmit: SubmitHandler<AccountFormFields> = async (data) => {
    account(data, {
      onSuccess: () => {
        reset({
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
        });
      },
    });
  };
  return (
    <>
      <main className="h-screen flex-1 bg-white px-6 pt-6">
        {isLoading ? (
          <div className="flex min-h-screen items-center justify-center">
            <Spinner color="text-blue-600" />
          </div>
        ) : (
          <form
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
                disabled={false}
              />
              <NameField
                register={register}
                name="lastName"
                errors={formState.errors}
                label="Last name"
                placeholder="enter your Last name"
                disabled={false}
              />
            </section>
            {/* user name section */}
            <section className="w-full">
              <NameField
                errors={formState.errors}
                label="Username"
                placeholder="enter your name"
                disabled={true}
                value={profile ? profile.user.username : ''}
              />
            </section>
            {/* email section */}
            <section className="w-full">
              <EmailField
                value={profile ? profile.user.email : ''}
                errors={formState.errors}
                label="Email"
                placeholder="enter your email"
                disabled={true}
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

            {/* Buttons */}
            <section>
              <AccountButton
                label="Save Changes"
                label2="Delete My Account"
                message={error}
                loading={formState.isSubmitting}
                disbale={formState.isValid}
                isPending={isPending}
                isprofile={true}
                setopenModal={setopenModal}
              />
            </section>
          </form>
        )}
      </main>
      {/* Delete modal */}
      {openModal && (
        <DeleteModal setopenModal={setopenModal} openModal={openModal} />
      )}
    </>
  );
}
