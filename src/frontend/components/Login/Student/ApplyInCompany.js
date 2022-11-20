import React, { useState,useEffect } from 'react';
import CompanyCard from './CompanyCard';

const ApplyInCompany = ({placement}) => {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
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

  // const companies = [
  //   {
  //     eligibleBranches: ['CSE', 'EE'],
  //     name: 'A',
  //     ctc: 8.8,
  //     onlyInternship: '0',
  //     onlyJob: '0',
  //     internshipAndJob: '1',
  //     linkToWebsite: 'a.com',
  //     location: ['PAN INDIA'],
  //     category: 'A',
  //     minBacklogs: '0',
  //     minPpi: '7.5',
  //     seatsAvailable: '',
  //     post: 'Software Engineer',
  //   },
  //   {
  //     eligibleBranches: ['ME', 'EE'],
  //     name: 'B',
  //     ctc: 8.5,
  //     onlyInternship: '0',
  //     onlyJob: '1',
  //     internshipAndJob: '0',
  //     linkToWebsite: 'b.com',
  //     location: ['Surat', 'Banglore'],
  //     category: 'A',
  //     minBacklogs: '0',
  //     minPpi: '7.8',
  //     seatsAvailable: '10',
  //     post: 'Software Engineer',
  //   },
  //   {
  //     eligibleBranches: ['CSE', 'CH'],
  //     name: 'C',
  //     ctc: 11,
  //     onlyInternship: '1',
  //     onlyJob: '0',
  //     internshipAndJob: '0',
  //     linkToWebsite: 'c.com',
  //     location: ['Rajkot', 'Banglore', 'Mumbai', 'Hyderabad'],
  //     category: 'A',
  //     minBacklogs: '0',
  //     minPpi: '7.5',
  //     seatsAvailable: '',
  //     post: 'Software Engineer',
  //   },
  // ];
 
  const listRegisteredCompanies = async () => {
    let _companies = []
    console.log("lisiting companies ",placement);
    const totalCompanies = await placement.totalCompanies();

    for (let index = 1; index <= totalCompanies; index++) {
      const _company = await placement.companies(index)
      // if (_company.isListed) {
      console.log("Company registered ", _company.name);
      console.log("Company wallet ", _company.company);
      console.log("Company description  ", _company.description);
      console.log("Company  ", parseInt(_company.category.toHexString(), 16));
      console.log(_company.ctc, _company.location);

      // get total price of _company (_company price + fee)
      // const totalPrice = await placement.getTotPrice(_company._companyId)
      console.log()
      _companies.push({
        eligibleBranches: [],
        name: _company.name,
        ctc: _company.ctc,
        onlyInternship: '',
        onlyJob: '',
        internshipAndJob: '',
        linkToWebsite: '',
        location: [],
        category: _company.category,
        minBacklogs: _company.maxBackLogs,
        minPpi: _company.minPPI,
        seatsAvailable: '',
      })
      // }
    }

    setLoading(false);
    setCompanies(_companies);

  }
  useEffect(() => {
    listRegisteredCompanies()
  }, [])
  // if (loading) return (
  //   <main style={{ padding: "1rem 0" }}>
  //     <h2>Loading....</h2>
  //   </main>
  // )
  return (
    <div className='applyCompany'>
      {// {company.map((comp) => (
      }
      {
        companies.map((comp) => (
        <CompanyCard companyData={comp} key={comp.name} />
        ))

        
      }
    </div>
  );
};
export default ApplyInCompany;
