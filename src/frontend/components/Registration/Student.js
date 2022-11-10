import React, { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';

import extractErrorCode from '../ErrorMessage.js';
import RegistarationFormInput from './RegistarationFormInput';
import './RegistrationFormStyle.css';


const Student = ({ web3Handler, account, placement, provider }) => {
  const navigate = useNavigate();

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
      errorMessage: 'Name should only consist of letters and only three names.',
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
      pattern: student.password,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (account != null) {
      let txn;
      // let backlog = parseInt(student.backlogs.toString(), 10);
      // console.log(backlog, typeof (backlog));
      let _ppi=[student.ppi.toString()];
      console.log(_ppi, typeof (_ppi));
      let _spi = [student.spi.toString()];
      console.log(_spi, typeof (_spi));
      try {
        txn = await placement.registerStudent(
          student.rollNumber.toString(),
          student.fullName.toString(),
          student.password.toString(),
          // student.ppi.toString(),
          _ppi,
          _spi,
          // student.spi.toString(),
          //  _percentage10,
          student.twelthPercentage.toString(),
          parseInt(student.backlogs.toString(),10)
        );
        let cid;
        // wait for transaction

        console.log(txn.hash);
        provider
          .waitForTransaction(txn.hash)
          .then(async function (txn) {
            console.log('Transaction Mined: ' + txn.hash);
            console.log(txn);
            cid = await placement.totalStudents();
            cid = parseInt(cid.toHexString(), 16);
            swal(
              'Hurray!!',
              'You are registered successfully!',
              'success'
            );
            navigate('/login');
            let tot = await placement.totalStudents();
            console.log("Total studs ", tot);

            let address = await placement.students(student.rollNumber.toString());
            console.log(address, typeof cid);
            console.log('Address', address.student, typeof cid);
          });
      } catch (err) {
        // let x = err.data.message.toString();
        // console.log("Json", JSON.stringify(err), typeof (JSON.stringify(err)));
        let x = JSON.stringify(err);
        console.log('Error: ', err, "to string", x);
        const errMsg = extractErrorCode(x);
        console.log(errMsg);
        console.log('Error in registering: ', errMsg);
        swal('Oops!', errMsg, 'error');
      }
    } else {
      swal(
        'Oops',
        'Please connect your metamask account before registering.',
        'error'
      );
    }
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
        <button className='submitButton' type='button' onClick={web3Handler}>
          Connect the account
        </button>
        <button className='submitButton'>Register as a student</button>
      </form>
    </div>
  );
};

export default Student;
