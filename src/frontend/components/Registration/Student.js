import React, { useState } from 'react';
import RegistarationFormInput from './RegistarationFormInput';
import './RegistrationFormStyle.css';

const Student = () => {
  const [student, setStudent] = useState({
    rollNumber: '',
    fullName: '',
    spi: '',
    ppi: '',
    tenthPercentage: '',
    twelthPercentage: '',
    backlogs: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
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
      id: 'fullNmae',
      name: 'fullNmae',
      type: 'text',
      placeholder: 'Full Name',
      errorMessage: 'Name should only consist of letters.',
      label: 'Full Name',
      pattern: '[A-Za-z]+ [A-Za-z]+\\s{0,1}[A-Za-z]*',
      required: true,
    },
    {
      id: 'ppi',
      name: 'ppi',
      type: 'number',
      errorMessage: 'PPI should be a number only',
      step: '0.1',
      min: '0',
      max: '10',
      placeholder: 'PPI',
      label: 'PPI',
      required: true,
    },
    {
      id: 'spi',
      name: 'spi',
      type: 'number',
      step: '0.1',
      min: '0',
      max: '10',
      placeholder: 'SPI',
      errorMessage: 'SPI should be a number only',
      label: 'SPI',
      required: true,
    },
    {
      id: 'tenthPercentage',
      name: 'tenthPercentage',
      type: 'number',
      step: '0.1',
      min: '0',
      max: '100',
      placeholder: 'Tenth Percentage',
      errorMessage: 'Percentage should be a number only',
      label: 'Tenth Percentage',
      required: true,
    },
    {
      id: 'twelthPercentage',
      name: 'twelthPercentage',
      type: 'number',
      step: '0.1',
      min: '0',
      max: '100',
      placeholder: 'Twelth Percentage',
      errorMessage: 'Percentage should be a number only',
      label: 'Twelth Percentage',
      required: true,
    },
    {
      id: 'backlogs',
      name: 'backlogs',
      type: 'number',
      placeholder: 'Backlogs',
      errorMessage: 'Backlog should be an integer only',
      label: 'Backlogs',
      required: true,
    },
    {
      id: 'password',
      name: 'password',
      type: 'text',
      placeholder: 'Paswsword',
      errorMessage:
        'The password should be 8 to 20 characters and should have atleast 1 number, 1 special character, 1 alphabet',
      pattern:
        `^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd][A-Za-zd!@#$%^&*()_+]{8,20}$`,
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
      pattern: student.password,
      required: true,
    },
  ];

  var pot = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: [e.target.value] });
  };

  console.log(student);

  return (
    <div className='divForm'>
      <form onSubmit={handleSubmit} className='registrationForm'>
        <h1 className='formHeader'>Student Registration</h1>
        {inputs.map((input) => (
          <RegistarationFormInput
            key={input.id}
            {...input}
            value={student[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='submitButton'>Register as a student</button>
      </form>
    </div>
  );
};

export default Student;
