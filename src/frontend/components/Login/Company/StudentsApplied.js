import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import swal from 'sweetalert';
import extractErrorCode from '../../ErrorMessage';

const StudentsApplied = ({ placement,provider }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [students, setStudents] = useState([]);
  const { state } = useLocation();
  const listRegisteredStudents = async () => {
    const companyId = state.companyId;
    let studentsData = [];
    console.log('lisiting students ', placement);
    console.log(!placement.interface);
    // if (!placement.interface) {
      // swal("Oops!", "Session expired... Don't referesh ", 'warning');
      // navigate('/login');
      // return;
    // }

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
      console.log("Student id", student, " Company id: ", typeof (companyId));
      if (studentDetails.companyId != companyId) {
        studentsData.push({
          name: studentDetails.name,
          branch: "CSE",
          linkToWebsite: 'https://a.com',
          studentId: student,
          companyId: companyId
        });
      }
    }

    setLoading(false);
    setStudents(studentsData);
  };
  const handleControlRegisteration = async (e) => {
    console.log("Placement who applied: ", placement);
   
    const companyId = state.companyId;

    navigate('/company-home/control-registration', {
      state: {
        companyId: companyId
      }
    })

  };
  
  useEffect(() => {
    // if (!state) {
    //   swal('Oops!', "Start Registeration or End to see the student list", 'error');
    //   navigate('/company-home/control-registration')
    // } else {
    if (!placement.interface) {
      console.log("placement not defiined, ", placement);
      navigate("/login");

    }
      listRegisteredStudents();
    // }
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
          placement={placement}
          provider={provider}
          key={student.name}
          {...student}
          // onClick={selectStudent(student)}
          // handleClick={(event) => selectStudent(student)}
        />
      ))}
      <button className='' style={{ position:"absolute",padding: 10, backgroundColor: "rebeccapurple", color: "white", bottom:0,left:0 }} onClick={handleControlRegisteration}>
        Control Registerations
      </button>

    </div>
  )
}

export default StudentsApplied


function StudentCard(props) {
  // const placement = props.placement;
  // const provider= props.provider;
  console.log("In card",props.companyId);
  const { placement,provider,name, branch, linkToWebsite, studentId,companyId,handleClick } = props;
  const selectStudent = async () => {
    let txn;
    console.log("Select stud");
    try {
      console.log("Clicked", companyId, studentId);
      txn = await placement.addSelected(companyId, studentId);
      // wait for transaction

      console.log(txn.hash);
      provider
        .waitForTransaction(txn.hash)
        .then(async function (txn) {
          console.log('Transaction Mined: ' + txn);
          //  todo
          const selectedStudents = await placement.getSelectedStudents(companyId);
          console.log(selectedStudents[0], "is hired");
          // navigate('/login');
          swal(
            'Hurray!!',
            'You have hired successfully!',
            'success'
          );
          // let tot = await placement.totalStudents();
          // console.log("Total studs ", tot);

        });
    } catch (err) {
      let errMsg = JSON.stringify(err);
      errMsg = extractErrorCode(errMsg);
      console.log('Error in registering: ', errMsg);
      swal('Oops!', errMsg, 'error');
    }
  }
  
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
      <button className='applyBtn' onClick={selectStudent}>
        Hire Student
      </button>
    </div>
  );
}
