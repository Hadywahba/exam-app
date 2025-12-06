'use client';
import React from 'react';
import { UseChange } from '../_hooks/use-change-password';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ChangePasswordFormFields,
  changepasswordschema,
} from '@/lib/schemas/change-password.schema';
import SubmitButton from '@/components/features/auth-fields/submit-button';
import PasswordField from '@/components/features/auth-fields/password-field';

export default function ChangePasswordForm() {
  const { changePassword, error, isPending } = UseChange();
  const { register, handleSubmit, formState , reset } =
    useForm<ChangePasswordFormFields>({
      mode: 'all',
      resolver: zodResolver(changepasswordschema),
      defaultValues: {
        password: '',
        oldPassword: '',
        rePassword: '',
      },
    });
  const onsubmit:SubmitHandler<ChangePasswordFormFields> = async(data) => {
    changePassword(data,{
      onSuccess:()=>{
        reset()
      }
    });
  };
  return (
    <div className="h-full bg-white px-6 pt-6">
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
            placeholder="enter your Current Password"
          />
        </section>
        {/* password section */}
        <section className="w-full">
          <PasswordField
            register={register}
            name="password"
            errors={formState.errors}
            label="New Password"
            placeholder="enter your New Password"
          />
        </section>
      {/*confirm  New password section */}
        <section className="w-full">
          <PasswordField
            register={register}
            name="rePassword"
            errors={formState.errors}
            label="Confirm New Password"
            placeholder="enter your New Password"
          />
        </section>

        <section>
          <SubmitButton
            label="Update Password"
            message={error}
            loading={formState.isSubmitting}
            disbale={formState.isValid}
            isPending={isPending}
            isAuth={false}
          />
        </section>
      </form>
    </div>
  );
}
