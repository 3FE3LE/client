import React from 'react';

import { LeftArrow } from '../icons/LeftArrow';

export type BackButtonProps = { handleClick: () => void };

export const BackButton = ({ handleClick }: BackButtonProps) => {
  return (
    <div className="form__button--back" onClick={handleClick}>
      <LeftArrow />
    </div>
  );
};
