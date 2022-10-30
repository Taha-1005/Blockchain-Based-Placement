import React, { useState } from 'react';
import './RegistrationFormInputStyle.css';

const RegistarationFormInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, onChange, id, errorMessage, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocus(true);
  };

  return (
    <div className='formInput'>
      <label className='inputLabel'>{label}</label>
      <input
        className='input'
        id={id}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocus(true)}
        focus={focus.toString()}
      />
      <span className='errorMessage'>{errorMessage}</span>
    </div>
  );
};

export default RegistarationFormInput;
