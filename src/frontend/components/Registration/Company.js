import React, { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';
import RegistarationFormInput from './RegistarationFormInput';
import './RegistrationFormStyle.css';
import extractErrorCode from '../ErrorMessage.js';


const Company = ({ web3Handler, account, placement, provider }) => {
  const navigate = useNavigate();
  const [company, setCompany] = useState({
    name: '',
    description: '',
    location: '',
    ctc: '',
    category: '',
    maxBackLogs: '',
    minPPI: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Company Name',
      errorMessage: 'Enter valid Compnay Name',
      label: 'Company Name',
      pattern: '[a-zA-Z., ]+',
      required: true,
    },
    {
      id: 'description',
      name: 'description',
      type: 'text',
      placeholder: 'Description of the job post',
      errorMessage:'Enter valid Description',
      pattern: '[a-zA-Z ]+',
      label: 'Description',
      required: true,
    },
    {
      id: 'location',
      name: 'location',
      type: 'text',
      placeholder: 'Location of the job',
      errorMessage: 'Enter valid Location',
      pattern: '[a-zA-Z, ]+',
      label: 'Location',
      required: true,
    },
    {
      id: 'ctc',
      name: 'ctc',
      type: 'number',
      step: '0.01',
      min: '0',
      max: '100',
      placeholder: 'CTC',
      errorMessage: 'Enter valid CTC in lpa',
      pattern: '[0-9]+',
      label: 'CTC',
      required: true,
    },
    {
      id: 'category',
      name: 'category',
      type: 'number',
      step: '1',
      min: '1',
      max: '4',
      placeholder: 'Enter category 1->A+ or 2-> A or 3->B or 4->C',
      errorMessage: 'Enter between 1 to 4',
      // pattern: '/[1-4]$',
      label: 'Category',
      required: true,
    },
    {
      id: 'maxBackLogs',
      name: 'maxBackLogs',
      type: 'number',
      step: '1',
      min: '0',
      max: '8',
      placeholder: 'Enter the maximum number of allowed backlogs',
      errorMessage: 'Enter valid backlogs',
      label: 'Backlogs',
      required: true,
    }, {
      id: 'minPPI',
      name: 'minPPI',
      type: 'number',
      step: '0.1',
      min: '0',
      max: '10',
      placeholder: 'Min PPI criteria for shortlisting',
      errorMessage: 'Enter valid PPI',
      label: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Company Name: ", company.name[0]);
    console.log("Company description : ", company.description[0], typeof (company.description[0]));
    console.log("Company CTC: ", company.ctc[0], typeof (company.ctc[0]));
    console.log("Company category : ", company.category[0], typeof (company.category[0]));
    console.log("Company location : ", company.location[0], typeof (company.location[0]));
    console.log("Company maxBackLogs: ", parseInt(company.maxBackLogs[0],10), typeof(parseInt(company.maxBackLogs[0],10)));
    console.log("Company minPPI: ", company.minPPI[0], typeof (company.minPPI[0]));
    if (account != null) {
      let txn;
      try {
        txn = await placement.registerCompany(
          company.name[0],
          company.description[0],
          company.password[0],
          parseInt(company.category[0], 10),
          company.ctc[0],
          company.location[0],
          parseInt(company.maxBackLogs[0], 10),
          company.minPPI[0]
        );
        let cid;
        // wait for transaction

        console.log(txn.hash);
        provider
          .waitForTransaction(txn.hash)
          .then(async function (txn) {
            console.log('Transaction Mined: ' + txn);
            cid = await placement.totalCompanies();
            cid = parseInt(cid.toHexString(), 16);
            navigate('/login');
            swal(
              'Hurray!!',
              'You are registered successfully ...\n Kindly remeber your id: ' +
              cid,
              'success'
            );
            let _company = await placement.companies(cid);
            console.log("Company registered ", _company.name);
            console.log("Company wallet ", _company.company);
            console.log("Company description  ", _company.description);
            console.log("Company  ", parseInt(_company.category.toHexString(), 16));
            console.log(_company.ctc, _company.location);

           });
      } catch (err) {
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
        <button className='submitButton' type='button' onClick={web3Handler}>
          Connect the account
        </button>
        <button className='submitButton'>Register as a Company</button>
      </form>
    </div>
  );
};

export default Company;
