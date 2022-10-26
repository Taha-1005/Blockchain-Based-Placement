import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import RegisterNavBar from './RegisterNavBar';

const Register = () => {
  let navigate = useNavigate();
  let [registered, setRegistered] = useState(true);

  const goToLoginPage = () => {
    console.log('Already Registered User');
    navigate('/login');
  };

  const goToStudentAndSetRegisteredAsFalse = () => {
    setRegistered(false);
    navigate('/register/student', { registered: true });
  };

  return (
    <div>
      <RegisterNavBar />
      <Outlet />
    </div>
  );
};
export default Register;
