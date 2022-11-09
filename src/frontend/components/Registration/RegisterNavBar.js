import React from 'react';
import './RegistrationNavBarStyle.css';
import { NavLink } from 'react-router-dom';

const RegisterNavBar = () => {
  return (
    <div className='body'>
      <nav className='nav'>
        <NavLink to='/' target={'_blank'}>
          Blockchain based Placement Portal
        </NavLink>
        <ul>
          <li>
            <NavLink to='/register/student'>Student Registration</NavLink>
          </li>
          <li>
            <NavLink to='/register/company'>Company Registration</NavLink>
          </li>
          <li>
            <NavLink to='/register/faculty'>Faculty Registration</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RegisterNavBar;
