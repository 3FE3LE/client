import { Eye, EyeOff } from 'lucide-react';
import React from 'react';

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
