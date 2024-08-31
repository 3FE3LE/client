import React, { MouseEvent, ReactNode } from 'react';

export type ActionButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: 'icon' | 'button' | 'full';
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  loading?: boolean;
};

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  children,
  type = 'button',
  size = 'medium',
  variant = 'outline',
  disabled = false,
  loading = false,
}) => (
  <button
    onClick={onClick}
    className={`
      ${disabled && 'button--disabled'}
      ${loading && 'button--loading'}
      button button--${size}
      button--${variant}
      button--${type}
      `}
  >
    {children}
  </button>
);
