import React from 'react';

import { EyeIconToggle } from './EyeIconToggle';

export type InputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  errors?: string | undefined;
  register: any;
};

export function InputGroup({
  name,
  label,
  type,
  placeholder,
  register,
  errors,
}: InputProps) {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <div className="form__group">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <input
        {...register(name)}
        name={name}
        type={show ? 'text' : type}
        placeholder={placeholder}
        id={name}
      />
      {type === 'password' && (
        <EyeIconToggle onClick={handleClick} show={show} />
      )}
      <span className={`form__error ${errors && ''}`}>{errors}</span>
    </div>
  );
}
