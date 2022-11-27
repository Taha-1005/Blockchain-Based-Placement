import React from 'react';
import { Navigate, useNavigate } from 'react-router';
import { createSearchParams, Link } from 'react-router-dom';
import '../../../Styles/CompanyCard.css';
const CompanyCard = ({ companyData }) => {
  console.log("comp data, ",companyData.location,companyData.name);

  const GetLocation = () => {
    return <div className='locations'>{companyData.location}</div>;
  };

  return (
    <Link
      className='link'
      to='/student-home/company-details'
      state={{ data: companyData }}
    >
      <div className='companyCard' data-hover='Click to Apply'>
        <div className='post'>{companyData.post}</div>
        <div className='cardTitle'>{companyData.name}</div>
        <div className='cardBody'>
          <div className='jobType'>
            <p className='forP1'>Job Type</p>
            <p className='forP2'>{companyData.post}</p>
          </div>
          <div className='ctc'>
            <p className='forP1'>Cost to Company</p>
            <p className='forP2'>{'INR ' + companyData.ctc + ' LPA'}</p>
          </div>
          <div className='location'>
            <p className='forP1'>Location/s</p>
            <GetLocation />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
