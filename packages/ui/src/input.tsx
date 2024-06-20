import React from 'react';

export type InputProps = {
  name: string;
  type?: string;
};

export function Input({ name, type }: InputProps) {
  return (
    <div className="form__group">
      <label className="form__label" htmlFor="">
        {name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder="placeholder"
        className="form__input"
      />
    </div>
  );
}
