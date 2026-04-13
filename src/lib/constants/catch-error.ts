import { FieldValues, Path, UseFormSetError } from 'react-hook-form';

export const mapServerErrors = <T extends FieldValues>(
  error: ErrorResponss,
  setError: UseFormSetError<T>,
) => {
  error.errors.forEach((err) => {
    const message = err.messages ? err.messages.join('\n') : err.message;

    setError(err.path as Path<T>, {
      type: 'server',
      message,
    });
  });
};
