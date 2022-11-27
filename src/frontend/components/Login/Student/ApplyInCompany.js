import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import CompanyCard from './CompanyCard';

const ApplyInCompany = ({ placement }) => {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  const mockData = [
    {
      eligibleBranches: ['CSE', 'EE'],
      name: 'Samsung',
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
      desc: 'This is our descripion',
    },
    {
      eligibleBranches: ['ME', 'EE'],
      name: 'ZS Associates',
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
      desc: 'This is our descripion',
    },
    {
      eligibleBranches: ['CSE', 'CH'],
      name: 'Taha Studios',
      ctc: 11,
      onlyInternship: '1',
      onlyJob: '0',
      internshipAndJob: '0',
      linkToWebsite: 'c.com',
      location: ['Rajkot', 'Banglore', 'Mumbai', 'Hyderabad'],
      category: 'A',
      minBacklogs: '0',
      minPpi: '7.5',
      seatsAvailable: '',
      post: 'Software Engineer',
      desc: 'This is our descripion',
    },
  ];

  const listRegisteredCompanies = async () => {
    let companiesData = [];
    console.log('lisiting companies ', placement);
    if (placement == null) {
      swal("Oops", "Login again ", 'error');
      return;
    }
    const totalCompanies = await placement.totalCompanies();

    for (let index = 1; index <= totalCompanies; index++) {
      const _company = await placement.companies(index);
      // if (_company.isListed) {
      console.log('Company registered ', _company.name);
      console.log('Company wallet ', _company.company);
      console.log('Company description  ', _company.description);
      console.log('Company  ', parseInt(_company.category.toHexString(), 16));
      console.log(_company.ctc, _company.location);

      // get total price of _company (_company price + fee)
      // const totalPrice = await placement.getTotPrice(_company._companyId)
      console.log();
      companiesData.push({
        companyId:index,
        eligibleBranches: [],
        name: _company.name,
        ctc: _company.ctc,
        // onlyInternship: '',
        // onlyJob: '',
        // internshipAndJob: '',
        // linkToWebsite: '',
        description:_company.description,
        location: _company.location,
        category: parseInt(_company.category.toHexString(), 16),
        minBacklogs: _company.maxBackLogs,
        minPpi: _company.minPPI,
        // seatsAvailable: '',
      });
      // }
    }

    setLoading(false);
    setCompanies(companiesData);
  };
  useEffect(() => {
    listRegisteredCompanies();
  }, []);
  if (loading)
    return (
      <main style={{ padding: '1rem 0' }}>
        <h2>Loading....</h2>
      </main>
    );
  return (
    <div className='applyCompany'>
      {
        companies.map((comp) => (
        <CompanyCard companyData={comp} key={comp.name} />
        ))
      }
      {
          mockData.map((comp) => (
          <CompanyCard companyData={comp} key={comp.name} />
        ))
      }
    </div>
  );
};
export default ApplyInCompany;
