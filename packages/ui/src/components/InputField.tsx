import React from 'react';

export type InputFieldProps = {
  name: string;
  placeholder?: string;
  value?: string | number;
  type?: string;
  handleChange: (value: any) => void;
  handleSubmit?: () => void;
  children?: React.ReactNode;
};

export const InputField: React.FC<InputFieldProps> = ({
  name,
  children,
  placeholder,
  value,
  type,
  handleChange,
  handleSubmit,
}) => {
  const handleEnterKey = (key: string) => {
    if (key === 'Enter' && handleSubmit) {
      handleSubmit();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (type === 'number') {
      // Permitimos un string vacío (para poder borrar el input) o solo números
      newValue =
        newValue === '' || /^\d*$/.test(newValue)
          ? newValue
          : (value as string);
    }
    handleChange(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === 'number') {
      // Prevenir la entrada de 'e', '-', '+' en inputs de tipo number
      if (['e', 'E', '-', '+'].includes(e.key)) {
        e.preventDefault();
      }
    }
    handleEnterKey(e.key);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (type === 'number') {
      e.preventDefault();
      const pastedText = e.clipboardData.getData('text');
      const filteredText = pastedText.replace(/[^0-9]/g, '');
      handleChange((value as string) + filteredText);
    }
  };

  return (
    <fieldset className="form__group">
      <label className="form__label" htmlFor={name}>
        {name}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        pattern={type === 'number' ? '[0-9]*' : undefined}
        type={type || 'text'}
        id={name}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onPaste={type === 'number' ? handlePaste : undefined}
      />
      {children}
    </fieldset>
  );
};
