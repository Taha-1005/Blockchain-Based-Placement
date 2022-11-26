import React from 'react';
import { useLocation } from 'react-router';

const ApplyToFaculty = () => {
  const location = useLocation();
  const facultyData = location.state.data;
  console.log(location);
  //Put stuff for student to enter why faculty should give LOR
  return <div>{facultyData.name}</div>;
};

export default ApplyToFaculty;
