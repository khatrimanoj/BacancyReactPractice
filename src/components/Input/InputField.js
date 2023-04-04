import React, { useState } from "react";

const InputField = ({
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  errorMessage,
  children,
  label,
  onFocus,
  ...props
}) => {
  const InputClass = "form-control" + (className ? ` ${className}` : "");
  const InputType = type ? `${type}` : "text";

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={InputType}
        className={InputClass}
        placeholder={placeholder}
        name={name}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={onFocus}
        onChange={onChange}
        {...props}
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
