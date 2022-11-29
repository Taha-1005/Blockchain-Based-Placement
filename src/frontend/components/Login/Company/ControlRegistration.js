import React from 'react';
import { Placeholder } from 'react-bootstrap';
import swal from 'sweetalert';
import '../../../Styles/ControlRegistrationStyle.css';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import extractErrorCode from '../../ErrorMessage';
import CompanyDetails from '../Student/CompanyDetails';
import { useState, useEffect } from 'react';

const ControlRegistration = ({ placement,provider }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const handleStartRegistration = async (e) => {
    const companyId = state.companyId;
    console.log("Placement ", placement);
    // if (JSON.stringify(placement).length==2) {
    //   swal('Oops', "Login again", 'error');
    //   navigate("/login");
    //   return;
    // }

    let txn;

    try {
      console.log(companyId);
      txn = await placement.startRegistration(companyId);
      console.log("Started");
      provider.waitForTransaction(txn.hash).then(async function () {
        const _company = await placement.companies(companyId);
        console.log("Status", _company.status);
        swal('', 'Registration has successfully started', 'success');
        navigate('/company-home/students-applied', {
          state: {
            companyId: companyId
          }
        })
      });
    } catch (error) {
      let err = JSON.stringify(error);
      err = extractErrorCode(err);
      swal('Oops', err, 'error');
    }
  };

  const handleEndRegistration = async (e) => {
    console.log("Placement ", placement);
    if (!placement.interface) {
      swal('Oops', "Login again", 'error');
      navigate("/login");
      return;
    }
    const companyId = state.companyId;

    let txn;

    try {
      console.log(companyId);
      txn = await placement.endRegistration(companyId);
      console.log("Ended");
      provider.waitForTransaction(txn.hash).then(async function () {
        const _company = await placement.companies(companyId);
        console.log("Status", _company.status);
        swal('', 'Registration has successfully ended', 'success');
        navigate('/company-home/students-applied', {
          state: {
            companyId: companyId
          }
        })
      });
    } catch (error) {
      let err = JSON.stringify(error);
      err = extractErrorCode(err);
      swal('Oops', err, 'error');
    }
  };
  const handleEndInterview = async (e) => {
    console.log("Placement who applied: ", placement);
    if (!placement.interface) {
      swal('Oops', "Login again", 'error');
      navigate("/login");
      return;
    }
    const companyId = state.companyId;
    let txn;
    try {
      txn = await placement.endCompanyProcess(companyId);
      console.log(txn.hash);
      provider
        .waitForTransaction(txn.hash)
        .then(async function (txn) {
          console.log('Transaction Mined: ' + txn);
          swal(
            'Hurray!!',
            'Interviews Ended!',
            'success'
          );

        });
    } catch(err) {
      let errMsg = JSON.stringify(err);
      errMsg = extractErrorCode(errMsg);
      console.log('Error in registering: ', errMsg);
      swal('Oops!', errMsg, 'error');
    }
    navigate('/company-home/students-applied', {
      state: {
        companyId: companyId
      }
    })

  };
  const handleStudentWhoApplied = async (e) => {
    console.log("Placement who applied: ", placement);
    if (!placement.interface) {
      swal('Oops', "Login again", 'error');
      navigate("/login");
      return;
    }
    const companyId = state.companyId;


    
    navigate('/company-home/students-applied', {
      state: {
        companyId: companyId
      }
    })
     
  };
  
  
  useEffect(() => {
    console.log(state);
    if (!state) {
      navigate('/login');
      swal('Oops!', "Session expired", 'warning');
      return;
    } 
  }, []);
  return (
    <div className='companyHomeBody'>
      <div className='innerBox'>
        <button className='buttonRegister' onClick={handleStartRegistration}>
          Start Registration
        </button>
        <button className='buttonRegister' onClick={handleEndRegistration}>
          End Registration
        </button>
        <button className='buttonRegister' onClick={handleEndInterview}>
          Interviews Ended
        </button>
        <button className='buttonRegister' onClick={handleStudentWhoApplied}>
          See Applied Students
        </button>
       
      </div>
    </div>
  );
};

export default ControlRegistration;
