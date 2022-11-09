import React from 'react';
import './StudentNavBarStyle.css';
import { NavLink, Outlet } from 'react-router-dom';

const StudentNavBar = () => {
  return (
    <div className='body'>
      <nav className='nav'>
        <NavLink to='/' target={'_blank'}>
          Blockchain based Placement Portal
        </NavLink>
        <ul>
          <li>
            <NavLink to='/student-home/company'>Apply In Company</NavLink>
          </li>
          <li>
            <NavLink to='/student-home/lor'>Apply for Lor</NavLink>
          </li>
          <li>
            <NavLink to='/student-home/account'>Account</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentNavBar;
