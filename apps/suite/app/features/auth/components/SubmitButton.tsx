'use client';
import { useFormStatus } from 'react-dom';

export function SubmitButton({ isDisable }: { isDisable: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="form__button"
      type="submit"
      disabled={pending || isDisable}
    >
      Submit
    </button>
  );
}
