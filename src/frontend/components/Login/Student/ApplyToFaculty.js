import React from 'react';
import { useLocation } from 'react-router';
import '../../../Styles/ApplyToFacultyStyle.css';

const ApplyToFaculty = () => {
  const location = useLocation();
  const facultyData = location.state.data;
  let desc = '';
  console.log(location);
  //Put stuff for student to enter why faculty should give LOR
  return (
    <div className='applyFacBody'>
      <h1 className='facName'>{facultyData.name}</h1>
      <div className='descriptionBody'>
        <p className='question'>
          Enter why the faculty should give you LOR. Also mention required
          details for the LOR
        </p>
        <textarea className='desc' type='textarea' />
      </div>
    </div>
  );
};

export default ApplyToFaculty;
