import React, { useState } from 'react';
import { useLocation } from 'react-router';
import '../../../Styles/ApplyToFacultyStyle.css';

const ApplyToFaculty = () => {
  const location = useLocation();
  const facultyData = location.state.data;
  const [desc, setDesc] = useState();
  // console.log(location);

  const assignDesc = (e) => {
    setDesc(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className='applyFacBody'>
      <h1 className='facName'>{facultyData.name}</h1>
      <div className='descriptionBody'>
        <p className='question'>
          Enter why the faculty should give you LOR. Also mention required
          details for the LOR
        </p>
        <textarea className='desc' onChange={assignDesc} />
        <button className='finalApply'>Apply for LOR</button>
      </div>
    </div>
  );
};

export default ApplyToFaculty;
