import React, { MouseEvent, ReactNode } from 'react';

export type ActionButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  children,
}) => (
  <button onClick={onClick} className="btn">
    {children}
  </button>
);
