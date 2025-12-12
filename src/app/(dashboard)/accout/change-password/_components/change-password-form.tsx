'use client';
import React from 'react';
import { UseChange } from '../_hooks/use-change-password';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ChangePasswordFormFields,
  changepasswordschema,
} from '@/lib/schemas/change-password.schema';
import PasswordField from '@/components/features/auth-fields/password-field';
import AccountButton from '../../_components/account-button';

export default function ChangePasswordForm() {
  const { changePassword, error, isPending } = UseChange();
  const { register, handleSubmit, formState, reset } =
    useForm<ChangePasswordFormFields>({
      mode: 'all',
      resolver: zodResolver(changepasswordschema),
      defaultValues: {
        password: '',
        oldPassword: '',
        rePassword: '',
      },
    });
  const onsubmit: SubmitHandler<ChangePasswordFormFields> = async (data) => {
    changePassword(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <div className=" bg-white h-screen flex-1 px-6 py-6">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col justify-center gap-4"
      >
        {/* oldPassword section */}
        <section className="w-full">
          <PasswordField
            register={register}
            name="oldPassword"
            errors={formState.errors}
            label="Current Password"
            placeholder="enter Password"
          />
        </section>
        {/* password section */}
        <section className="w-full">
          <PasswordField
            register={register}
            name="password"
            errors={formState.errors}
            label="New Password"
            placeholder="enter New Password"
          />
        </section>
        {/*confirm  New password section */}
        <section className="w-full">
          <PasswordField
            register={register}
            name="rePassword"
            errors={formState.errors}
            label="Confirm New Password"
            placeholder="enter New Password"
          />
        </section>
        

        <section>
          <AccountButton
            label="Update Password"
            message={error}
            loading={formState.isSubmitting}
            disbale={formState.isValid}
            isPending={isPending}
            isprofile={false}
            
          />
        </section>
      </form>
    </div>
  );
}
