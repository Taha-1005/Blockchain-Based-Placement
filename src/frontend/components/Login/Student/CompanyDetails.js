import React from 'react';
import './CompanyDetails.css'
import { useLocation, useSearchParams } from 'react-router-dom';

const CompanyDetails = () => {
  const location = useLocation();
  const companyData = location.state?.data;
  // console.log(companyData);
  return (
    <div className='details'>
      <h1 className='title'>{companyData.name}</h1>
      <div className='header'>Post:</div>
      <div className='post'>{companyData.post}</div>
      <div className='jobType'>
        <p>Jobt Type</p>
        <p>{companyData.post}</p>
      </div>
      <div className='ctc'>
        <p>Cost to Company</p>
        <p>{'INR ' + companyData.ctc + ' LPA'}</p>
      </div>
      <div className='location'>{companyData.location.join(', ')}</div>
    </div>
  );
};

export default CompanyDetails;
