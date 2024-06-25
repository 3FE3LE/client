import React from 'react';

export function SubmitButton({ isDisable }: { isDisable: boolean }) {
  return (
    <button className="form__button" type="submit" disabled={isDisable}>
      Submit
    </button>
  );
}
