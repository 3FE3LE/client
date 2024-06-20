import React from 'react';

export type FormWrapperProps = {
  children: React.ReactNode;
  title: string;
};

export function FormWrapper({ children, title }: FormWrapperProps) {
  return (
    <div className="form__wrapper">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
