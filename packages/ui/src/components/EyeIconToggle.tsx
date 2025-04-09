import { Eye, EyeOff } from 'lucide-react';
import React from 'react';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type EyeIconToggleProps = {
  show: boolean;
  onClick: () => void;
};

export const EyeIconToggle: React.FC<EyeIconToggleProps> = ({
  show,
  onClick,
}) => {
  const EyeIcon = Eye as IconComponent;
  const EyeOffIcon = EyeOff as IconComponent;

  return (
    <div onClick={onClick} className="form__icon-toggle">
      {show ? <EyeIcon /> : <EyeOffIcon />}
    </div>
  );
};
