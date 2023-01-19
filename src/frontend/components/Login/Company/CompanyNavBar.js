import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../Styles/CompanyNavBarStyle.css';

const CompanyNavBar = () => {
  return (
    <div className='body'>
      <nav className='nav'>
        <NavLink to='/' target={'_blank'}>
          Blockchain based Placement Portal
        </NavLink>
        <ul>
          {
            // <li>
            //   <NavLink to='/company-home/control-registration'>
            //     Control Registration
            //   </NavLink>
            // </li>
            // <li>
            // <NavLink to='/company-home/students-Applied'>
            //   Students who Applied
            // </NavLink>
            // </li>
          }
          <li>
            <NavLink to='/company-home/account'>Account</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CompanyNavBar;
