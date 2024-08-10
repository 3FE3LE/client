import React from 'react';

export type FormWrapperProps = {
  children: React.ReactNode;
  loading: boolean;
  title: string;
};

export const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  title,
  loading,
}) => {
  return (
    <div className={`form__wrapper ${loading && 'form__wrapper--loading'}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
