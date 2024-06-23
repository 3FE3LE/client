import React from 'react';
export type InputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  errors: string | undefined;
  register: any;
};

export function Input({
  name,
  type,
  placeholder,
  label,
  errors,
  register,
}: InputProps) {
  return (
    <div className="form__group">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      {errors && <span className="form__error">{errors}</span>}
      <input
        required
        {...register(name)}
        type={type || 'text'}
        id={name}
        name={name}
        placeholder={placeholder || label}
        className="form__input"
      />
    </div>
  );
}
