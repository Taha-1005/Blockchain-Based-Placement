import React from 'react';
import './Registration_Style.css';
import { NavLink } from 'react-router-dom';

const RegisterNavBar = () => {
  let activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <div className='body'>
      <nav className='nav'>
        <NavLink to='/' target={'_blank'}>
          Blockchain based Placement Portal
        </NavLink>
        <ul>
          <li>
            <NavLink exact to='/register/student'>Student Registration</NavLink>
          </li>
          <li > 
            <NavLink exact to='/register/company'>Company Registration</NavLink>
          </li>
          <li>
            <NavLink exact to='/register/faculty'>Faculty Registration</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RegisterNavBar;
