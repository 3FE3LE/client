import React from 'react';

import { Eye } from '../icons/Eye';
import { EyeOff } from '../icons/EyeOff';

export type EyeIconToggleProps = {
  show: boolean;
  onClick: () => void;
};

export const EyeIconToggle: React.FC<EyeIconToggleProps> = ({
  show,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="form__icon-toggle">
      {show ? <Eye /> : <EyeOff />}
    </div>
  );
};
