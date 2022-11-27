import React from 'react';
import { Outlet } from 'react-router';
import CompanyNavBar from './CompanyNavBar';

const CompanyHome = () => {
  return (
    <div>
      <CompanyNavBar />
      <Outlet/>
    </div>
  );
};

export default CompanyHome;
