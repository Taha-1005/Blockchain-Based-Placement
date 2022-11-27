import React from 'react';
import swal from 'sweetalert';
import '../../../Styles/ControlRegistrationStyle.css';

const ControlRegistration = () => {
  const handleStartRegistration = (e) => {
    let isSuccess = true;
    const errMsg = 'Some error';
    if (isSuccess) {
      swal('', 'Registration has successfully started', 'success');
    } else {
      swal('Oops!', errMsg, 'error');
    }
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
