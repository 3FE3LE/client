import React from 'react';

export type CardProps = { children: React.ReactNode };

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      <div className="card__container">{children}</div>
    </div>
  );
};
