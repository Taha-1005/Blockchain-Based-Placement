import './style.css';
import profile from '../../images/user.jpg';
import email from '../../images/email.jpg';
import password from '../../images/password.png';
import extractErrorCode from '../../ErrorMessage';

import swal from 'sweetalert';
import { useState } from 'react';

import { useNavigate } from 'react-router';

const Login = ({ web3Handler, account, placement, provider }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: '',
    password: '',
  });
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };
  function containsAnyLetters(str) {
    return /[a-zA-Z]/.test(str);
  }
  const loginUser = async () => {
    console.log('In login');
    if (account != null) {
      let isStudent, isFaculty, isCompany, txn;
      try {
        console.log(
          user.id,
          user.password,
          parseInt(user.id[0].toString(), 10),
          typeof parseInt(user.id[0].toString(), 10)
        );

        // faculty or company
        if (!containsAnyLetters(user.id[0].toString())) {
          console.log('Faculty or company');
          isFaculty = await placement.facultyAddress(account);
          console.log('Faculty ', isFaculty);

          if (isFaculty) {
            try {
              txn = await placement.loginFaculty(
                parseInt(user.id[0], 10),
                user.password[0]
              );
              console.log('Faculty login done ...txn');
              let _loggedIn = await placement.facultyLoggedIn(account);
              console.log(_loggedIn);
              swal('Hurray', 'Logged in Successfully', 'success');
              navigate('/faculty-home');
            } catch (err) {
              let x = JSON.stringify(err);
              console.log('Error: ', err, 'to string', x);
              const errMsg = extractErrorCode(x);
              console.log('Error in logging in: ', errMsg);
              swal('Oops!', errMsg, 'error');
            }
          } else {
            isCompany = await placement.companyAddress(account);
            // user is company
            if (isCompany) {
              console.log('Is company ');
              try {
                txn = await placement.loginCompany(
                  parseInt(user.id[0], 10),
                  user.password[0]
                );
                console.log('Company login done ...txn');
                let _loggedIn = await placement.companyLoggedIn(account);
                console.log(_loggedIn);
                swal('Hurray', 'Logged in Successfully', 'success');
                navigate('/company-home');
              } catch (err) {
                let x = JSON.stringify(err);

                console.log('Error: ', err, 'to string', x);
                const errMsg = extractErrorCode(x);
                console.log('Error in logging in: ', errMsg);
                swal('Oops!', errMsg, 'error');
              }
            } //not registered
            else {
              swal(
                'Oops!',
                'You are not Registered with this account in our portal.\n Kindly check the account or Register first',
                'error'
              );
            }
          }
        }
        // user id is alphanumeric
        else {
          isStudent = await placement.studentAddress(account);
          console.log('isStudent: ', isStudent);
          if (isStudent) {
            console.log(
              'is student ',
              typeof parseInt(user.id, 10),
              user.password
            );
            try {
              txn = await placement.loginStudent(
                user.id[0].toString(),
                user.password[0]
              );
              console.log('Student login done ...txn');
              provider.waitForTransaction(txn.hash).then(async function () {
                let temp = await placement.studentLoggedIn(account);
                console.log(temp);
                navigate('/student-home/company');
                swal('Hurray', 'Logged in Successfully', 'success');
              });
            } catch (err) {
              // let x = err.message.toString();
              let x = JSON.stringify(err);
              console.log('Error: ', err, 'to string', x);
              const errMsg = extractErrorCode(x);
              console.log('Error in registering: ', errMsg);
              swal('Oops!', errMsg, 'error');
            }
          } else {
            swal(
              'Oops!',
              // 'You are not Registered in our portal. Kindly Register to Login ',
              'You are not Registered with this account',

              'error'
            );
          }
        }
      } catch (err) {
        // console.log('Error: ', err);
        const errMsg = extractErrorCode(err.toString());
        console.log('Error in registering: ', errMsg);
        swal('Oops!', errMsg, 'error');
      }
    } else {
      // alert('Please connect your metamask account before rgistering.');
      swal(
        'Oops',
        'Please connect your metamask account before registering.',
        'error'
      );
    }
  };

  return (
    <div>
      <body className='body3'>
        <div className='container'>
          <div className='sign-up'>
            <h1 className='heading'>
              <b>SIGN IN</b>
            </h1>

            <div className='text'>
              <img height='20px' src={email} />
              <input
                placeholder=' example@nirmauni.ac.in'
                type='email'
                name='id'
                onChange={onChange}
              />
            </div>
            <div className='text'>
              <img height='30px' src={password} />
              <input
                placeholder=' Password'
                type='password'
                name='password'
                onChange={onChange}
              />
            </div>
            <p></p>

            <button className='button_login' onClick={web3Handler}>
              Connect Wallet
            </button>

            <button className='button_login' onClick={loginUser}>
              LOGIN
            </button>
            <p className='conditions'>
              Don't have an account ? <a href='/register/student'>Register</a>
            </p>
          </div>
          <div className='text-container'></div>
        </div>
      </body>
    </div>
  );
};

export default Login;
// TODO
// 19bce269 => 19
