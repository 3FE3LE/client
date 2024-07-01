import React from 'react';

export type FormWrapperProps = {
  children: React.ReactNode;
  loading: boolean;
  title: string;
};

export function FormWrapper({ children, title, loading }: FormWrapperProps) {
  return (
    <div className={`form__wrapper ${loading ? 'form__wrapper--loading' : ''}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
