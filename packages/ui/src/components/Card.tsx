import React from 'react';

export type CardProps = {
  title?: string | JSX.Element;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card__header">
        {typeof title === 'string' ? (
          <span className="card__title">{title}</span>
        ) : (
          title
        )}
      </div>
      <div className="card__content">{children}</div>
    </div>
  );
};
