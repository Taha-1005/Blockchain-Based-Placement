import React, { useState } from 'react';
import RegistarationFormInput from './RegistarationFormInput';
import './RegistrationFormStyle.css';
const Company = () => {
  const [company, setCompany] = useState({
    name: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Company Name',
      errorMessage: '',
      label: 'Company Name',
      pattern: '*',
      required: true,
    },
    {
      id: 'password',
      name: 'password',
      type: 'password',
      placeholder: 'Paswsword',
      errorMessage:
        'The password should be 8 to 20 characters and should have atleast 1 number, 1 special character, 1 alphabet',
      pattern: '^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[@$#%]).{8,20}$',
      label: 'Paswsword',
      required: true,
    },
    {
      id: 'confirmPassword',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: 'Passwords should match',
      label: 'Confirm Password',
      pattern: company.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setCompany({ ...company, [e.target.name]: [e.target.value] });
  };

  return (
    <div className='divForm'>
      <form onSubmit={handleSubmit} className='registrationForm'>
        <h1 className='formHeader'>Company Registration</h1>
        {inputs.map((input) => (
          <RegistarationFormInput
            key={input.id}
            {...input}
            value={company[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='submitButton'>Register as a Company</button>
      </form>
    </div>
  );
};

export default Company;
