import React from 'react';
import { Placeholder } from 'react-bootstrap';
import swal from 'sweetalert';
import '../../../Styles/ControlRegistrationStyle.css';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import extractErrorCode from '../../ErrorMessage';
import CompanyDetails from '../Student/CompanyDetails';

const ControlRegistration = ({ placement,provider }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const companyId = state.companyId;
  const handleStartRegistration = async (e) => {
    console.log("Placement ", placement);
    if (!placement) {
      swal('Oops', "Login again", 'error');
      navigate("/login");
      return;
    }

    let txn;

    try {
      console.log(companyId);
      txn = await placement.startRegistration(companyId);
      console.log("Started");
      provider.waitForTransaction(txn.hash).then(async function () {
        const _company = await placement.companies(companyId);
        console.log("Status", _company.status);
        swal('', 'Registration has successfully started', 'success');
      });
    } catch (error) {
      let err = JSON.stringify(error);
      err = extractErrorCode(err);
      swal('Oops', err, 'error');
    }
  };

  const handleEndRegistration = async (e) => {
    console.log("Placement ", placement);
    if (!placement) {
      swal('Oops', "Login again", 'error');
      navigate("/login");
      return;
    }

    let txn;

    try {
      console.log(companyId);
      txn = await placement.endRegistration(companyId);
      console.log("Ended");
      provider.waitForTransaction(txn.hash).then(async function () {
        const _company = await placement.companies(companyId);
        console.log("Status", _company.status);
        swal('', 'Registration has successfully ended', 'success');
      });
    } catch (error) {
      let err = JSON.stringify(error);
      err = extractErrorCode(err);
      swal('Oops', err, 'error');
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
