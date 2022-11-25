import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ApplyForLor.css';

const ApplyForLor = () => {
  const navigate = useNavigate();

  const applyPage = (faculty) => {
    navigate('/student-home/apply-faculty', {
      state: {
        data: faculty,
      },
    });
  };

  const mockData = [
    {
      name: 'Prof. Sharada Valeveti',
      branch: ['CSE'],
      linkToWebsite: 'https://a.com',
    },
    {
      name: 'Prof. Anitha Modi',
      branch: ['CSE'],
      linkToWebsite: 'https://b.com',
    },
    {
      name: 'Prof. Priyank Thakkar',
      branch: ['CSE'],
      linkToWebsite: 'https://c.com',
    },
    {
      name: 'Prof. Harshal Kapadia',
      branch: ['IC', 'EE'],
      linkToWebsite: 'https://d.com',
    },
  ];

  return (
    <div>
      {mockData.map((faculty) => (
        <FacultyCard
          key={faculty.name}
          {...faculty}
          handleClick={(event) => applyPage(faculty)}
        />
      ))}
    </div>
  );
};

export default ApplyForLor;

function FacultyCard(props) {
  console.log(props.handleClick);
  const { name, branch, linkToWebsite, handleClick } = props;
  return (
    <div className='facultyCard'>
      <div className='facultyName'>{name}</div>
      <div className='facultyCardBody'>
        <div className='facultyBranch'>
          {' '}
          Branches which can apply: <p>{branch.join(', ')}</p>
        </div>
        <div className='website'>
          Portfolio Link:
          <p>
            <a href={linkToWebsite} target={'_blank'}>
              Go to website
            </a>
          </p>
        </div>
      </div>
      <button className='applyBtn' onClick={handleClick}>
        Apply for LOR
      </button>
    </div>
  );
}
