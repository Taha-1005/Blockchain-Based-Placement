import React from 'react';
import { Outlet } from 'react-router';
import StudenNavBar from './StudentNavBar';

const StudentHome = () => {
  return (
    <div>
      <StudenNavBar />
      <Outlet />
    </div>
  );
};

export default StudentHome;
