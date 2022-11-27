import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { ethers } from 'ethers';
import swal from 'sweetalert';

import './App.css';
import Company from './Registration/Company';
import Faculty from './Registration/Faculty';
import Login from './Login/login/Login.js';
import Register from './Registration/Register.js';
import Student from './Registration/Student';
import ApplyInCompany from './Login/Student/ApplyInCompany';
import Welcome from './Welcome.js';
import ApplyForLor from './Login/Student/ApplyForLor';
import AccountPage from './Login/Student/AccountPage';
import StudentHome from './Login/Student/StudentHome';
import FacultyPage from './Login/Faculty/FacultyPage';

import PlacementAddress from '../contractsData/Placement-address.json';
import PlacementAbi from '../contractsData/Placement.json';
import CompanyDetails from './Login/Student/CompanyDetails';
import ApplyToFaculty from './Login/Student/ApplyToFaculty';
import CompanyHome from './Login/Company/CompanyHome';
import ControlRegistration from './Login/Company/ControlRegistration';
import CompanyAccount from './Login/Company/CompanyAccount';
import StudentsApplied from './Login/Company/StudentsApplied';

function App() {
  const [account, setAccount] = useState(null);
  const [placement, setPlacement] = useState({});
  const [provider, setProvider] = useState();

  const web3Handler = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    setAccount(accounts[0]);
    console.log('Acc= ', accounts[0]);
    console.log('Acc state= ', account);

    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log('After provider');
    setProvider(provider);
    // Set signer
    const signer = provider.getSigner();

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    });

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0]);
      await web3Handler();
    });
    loadContracts(signer);
    console.log('Acc :', account);
  };
  const loadContracts = async (signer) => {
    console.log('in load Contract');

    const placement = new ethers.Contract(
      PlacementAddress.address,
      PlacementAbi.abi,
      signer
    );
    setPlacement(placement);
    console.log('Loaded..', placement, account);
    swal('Successfully connected', '', 'success');
    // setLoading(false)
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Register />}>
          <Route
            index
            element={
              <Student
                web3Handler={web3Handler}
                account={account}
                placement={placement}
                provider={provider}
              />
            }
          />
          <Route
            path='student'
            element={
              <Student
                web3Handler={web3Handler}
                account={account}
                placement={placement}
                provider={provider}
              />
            }
          />
          <Route
            path='faculty'
            element={
              <Faculty
                web3Handler={web3Handler}
                account={account}
                placement={placement}
                provider={provider}
              />
            }
          />
          <Route
            path='company'
            element={
              <Company
                web3Handler={web3Handler}
                account={account}
                placement={placement}
                provider={provider}
              />
            }
          />
        </Route>
        <Route
          path='/login'
          element={
            <Login
              web3Handler={web3Handler}
              account={account}
              placement={placement}
              provider={provider}
            />
          }
        />
        <Route
          path='/student-home'
          element={<StudentHome placement={placement} />}
        >
          <Route index element={<ApplyInCompany placement={placement} />} />
          <Route
            path='company'
            element={<ApplyInCompany placement={placement} />}
          />
          <Route path='lor' element={<ApplyForLor placement={placement} />} />
          <Route
            path='account'
            element={<AccountPage placement={placement} />}
          />
          <Route
            path='company-details'
            element={<CompanyDetails placement={placement} />}
          />
          <Route path='apply-faculty' element={<ApplyToFaculty />} />
        </Route>
        <Route
          path='/faculty-home'
          element={<FacultyPage placement={placement} />}
        />
        <Route path='/company-home' element={<CompanyHome placement={placement} provider={provider} />}>
          <Route index element={<ControlRegistration placement={placement} provider={provider} />} />
          <Route
            path='control-registration'
            element={<ControlRegistration placement={placement} provider={provider} />}
          />
          <Route path='students-applied' element={<StudentsApplied placement={placement} provider={provider} />} />
          <Route path='account' element={<CompanyAccount placement={placement} provider={provider} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
