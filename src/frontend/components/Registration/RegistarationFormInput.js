import React from 'react';
import './RegistrationFormInputStyle.css';

const RegistarationFormInput = (props) => {
  const { label, onChange, id, errorMessage, ...inputProps } = props;

  //   console.log(inputProps);
  return (
    <div className='formInput'>
      <label className='inputLabel'>{label}</label>
      <input className='input' id={id} {...inputProps} onChange={onChange} />
      <span className='errorMessage'>{errorMessage}</span>
    </div>
  );
};

export default RegistarationFormInput;
