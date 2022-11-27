import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../Styles/ApplyForLor.css';
import { useState, useEffect } from 'react';

const ApplyForLor = ({ placement }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [faculties, setFaculties] = useState([]);

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
  const listRegisteredFaculties = async () => {
    let facultiesData = [];
    console.log('lisiting faculties ', placement);
    const totalFaculties = await placement.totalFaculties();

    for (let index = 1; index <= totalFaculties; index++) {
      const _faculty = await placement.faculties(index);
      // if (_faculty.isListed) {
      console.log('Faculty registered ', _faculty.name);
      console.log('Faculty wallet ', _faculty.faculty);
      console.log(_faculty.branch);

      // get total price of _faculty (_faculty price + fee)
      // const totalPrice = await placement.getTotPrice(_faculty._facultyId)
      console.log();
      facultiesData.push({
        name: 'Prof. ' + _faculty.name,
        branch: [_faculty.branch],
        linkToWebsite: 'https://a.com',
      });
    }

    setLoading(false);
    setFaculties(facultiesData);
  };

  useEffect(() => {
    listRegisteredFaculties();
  }, []);
  if (loading)
    return (
      <main style={{ padding: '1rem 0' }}>
        <h2>Loading....</h2>
      </main>
    );
  return (
    <div>
      {faculties.map((faculty) => (
        <FacultyCard
          key={faculty.name}
          {...faculty}
          handleClick={(event) => applyPage(faculty)}
        />
      ))}
      {
        // mockData.map((faculty) => (
        //     <FacultyCard
        //       key={faculty.name}
        //       {...faculty}
        //       handleClick={(event) => applyPage(faculty)}
        //     />
        //   ))
      }
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
