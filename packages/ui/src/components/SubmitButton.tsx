import React from 'react';

export interface SubmitButtonProps {
  isDisable: boolean;
}
export const SubmitButton: React.FC<SubmitButtonProps> = ({ isDisable }) => {
  return (
    <button className="form__button" type="submit" disabled={isDisable}>
      Submit
    </button>
  );
};
