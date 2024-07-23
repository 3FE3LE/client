import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card">
      <div className="card__container">{children}</div>
    </div>
  );
};
