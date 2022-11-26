import React, { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';

import extractErrorCode from '../ErrorMessage.js';
import RegistarationFormInput from './RegistarationFormInput';
import './RegistrationFormStyle.css';

const Faculty = ({ web3Handler, account, placement, provider }) => {
  const navigate = useNavigate();

  const [faculty, setFaculty] = useState({
    fullName: '',
    branch: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 'fullName',
      name: 'fullName',
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
      pattern: faculty.password,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (account != null) {
      let txn, fid;
      // let backlog = parseInt(student.backlogs.toString(), 10);
      // console.log(backlog, typeof (backlog));
      try {
        txn = await placement.registerFaculty(
          faculty.fullName.toString(),
          faculty.branch.toString(),
          faculty.password.toString(),
        );
        // wait for transaction
        console.log(txn.hash);
        provider
          .waitForTransaction(txn.hash)
          .then(async function (txn) {
            console.log('Transaction Mined: ' + txn.hash);
            console.log(txn);
            fid = await placement.totalFaculties();
            fid = parseInt(fid.toHexString(), 16);
            navigate('/login');
            swal(
              'Hurray!!',
              'You are registered successfully!  \n Kindly remeber your id: ' +
              fid,
              'success'
            );
            console.log("Total faculties ", fid);

            let _faculty = await placement.faculties(fid);
            console.log(_faculty, typeof fid);
            console.log('Address', _faculty.faculty, typeof fid);
            console.log("Name ", _faculty.name);
            console.log("Password ", _faculty.password);
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
    setFaculty({ ...faculty, [e.target.name]: [e.target.value] });
  };

  return (
    <div className='divForm'>
      <form onSubmit={handleSubmit} className='registrationForm'>
        <h1 className='formHeader'>Faculty Registration</h1>
        {inputs.map((input) => (
          <RegistarationFormInput
            key={input.id}
            {...input}
            value={faculty[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='submitButton' type='button' onClick={web3Handler}>
          Connect the account
        </button>
        <button className='submitButton'>Register as a Faculty</button>
      </form>
    </div>
  );
};

export default Faculty;
