import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';

const StudentsApplied = ({ placement }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [students, setStudents] = useState([]);
  const { state } = useLocation();
  const listRegisteredStudents = async () => {
    const companyId = state.companyId;
    let studentsData = [];
    // console.log('lisiting students ', placement, JSON.stringify(placement).length);

    // if (JSON.stringify(placement).length == 2) {
    //   swal("Oops!", "Login again", 'warning');
    //   navigate('/login');
    //   return;
    // }
    const registeredStudents = await placement.getRegisteredStudents(companyId);
    console.log(registeredStudents);
    const totalRegisteredStudents = registeredStudents.length;
    console.log("tot student", totalRegisteredStudents);

    for (let index = 0; index < totalRegisteredStudents; index++) {
      const student = registeredStudents[index];
      console.log(student);
      
      console.log("Rollno: ",student);
      const studentDetails = await placement.students(student);
      // get total price of student (student price + fee)
      // const totalPrice = await placement.getTotPrice(student.studentId)
      console.log();
      studentsData.push({
        name: studentDetails.name,
        branch: "CSE",
        linkToWebsite: 'https://a.com',
      });
    }

    setLoading(false);
    setStudents(studentsData);
  };

  useEffect(() => {
    if (!state) {
      swal('Error', "login", 'error');
      navigate('/login')
    } else {
      listRegisteredStudents();
    }
  }, []);
  if (loading)
    return (
      <main style={{ padding: '1rem 0' }}>
        <h2>Loading....</h2>
      </main>
    );
  return (

    <div>
      {students.map((student) => (
        <StudentCard
          key={student.name}
          {...student}
          // handleClick={(event) => applyPage(student)}
        />
      ))}
    </div>
  )
}

export default StudentsApplied


function StudentCard(props) {
  console.log(props.handleClick);
  const { name, branch, linkToWebsite, handleClick } = props;
  return (
    <div className='facultyCard'>
      <div className='facultyName'>{name}</div>
      <div className='facultyCardBody'>
        <div className='facultyBranch'>
          {' '}
          Branch: <p>{branch}</p>
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
        Hire Student
      </button>
    </div>
  );
}
