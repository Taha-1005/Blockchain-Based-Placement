import React from 'react';

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
      <FacultyCard />
    </div>
  );
};

export default ApplyForLor;

function FacultyCard(props) {
  return (
    <div className='facultyCard'>
      <div className='title'>props.name</div>
      <div className='branch'>props.branch</div>
      <div className='wesite'>props.linkToWebsite</div>
    </div>
  );
}
