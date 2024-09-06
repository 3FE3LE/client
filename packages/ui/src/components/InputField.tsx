import React from 'react';

export type InputFieldProps = {
  name: string;
  placeholder?: string;
  value?: string | number;
  handleChange: (value: any) => void;
  handleSubmit?: () => void;
  children?: React.ReactNode;
};
export const InputField: React.FC<InputFieldProps> = ({
  name,
  children,
  placeholder,
  value,
  handleChange,
  handleSubmit,
}) => {
  const handleEnterKey = (key: any) => {
    if (key === 'Enter' && handleSubmit) {
      handleSubmit();
    }
  };

  return (
    <fieldset className="form__group">
      <label className="form__label" htmlFor="name">
        {name}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        type="text"
        id={name}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => handleEnterKey(e.key)}
      />
      {children}
    </fieldset>
  );
};
