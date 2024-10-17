import React from 'react';

import { OptionType } from '../../types';

export type SelectFieldProps = {
  options: OptionType[];
  name: string;
  value: string | number;
  handleChange: (value: any) => void;
};

export const SelectField: React.FC<SelectFieldProps> = ({
  options,
  name,
  value,
  handleChange,
}) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(e.target.value);
  };

  return (
    <fieldset className="form__group">
      <label className="form__label" htmlFor={name}>
        {name}
      </label>
      <select name={name} defaultValue={value || ''} onChange={handleSelect}>
        <option value="" disabled>
          Select a currency
        </option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
      </select>
    </fieldset>
  );
};
