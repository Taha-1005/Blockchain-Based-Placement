import React, { useState } from 'react';
import RegistarationFormInput from './RegistarationFormInput';
import './RegistrationFormStyle.css';

const Faculty = () => {
  const [faculty, setFaculty] = useState({
    fullName: '',
    branch: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 'fullname',
      name: 'fullname',
      type: 'text',
      placeholder: 'Full Name',
      errorMessage: 'Name should only consist of letters and only three names.',
      label: 'Full Name',
      pattern: '[A-Za-z]+ [A-Za-z]+\\s{0,1}[A-Za-z]*',
      required: true,
    },
    {
      id: 'branch',
      name: 'branch',
      type: 'text',
      placeholder: 'Branch',
      errorMessage: 'Invalid branch name.',
      label: 'Branch',
      pattern: '[A-Za-z]{2,3}',
      required: true,
    },
    {
      id: 'rollNumber',
      name: 'rollNumber',
      type: 'text',
      placeholder: 'Roll Number',
      errorMessage: 'Invalid roll number.',
      label: 'Roll Number',
      pattern: '[0-9]{2}[A-Za-z]{2,3}[0-9]{3}',
      required: true,
    },
    {
      id: 'password',
      name: 'password',
      type: 'text',
      placeholder: 'Paswsword',
      errorMessage:
        'The password should be 8 to 20 characters and should have atleast 1 number, 1 special character, 1 alphabet',
      pattern: `^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd][A-Za-zd!@#$%^&*()_+]{8,20}$`,
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
      pattern: faculty.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: [e.target.value] });
  };

  return (
    <div className='divForm'>
      <form onSubmit={handleSubmit} className='registrationForm'>
        <h1 className='formHeader'>Student Registration</h1>
        {inputs.map((input) => (
          <RegistarationFormInput
            key={input.id}
            {...input}
            value={faculty[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='submitButton'>Register as a student</button>
      </form>
    </div>
  );
};

export default Faculty;
