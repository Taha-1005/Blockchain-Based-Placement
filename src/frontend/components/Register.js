import { useState } from 'react';
import {
  useNavigate,
  Outlet,
} from 'react-router-dom';
import RegisterNavBar from './RegisterNavBar';
import Student from './Student';

const Register = () => {
  let navigate = useNavigate();
  let [registered, setRegistered] = useState(true);

  const goToLoginPage = () => {
    console.log('Already Registered User');
    navigate('/login');
  };

  const goToStudentAndSetRegisteredAsFalse = () => {
    setRegistered(false)
    navigate('/register/student', {registered: true});
  };

  return (
    <div>
      <h1>Register User/ Company/ Faculty</h1>
      {registered ? (
        <div>
          Already Registered?
          <button onClick={(event) => goToLoginPage(event)}>Yes</button>
          <button onClick={() => goToStudentAndSetRegisteredAsFalse()}>No</button>
        </div>
      ) : (
        <RegisterNavBar />
      )}
      <Outlet />
    </div>
  );
};
export default Register;
