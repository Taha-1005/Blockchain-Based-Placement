import React from 'react';
import { Link } from 'react-router-dom';
import './ApplyForLor.css';

const ApplyForLor = () => {
  const mockData = [
    {
      name: 'Prof. Sharada Valeveti',
      branch: 'CSE',
      linkToWebsite: 'a.com',
    },
    {
      name: 'Prof. Anitha Modi',
      branch: ['CSE', 'EE'],
      linkToWebsite: 'b.com',
    },
    {
      name: 'Prof. Priyank Thakkar',
      branch: 'CSE',
      linkToWebsite: 'c.com',
    },
  ];

  return (
    <div>
      ApplyForLor
      {mockData.map((faculty) => (
        <FacultyCard faculty key={faculty.name} />
      ))}
    </div>
  );
};

export default ApplyForLor;

function FacultyCard(props) {
  return (
    <Link
      className='link'
      to='/student-home/company-details'
      state={{ data: props }}
    >
      <div className='facultyCard'>
        <div className='title'>props.name</div>
        <div className='branch'>props.branch</div>
        <div className='wesite'>props.linkToWebsite</div>
      </div>
    </Link>
  );
}
