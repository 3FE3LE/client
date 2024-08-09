import React from 'react';

export type MenuItemProps = {
  label: string;
  onClick: () => void;
};

export const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => (
  <div onClick={onClick} className="menu-item">
    {label}
  </div>
);
