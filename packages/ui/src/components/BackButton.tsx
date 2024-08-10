import React from 'react';

import { LeftArrow } from '../icons/LeftArrow';

export type BackButtonProps = { handleClick: () => void };

export const BackButton: React.FC<BackButtonProps> = ({ handleClick }) => {
  return (
    <button className="form__button--back" onClick={handleClick}>
      <LeftArrow />
    </button>
  );
};
