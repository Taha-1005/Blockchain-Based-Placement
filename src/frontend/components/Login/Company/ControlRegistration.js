import React from 'react';
import { Placeholder } from 'react-bootstrap';
import swal from 'sweetalert';
import '../../../Styles/ControlRegistrationStyle.css';
import { useLocation } from 'react-router-dom';
import extractErrorCode from '../../ErrorMessage';
import CompanyDetails from '../Student/CompanyDetails';

const ControlRegistration = ({ placement,provider }) => {
  const { state } = useLocation();
  const handleStartRegistration = async (e) => {
    let txn;
    try {
      console.log(state.companyId);
      txn = await placement.startRegistration(state.companyId);
      provider.waitForTransaction(txn.hash).then(async function () {
        const _company = await placement.companies(state.companyId);
        console.log("Status",_company.status);
      });
    } catch (error) {
      let err = JSON.stringify(error);
      err = extractErrorCode(err);
      swal('Oops', err, 'error');
    }
    // let isSuccess = true;
    // const errMsg = 'Some error';
    // if (isSuccess) {
    //   swal('', 'Registration has successfully started', 'success');
    // } else {
    //   swal('Oops!', errMsg, 'error');
    // }
  };

  const handleEndRegistration = (e) => {
    let isSuccess = true;
    const errMsg = 'Some error';
    if (isSuccess) {
      swal('', 'Registration has successfully ended', 'success');
    } else {
      swal('Oops!', errMsg, 'error');
    }
  };

  return (
    <div className='companyHomeBody'>
      <div className='innerBox'>
        <button className='buttonRegister' onClick={handleStartRegistration}>
          Start Registration
        </button>
        <button className='buttonRegister' onClick={handleEndRegistration}>
          End Registration
        </button>
      </div>
    </div>
  );
};

export default ControlRegistration;
