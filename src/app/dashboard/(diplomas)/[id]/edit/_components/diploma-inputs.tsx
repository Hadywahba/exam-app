'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import TitleField from './title-field';
import {
  EditFormFields,
  editschema,
} from '@/lib/schemas/admin-dashboard/edit-diploma.schema';
import DescriptionField from './description-field';
import DiplomaButtonsActions from './diploma-buttons-actions';
import { EditDiplomas } from '../../_hooks/edit-diploma';
import { UseUpload } from '@/hooks/use-upload';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

export default function DiplomaInputs({
  diplomaId,
  DiplomaData,
}: {
  diplomaId: string;
  DiplomaData: DiplomaResponse;
}) {
  // Mutation
  const { EditDiplomass, EditErrorDiplom, EditIsPendingDiplom } =
    EditDiplomas(diplomaId);

  const { UploadImages, isPending: isUploading } = UseUpload();

  // Form
  const { register, handleSubmit, formState, setValue } =
    useForm<EditFormFields>({
      mode: 'all',
      resolver: zodResolver(editschema),
      defaultValues: {
        title: DiplomaData?.diploma?.title,
        description: DiplomaData?.diploma?.description,
        image: DiplomaData?.diploma?.image ?? null,
      },
    });

  // ref
  const fileRef = useRef<HTMLInputElement>(null);

  // state — starts with the existing diploma image if available
  const [preview, setPreview] = useState<string | null>(
    DiplomaData?.diploma?.image ?? null,
  );

  // Handle file selection → upload → store URL in form
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Optimistic local preview while uploading
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);

    UploadImages(file, {
      onSuccess: (res) => {
        const uploadedUrl = res.payload?.url;
        if (!uploadedUrl) return;

        // Store the real URL in the form so it's included in the PUT request
        setValue('image', uploadedUrl, { shouldDirty: true });
        setPreview(uploadedUrl);
      },
      onError: () => {
        // Revert preview on failure
        setPreview(DiplomaData?.diploma?.image ?? null);
        if (fileRef.current) fileRef.current.value = '';
      },
    });
  };

  const onsubmit: SubmitHandler<EditFormFields> = (data) => {
    EditDiplomass(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="mx-6">
      {/* Buttons */}
      <section className="mb-6 bg-white md:pr-6">
        <DiplomaButtonsActions
          isPending={EditIsPendingDiplom}
          error={EditErrorDiplom}
        />
      </section>

      <h1 className="bg-blue-700 p-3 text-base font-semibold text-white">
        Diploma Information
      </h1>

      <footer className="flex flex-col gap-4 bg-white">
        {/* Image upload section */}
        <section className="flex flex-col gap-3 p-4">
          <Label className="font-medium text-gray-800"> Image</Label>

          {/* Preview */}
          {preview && (
            <div className="relative h-48 w-full overflow-hidden rounded-md border border-gray-200">
              <Image
                src={preview}
                alt="Diploma preview"
               width={300}
                height={300}
                className="rounded-md object-cover"
                unoptimized={preview.startsWith('blob:')}
              />
              {/* Upload spinner overlay */}
              {isUploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Loader2 className="h-8 w-8 animate-spin text-white" />
                </div>
              )}
            </div>
          )}

          <Input
            ref={fileRef}
            type="file"
            accept="image/*"
            disabled={isUploading || EditIsPendingDiplom}
            onChange={handleFileChange}
            className="cursor-pointer"
          />
        </section>

        {/* Title section */}
        <section className="w-full p-4">
          <TitleField
            register={register}
            name="title"
            errors={formState.errors}
            label="Title"
            disabled={EditIsPendingDiplom}
          />
        </section>

        {/* Description section */}
        <section className="w-full px-4 pb-4">
          <DescriptionField
            register={register}
            name="description"
            errors={formState.errors}
            label="description"
            disabled={EditIsPendingDiplom}
          />
        </section>
      </footer>
    </form>
  );
}
