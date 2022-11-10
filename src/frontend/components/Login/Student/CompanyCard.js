import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import './CompanyCard.css';
const CompanyCard = ({ companyData }) => {
  let navigate = useNavigate();
  function showCompanyDetils() {
    // navigate('/');
  }

  return (
    <div className='companyCard' onClick={showCompanyDetils}>
      <div className='post'>{companyData.post}</div>
      <div className='cardTitle'>{companyData.name}</div>
      <div className='cardBody'>
        <div className='jobType'>
          <p>Jobt Type</p>
          <p>{companyData.post}</p>
        </div>
        <div className='ctc'>
          <p>Cost to Company</p>
          <p>{'INR ' + companyData.ctc + ' LPA'}</p>
        </div>
        <div className='location'>
          <p>Location/s</p>
          <p>{companyData.location}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
