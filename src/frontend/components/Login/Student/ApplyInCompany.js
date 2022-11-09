import React, { useState } from 'react';

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
  return <div>ApplyInCompany</div>;
};
export default ApplyInCompany;
