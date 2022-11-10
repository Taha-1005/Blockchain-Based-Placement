import React, { useState } from 'react';
import CompanyCard from './CompanyCard';

const ApplyInCompany = () => {
  const [company, setCompany] = useState({
    eligibleBranches: [],
    name: '',
    ctc: '',
    onlyInternship: '',
    onlyJob: '',
    internshipAndJob: '',
    linkToWebsite: '',
    location: [],
    category: '',
    minBacklogs: '',
    minPpi: '',
    seatsAvailable: '',
  });

  const companies = [
    {
      eligibleBranches: ['CSE', 'EE'],
      name: 'A',
      ctc: 8.8,
      onlyInternship: '0',
      onlyJob: '0',
      internshipAndJob: '1',
      linkToWebsite: 'a.com',
      location: ['PAN INDIA'],
      category: 'A',
      minBacklogs: '0',
      minPpi: '7.5',
      seatsAvailable: '',
      post: 'Software Engineer',
    },
    {
      eligibleBranches: ['ME', 'EE'],
      name: 'B',
      ctc: 8.5,
      onlyInternship: '0',
      onlyJob: '1',
      internshipAndJob: '0',
      linkToWebsite: 'b.com',
      location: ['Surat', 'Banglore'],
      category: 'A',
      minBacklogs: '0',
      minPpi: '7.8',
      seatsAvailable: '10',
      post: 'Software Engineer',
    },
    {
      eligibleBranches: ['CSE', 'CH'],
      name: 'C',
      ctc: 11,
      onlyInternship: '1',
      onlyJob: '0',
      internshipAndJob: '0',
      linkToWebsite: 'c.com',
      location: ['Rajkot'],
      category: 'A',
      minBacklogs: '0',
      minPpi: '7.5',
      seatsAvailable: '',
      post: 'Software Engineer',
    },
  ];
  return (
    <div className='applyCompany'>
      {companies.map((comp) => (
        <CompanyCard companyData={comp} />
      ))}
    </div>
  );
};
export default ApplyInCompany;
