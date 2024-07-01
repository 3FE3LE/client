import React from 'react';
export interface SubmitButtonProps {
  isDisable: boolean;
}
export function SubmitButton({ isDisable }: SubmitButtonProps) {
  return (
    <button className="form__button" type="submit" disabled={isDisable}>
      Submit
    </button>
  );
}
