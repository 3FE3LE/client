import React from 'react';
export type InputProps = {
  name: string;
  label?: string;
  errors?: string | undefined;
  children: React.ReactNode;
};

export function InputGroup({ name, label, errors, children }: InputProps) {
  return (
    <div className="form__group">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      {children}
      {errors && <span className="form__error">{errors}</span>}
    </div>
  );
}
